import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Docs Totalgen',
  tagline: 'Totalgen.ai',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.totalgen.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'totalgen', // Usually your GitHub org/user name.
  projectName: 'totalgen', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/totalgen-logo.png',
    navbar: {
      title: 'Total Gen',
      logo: {
        alt: 'Total Gen Logo',
        src: 'img/logo-totalgen.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutoriais',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://totalgen.ai/',
          label: 'TotalGen',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Tutoriais',
              to: '/docs/intro',
            },
            {
              label: 'Atendimento Total Gen',
              to: 'https://chat.nbh.com.br/my-typebot-ts07brk',
            },
            {
              label: 'Whatsapp Comercial: (31) 99279-3431',
              href: 'https://api.whatsapp.com/send?phone=5531992793431&text=Quero%20informa%C3%A7%C3%B5es%20sobre%20o%20Total%20Gen',
            },
            {
              label: 'Instagram',
              to: 'https://www.instagram.com/totalgen/',
            },
          ],
        },
        {
          title: 'Endereço',
          items: [
            {
              label: 'Rua Ignácio Alves Martins 253, Bairro Buritis, Belo Horizonte',
              to: ' ',
            },
            {
              label: 'CNPJ: 10.698.316/0001-52',
              to: ' ',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Total Gen AI. Todos os direitos reservados.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
