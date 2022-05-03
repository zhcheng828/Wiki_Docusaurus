// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Codenow',
  tagline: '心之所向，虽千万人吾往矣; 意之所趋，纵既济亦不止也。',
  url: 'https://docs.codenow.top',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'zhcheng828', // Usually your GitHub org/user name.
  projectName: 'codenow', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: false,
        // blog: {
        //   showReadingTime: true,
          
        //   // Please change this to your repo.
        //   editUrl: 'https://github.com/zhcheng828/Wiki_Docusaurus/blob/master/',
        // },
    

        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/zhcheng828/Wiki_Docusaurus/blob/master/',
        },
    
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          //{to: '/blog', label: '博客', position: 'left'},
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'docs',
          // },

          {
            href: 'https://github.com/zhcheng828/Wiki_Docusaurus',
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
                label: 'docs',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/13151453/ethereal',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/zhcheng828',
              },
            ],
          },
          {
            title: 'More',
            items: [
            //   {
            //     label: 'Blog',
            //     to: '/blog',
            //   },
              {
                label: 'GitHub',
                href: 'https://github.com/zhcheng828',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Codenow`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
