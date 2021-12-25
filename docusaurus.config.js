const path = require('path')

module.exports = {
  title: 'Datalog UI',
  tagline: 'Declarative UI, meet Declarative Data',
  url: 'https://datalogui.dev',
  baseUrl: '/',
  plugins: [path.resolve('./load-typedocs/src/index.js')],
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
          href: 'https://github.com/datalogui/datalog',
          label: 'GitHub',
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
            'https://github.com/datalogui/datalogui.dev/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
