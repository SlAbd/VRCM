import fs from 'fs';
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push({
        apply: (compiler) => {
          compiler.hooks.done.tap('CopyAssetsPlugin', () => {
            const sourceDir = path.join(process.cwd(), 'public', 'assets', 'vrcm');
            const outDir = path.join(process.cwd(), 'out', 'assets', 'vrcm');
            
            if (fs.existsSync(sourceDir)) {
              if (!fs.existsSync(path.join(process.cwd(), 'out', 'assets'))) {
                fs.mkdirSync(path.join(process.cwd(), 'out', 'assets'), { recursive: true });
              }
              if (!fs.existsSync(outDir)) {
                fs.mkdirSync(outDir, { recursive: true });
              }
              
              const files = fs.readdirSync(sourceDir);
              files.forEach(file => {
                const sourceFile = path.join(sourceDir, file);
                const outFile = path.join(outDir, file);
                fs.copyFileSync(sourceFile, outFile);
              });
            }
          });
        },
      });
    }
    return config;
  },
};

export default nextConfig;
