import type { NextConfig } from 'next';

// Fully static export, served by GitHub Pages at https://jeanbosco.tech.
const config: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default config;
