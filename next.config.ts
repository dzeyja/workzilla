import { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      features: path.resolve(__dirname, "src/features"),
      entities: path.resolve(__dirname, "src/entities"),
      shared: path.resolve(__dirname, "src/shared"),
      widgets: path.resolve(__dirname, "src/widgets"),
      pages: path.resolve(__dirname, "src/pages"),
      app: path.resolve(__dirname, "src/app")
    };
    
    return config;
  },
};

export default nextConfig; 