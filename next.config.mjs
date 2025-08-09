/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_ACTIONS || process.env.NODE_ENV === 'production';

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
