/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://itnotezs.com",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/404", "/500"],
};
