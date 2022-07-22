/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'SeaQL - Building data intensive applications in Rust',
  tagline: 'We help developers in building data intensive applications in Rust, whether they are web services (GraphQL, gRPC, REST), command line tools or apps.',
  url: 'https://www.sea-ql.org',
  baseUrl: '/blog/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'SeaQL',
  projectName: 'sea-ql-blog',
  trailingSlash: true,
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    image: 'img/SeaQL logo.png',
    metadata: [
      {name: 'keywords', content: 'rust, orm, SeaORM, SeaQuery, SeaSchema, StarfishQL, database, sql, mysql, sqlite, postgresql, rocket, tokio, sqlx, actix, async-std'},
    ],
    navbar: {
      title: 'SeaQL',
      logo: {
        alt: 'SeaQL Logo',
        src: 'img/SeaQL.png',
        href: 'https://www.sea-ql.org',
      },
      items: [
        {
          to: '/blog',
          label: 'Blog',
          position: 'left'
        },
        {
          href: 'https://github.com/SeaQL',
          label: 'GitHub',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/SeaQL',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/uCPdDXzbdv',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/sea_ql',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/sea-ql',
            },
            {
              label: 'DEV',
              href: 'https://dev.to/seaql',
            },
            {
              label: 'GSoC',
              href: 'https://summerofcode.withgoogle.com/programs/2022/organizations/seaql',
            },
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'SeaORM',
              href: 'https://github.com/SeaQL/sea-orm',
            },
            {
              label: 'SeaQuery',
              href: 'https://github.com/SeaQL/sea-query',
            },
            {
              label: 'SeaSchema',
              href: 'https://github.com/SeaQL/sea-schema',
            },
            {
              label: 'StarfishQL',
              href: 'https://github.com/SeaQL/starfish-ql',
            },
          ],
        },
      ],
      copyright: [
        `<br/>Copyright © ${new Date().getFullYear()} SeaQL`,
      ].join(''),
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: [
        'toml',
        'rust',
      ],
    },
    // algolia: {
    //   appId: 'F60BRNGE7P',
    //   apiKey: 'cb0fff4f36dcd0f3d6a97e12e494dec7',
    //   indexName: 'seaorm',
    //   contextualSearch: true,
    // },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          editUrl: 'https://github.com/SeaQL/seaql.github.io/edit/master/Blog/',
          blogSidebarTitle: 'All Posts',
          blogSidebarCount: 'ALL',
          postsPerPage: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.8,
        },
      },
    ],
  ],
  scripts: [
    '/sea-ql.js',
  ],
};
