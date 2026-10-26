import systemsData from './systems.json';

// Every claim here mirrors the approved CV (cv-workspace/cv-sources.md).
// MoH usage is described only in NDA-approved terms; no patient or case counts.

export const person = {
  name: 'Jean Bosco Mugiraneza',
  role: 'Software engineer',
  statement: 'I build the software behind Rwanda’s national emergency and telehealth services.',
  intro:
    'Software Engineer at the Rwanda Ministry of Health’s National Health Intelligence Centre, seconded by UNFPA Rwanda. I co-founded ETITE Ltd in 2020. I work across the whole system: NestJS and PostgreSQL services, Next.js front ends, real-time video, identity and security, and the infrastructure underneath.',
  location: 'Kigali, Rwanda',
  email: 'mjeanbosco19@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mjeanbosco19',
  github: 'https://github.com/mjeanbosco19',
  site: 'https://jeanbosco.tech',
  award: {
    title: 'Best Employee of the Year 2025–2026',
    org: 'Rwanda Ministry of Health',
    url: 'https://www.moh.gov.rw/about/overview',
  },
} as const;

export type System = {
  id: string;
  name: string;
  does: string;
  owner: string;
  url: string;
  /** What the build-time status check fetches (defaults to url). */
  checkUrl?: string;
  caseStudy?: string;
};

