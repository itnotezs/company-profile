/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://itnotezs.com",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  exclude: ["/server-sitemap.xml"],
  alternateRefs: [
    {
      href: "https://itnotezs.com",
      hreflang: "en",
    },
  ],
};
