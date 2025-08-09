/** @type {import('next').NextConfig} */
// Custom domain build'inde basePath kullanma
const isCustomDomain = process.env.CUSTOM_DOMAIN === 'true';
const isGitHubPages = process.env.GITHUB_ACTIONS && !isCustomDomain;

const nextConfig = {
  output: 'export',
  basePath: isGitHubPages ? '/hotalyzecom' : '',
  assetPrefix: isGitHubPages ? '/hotalyzecom/' : '',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },


};

export default nextConfig;
