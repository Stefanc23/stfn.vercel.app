/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://stfn.vercel.app',
  generateRobotsTxt: true,
  exclude: ['/studio'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio'],
      },
    ],
  },
};
