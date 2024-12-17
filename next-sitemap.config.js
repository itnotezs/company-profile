/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://itnotezs.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  generateIndexSitemap: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/*"],
      },
    ],
    additionalSitemaps: [
      "https://itnotezs.com/sitemap.xml",
      "https://itnotezs.com/server-sitemap.xml",
    ],
  },
  exclude: ["/server-sitemap.xml", "/api/*"],
  alternateRefs: [
    {
      href: "https://itnotezs.com",
      hreflang: "id", // Sudah sesuai karena target Indonesia
    },
  ],
  priority: 0.7,
  transform: async (config, path) => {
    // Kustomisasi prioritas berdasarkan path
    const priority =
      path === "/"
        ? 1.0
        : path.startsWith("/services/")
        ? 0.8
        : path === "/contact"
        ? 0.7
        : 0.5;

    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
