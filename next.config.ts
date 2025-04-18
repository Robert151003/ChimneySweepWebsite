import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images:{
    unoptimized:true,
  },
  output: 'export', // 👈 enables static export
};

export default nextConfig;