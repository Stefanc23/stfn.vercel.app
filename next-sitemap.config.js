/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://stfn.vercel.app',
  generateRobotsTxt: true,
  exclude: ['/studio', '/_vercel'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio', '/_vercel'],
      },
    ],
  },
};
