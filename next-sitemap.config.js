/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://stfn.tech',
  generateRobotsTxt: true,
  exclude: ['/admin', '/admin/*', '/blog', '/preview'],
};
