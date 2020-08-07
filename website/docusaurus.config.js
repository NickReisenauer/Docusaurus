module.exports = {
  title: "Nick's Notes",
  tagline: "Mostly just notes from my Udemy courses",
  url: "https://docusaurus-bcn4.onrender.com/",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "NickReisenauer", // Usually your GitHub org/user name.
  projectName: "Docusaurus Notes", // Usually your repo name.
  themeConfig: {
    // docusaurus.config.js
    themeConfig: {
      // ....
      algolia: {
        apiKey: "api-key",
        indexName: "index-name",
        algoliaOptions: {}, // Optional, if provided by Algolia
      },
    },
    navbar: {
      title: "Notes",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        { to: "docs/intro", label: "Docs", position: "left" },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/NickReisenauer/Docusaurus",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Udemy",
              to: "/docs/udemy/jstcg-ms",
            },
            {
              label: "Projects",
              to: "/docs/projects/docusaurus",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/NickReisenauer",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/NickReisenauer_",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nick Reisenauer. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
