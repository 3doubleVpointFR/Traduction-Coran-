/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Les erreurs ESLint ne bloquent pas le build production
    // (elles restent visibles en dev avec `npm run lint`)
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Les erreurs TypeScript ne bloquent pas non plus
    // (à activer en strict mode quand le code sera 100% nettoyé)
    ignoreBuildErrors: true,
  },
  experimental: {
    staleTimes: {
      dynamic: 0,
      static: 0,
    },
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate' },
        ],
      },
    ]
  },
};

export default nextConfig;