/** Public systems I built or co-built, shown on the status board. */
export const systems: System[] = systemsData;

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  period: string;
  context: string;
  built: string[];
  results: { value: string; label: string }[];
  stack: string[];
  links: { label: string; url: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'ebanguka',
    title: 'eBanguka, Rwanda’s national emergency medical services system',
    summary:
      'One system for emergency calls, ambulance dispatch, crews and hospitals, running countrywide and supporting hundreds of healthcare providers.',
    role: 'Software engineer in a team of three, working across the API, the web application and the data model.',
    period: 'Jul 2025 – present',
    context:
      'Emergency care depends on minutes. Call-centre staff, dispatchers, ambulance crews and receiving hospitals need the same picture of every case, and national reporting has to be trustworthy.',
    built: [
      'Emergency call intake and ambulance dispatch, including grouped multi-casualty incidents and live dispatch tracking.',
      'Crew shifts with geofenced check-in, crew swaps and attendance reports.',
      'Clinical patient-care records and national reporting.',
      'Facility-scoped access control from a generated permission matrix, with patient-data masking.',
      'Partner integrations: insurance eligibility, national ID lookup and the health information exchange.',
      'Bulk national exports moved off the API to a database-backed job queue with a dedicated worker that streams files to object storage.',
      'A data-integrity programme on response-time data: about 25 targeted fixes, an anomaly detector and repair scripts that record the source of every correction.',
    ],
    results: [
      { value: 'Nationwide', label: 'In production, supporting hundreds of healthcare providers' },
      {
        value: 'Real time',
        label: 'Dispatch, crews and hospitals share the same live picture of every case',
      },
      { value: 'Role-based', label: 'Facility-scoped access control with patient-data masking' },
    ],
    stack: [
      'NestJS',
      'Prisma',
      'PostgreSQL',
      'Socket.IO',
      'Next.js',
      'React',
      'Leaflet / Google Maps',
      'Docker',
      'GitHub Actions',
    ],
    links: [{ label: 'ebanguka.moh.gov.rw', url: 'https://ebanguka.moh.gov.rw' }],
  },
  {
    slug: 'meet',
    title: 'ETITE Meet, a multi-tenant video platform',
    summary:
      'A multi-tenant video platform on LiveKit that other products embed with a small SDK published on npm.',
    role: 'Designed and built the platform: API, consumer backend, two web apps, embed SDK and deployment.',
    period: 'Feb 2026 – present',
    context:
      'Products need video calls they can embed safely, that record reliably and that run on modest servers, without each team rebuilding the same infrastructure.',
    built: [
      'A multi-tenant API on LiveKit: rooms, recording, live streaming and HMAC-signed webhooks.',
      'A versioned OpenAPI contract with CI drift checks, and an embed SDK published on npm.',
      'Webhook delivery with replay protection and an idempotent event ledger, so integrators never miss or double-process an event.',
      'A consumer backend with its own identity, organisations and mail, talking to the platform only through its public API.',
      'One deployment bundle that runs the same images in several environments.',
    ],
    results: [
      { value: '~2 KB', label: 'Embed SDK with no dependencies' },
      { value: 'Versioned', label: 'OpenAPI contract with CI checks that catch drift' },
      { value: 'Signed', label: 'Webhooks with replay protection and an idempotent ledger' },
    ],
    stack: ['NestJS 11', 'Prisma 7', 'BullMQ', 'LiveKit', 'Next.js 16', 'Docker'],
    links: [
      { label: 'meet.etite.tech', url: 'https://meet.etite.tech' },
      { label: '@etiteltd/meet-embed on npm', url: 'https://www.npmjs.com/package/@etiteltd/meet-embed' },
      { label: 'Embed quickstart on GitHub', url: 'https://github.com/mjeanbosco19/meet-embed-quickstart' },
    ],
  },
  {
    slug: 'telehealth',
    title: 'Telehealth and Ministry of Health systems',
    summary:
      'Clinical workflows for the National Telehealth Platform, plus the architecture behind the Ministry’s tracking and events systems.',
    role: 'Software engineer in a team of three.',
    period: 'Feb 2025 – present',
    context:
      'Remote consultations widen access to care across the country, and the Ministry’s own operations need systems that several organisations can share safely.',
    built: [
      'Telehealth workflows: appointments, teleconsultations, prescriptions, exam results and statistics dashboards.',
      'A new v2 back end in NestJS with permission-based authorisation.',
      'The V2 architecture for MoH Tracker (multiple organisations, roles, audit log, row-level policies) and its foundations, with a tenant-isolation test suite.',
      'QR-coded badges and invitations for MoH Events.',
      'I presented NHIC dashboards built on data from these systems, and supported the deployment of robots in Rwanda’s Marburg virus outbreak response.',
    ],
    results: [
      { value: 'Countrywide', label: 'Telehealth in production for hundreds of healthcare providers' },
      { value: '2024', label: 'Overall winner, Ministry of Health telehealth hackathon' },
      { value: '2025–26', label: 'Ministry of Health Best Employee of the Year' },
    ],
    stack: ['NestJS', 'Next.js', 'React', 'Prisma', 'PostgreSQL', 'LiveKit'],
    links: [
      { label: 'telehealth.moh.gov.rw', url: 'https://telehealth.moh.gov.rw' },
      { label: 'events.moh.gov.rw', url: 'https://events.moh.gov.rw' },
    ],
  },
  {
    slug: 'platform',
    title: 'ETITE products and infrastructure',
    summary:
      'Single sign-on, a multi-tenant ERP, team chat and the production fleet they run on, plus client systems delivered with my team of five.',
    role: 'Co-founded ETITE Ltd in 2020 and led its engineering team of five developers as Lead Engineer.',
    period: 'Oct 2020 – Feb 2025',
    context:
      'A small company shipping many products needs one identity, shared infrastructure and evidence that backups and security actually work.',
    built: [
      'Single sign-on for 35 applications on Keycloak, with MFA by default, passkeys and step-up checks for admin areas.',
      'A multi-tenant ERP on ERPNext v16 with Rwanda tax and holiday localisation.',
      'A Matrix-based chat with a 2.9 KB embeddable widget and end-to-end encryption.',
      'A five-server Docker production fleet: Traefik edge, private registry, self-hosted CI runners, central logs and metrics, and encrypted off-site backups with restore drills.',
      'A security review of the multi-tenant workspace product that closed about 20 issues, and accessibility checks (WCAG 2.1 AA) in CI.',
      'Client systems delivered with my team of five: the RITCO management information system, Woodhabitat ERP, the OAZIS learning platform and an HR platform. I designed the UX in Figma, planned the work, tested every feature and ran client feedback.',
    ],
    results: [
      { value: '24 /s at p95 73 ms', label: 'Sign-ins in load tests, covered by 837 automated checks' },
      { value: '< 50 s', label: 'Measured restore drills for identity and ERP' },
      { value: 'p50 69 ms', label: 'Chat message delivery with 200 users online' },
    ],
    stack: [
      'Keycloak',
      'ERPNext / Frappe',
      'Matrix Synapse',
      'Next.js',
      'NestJS',
      'Traefik',
      'Docker',
      'Prometheus / Grafana',
    ],
    links: [{ label: 'developers.etite.tech', url: 'https://developers.etite.tech' }],
  },
];

