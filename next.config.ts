import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Pin the workspace root to this folder. Without this, Next walks up the
  // directory tree looking for a lockfile and finds the stray
  // package-lock.json in the home directory, making the root ambiguous.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
