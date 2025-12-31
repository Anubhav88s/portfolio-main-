import type { NextConfig } from "next";
import { loadEnvConfig } from '@next/env';

import fs from 'fs';
import path from 'path';

const projectDir = process.cwd();
loadEnvConfig(projectDir);

// Manual fallback if loadEnvConfig fails due to root issue
const envLocalPath = path.join(projectDir, '.env.local');
if (fs.existsSync(envLocalPath)) {
  const envContent = fs.readFileSync(envLocalPath, 'utf8');
  envContent.split(/[\r\n]+/).forEach((line) => {
    const trimmedLine = line.trim();
    if (trimmedLine && !trimmedLine.startsWith('#')) {
      const indexOfEqual = trimmedLine.indexOf('=');
      if (indexOfEqual !== -1) {
        const key = trimmedLine.substring(0, indexOfEqual).trim();
        const value = trimmedLine.substring(indexOfEqual + 1).trim().replace(/^["']|["']$/g, '');
        if (key) {
          process.env[key] = value;
        }
      }
    }
  });
}

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  turbopack: {}, // Clear the turbopack error as we are using a custom webpack config
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'three': path.resolve(projectDir, 'node_modules/three'),
    };
    return config;
  },
};

export default nextConfig;
