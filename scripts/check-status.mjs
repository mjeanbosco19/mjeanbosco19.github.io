// Checks each public system on the status board and records the result in
// src/content/status.json. Runs before every build (CI and locally), so the
// board shows a real, dated observation rather than a hard-coded "online".
import { readFile, writeFile } from 'node:fs/promises';

const systems = JSON.parse(await readFile(new URL('../src/content/systems.json', import.meta.url), 'utf8'));

async function check({ id, url, checkUrl }) {
  const target = checkUrl ?? url;
  try {
    const res = await fetch(target, {
      redirect: 'follow',
      signal: AbortSignal.timeout(15_000),
      headers: { 'user-agent': 'jeanbosco.tech status check' },
    });
    let version;
    if (target.startsWith('https://registry.npmjs.org/') && res.ok) {
      version = (await res.json())['dist-tags']?.latest;
    }
    return [id, { status: res.status, ok: res.ok, ...(version ? { version } : {}) }];
  } catch {
    return [id, { status: 0, ok: false }];
  }
}

const results = Object.fromEntries(await Promise.all(systems.map(check)));
const out = { checkedAt: new Date().toISOString(), results };
await writeFile(new URL('../src/content/status.json', import.meta.url), `${JSON.stringify(out, null, 2)}\n`);

for (const [id, r] of Object.entries(results)) console.log(`${r.ok ? 'ok  ' : 'FAIL'} ${r.status} ${id}`);
