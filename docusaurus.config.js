module.exports = {
  title: 'Datalog UI',
  tagline: 'Declarative UI, meet Declarative Data',
  url: 'https://datalogui.dev',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'datalogui',  // Usually your GitHub org/user name.
  projectName: 'datalogui',       // Usually your repo name.
  themes: ['@docusaurus/theme-live-codeblock'],
  themeConfig: {
    navbar: {
      title: 'Datalog UI',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo-only-transparent.png',
      },
      links: [
        {
          to: 'docs/usage',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://gitlab.com/datalogui/datalog',
          label: 'GitLab',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Usage',
              to: 'docs/usage',
            },
            {
              label: 'React + Datalog',
              to: 'docs/react',
            },
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //   ],
        // },
        // {
        //   title: 'Social',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: 'blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${
          new Date().getFullYear()} Marco Munizaga. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
              'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