export const experience = [
  {
    period: 'Feb 2025 – present',
    title: 'Software Engineer',
    org: 'Rwanda Ministry of Health, National Health Intelligence Centre',
    note: 'Seconded by UNFPA Rwanda. Full-time, in a team of three developers.',
  },
  {
    period: 'Aug 2024',
    title: 'Overall winner, Telehealth Digital Tool Development Hackathon',
    org: 'Ministry of Health and RBC, with UNFPA and HDI',
    note: 'Overall winner with a team of three.',
  },
  {
    period: 'Dec 2022 – Oct 2023',
    title: 'Software Engineering Intern',
    org: 'Andela, Technical Leadership Program',
    note: 'E-commerce features in a distributed agile team, with tests and CI.',
  },
  {
    period: 'Oct 2020 – Feb 2025',
    title: 'Lead Engineer',
    org: 'ETITE Ltd',
    note: 'Co-founded ETITE Ltd in 2020 and led its engineering team of five developers.',
  },
] as const;

export const skills: { group: string; items: string }[] = [
  { group: 'Languages', items: 'TypeScript, JavaScript, Python, SQL, Bash' },
  {
    group: 'Back end',
    items: 'Node.js, NestJS, Express, FastAPI, Prisma, BullMQ, REST and OpenAPI, WebSockets, signed webhooks',
  },
  {
    group: 'Front end',
    items: 'React, Next.js, Tailwind CSS, TanStack Query, Zod, React Hook Form, PWA, i18n',
  },
  { group: 'Data', items: 'PostgreSQL, MariaDB, Redis and Valkey, S3 object storage' },
  {
    group: 'Real-time and AI',
    items:
      'LiveKit (WebRTC, recording, agents), Matrix, Whisper speech-to-text, LLM integration, text-to-speech',
  },
  {
    group: 'Infrastructure',
    items:
      'Docker, Linux, Traefik, Caddy, GitHub Actions, Prometheus and Grafana, OpenObserve, load testing, restore drills',
  },
  {
    group: 'Identity and security',
    items: 'Keycloak, OAuth2 and OIDC, SAML, MFA and passkeys, RBAC and row-level policies, OWASP ASVS',
  },
  {
    group: 'Testing and tools',
    items: 'Jest, Vitest, pytest, Playwright, axe, Git, Figma, Jira, Claude Code',
  },
];

export const awards = [
  {
    year: '2025–26',
    title: 'Best Employee of the Year',
    org: 'Rwanda Ministry of Health',
    url: 'https://www.moh.gov.rw/about/overview',
  },
  {
    year: '2024',
    title: 'Overall Winner, Telehealth Digital Tool Development Hackathon',
    org: 'Ministry of Health and RBC, with UNFPA and HDI',
  },
  {
    year: '2019',
    title: 'Certificate of Merit and Higher Education Scholarship',
    org: 'Rwanda Ministry of Education, for TABARA, an embedded emergency system linking patients to doctors',
  },
] as const;

export const education = [
  {
    title: 'Advanced Diploma in ICT (Information Technology)',
    detail: 'Second Class Upper Division, Rwanda Polytechnic – IPRC Kigali, 2021–2023 (conferred 2026)',
  },
  {
    title: 'National TVET Certificate V, Automobile Electricity and Electronics Systems',
    detail: 'IPRC Karongi, 2017–2019, ranked first in class each year',
  },
] as const;

export const certifications = [
  'Google IT Support Professional Certificate (2025)',
  'IBM: Linux Commands and Shell Scripting (2025)',
  'IBM: Agile Development and Scrum (2025)',
  'IBM: Git and GitHub Essentials (2025)',
  'freeCodeCamp: JavaScript Algorithms and Data Structures (2023)',
  'Andela Technical Leadership Program (2023)',
] as const;
