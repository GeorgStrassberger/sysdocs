import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'DevOps-Zone',
    tagline: 'System Documentation',
    favicon: 'img/favicon.ico',
    future: {
        v4: true,
    },
    url: 'https://devops-zone.com',
    baseUrl: '/',
    organizationName: 'GEST',
    projectName: 'SysDocs',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    i18n: {
        defaultLocale: 'de',
        locales: ['de'],
    },
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    editUrl:
                        'https://github.com/GeorgStrassberger',
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    editUrl:
                        'https://github.com/GeorgStrassberger',
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: 'DevOps-Zone',
                logo: {
                    alt: 'devops-zone-logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'iotSidebar',
                        position: 'left',
                        label: 'IoT',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'patternSidebar',
                        position: 'left',
                        label: 'Pattern',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'linuxSidebar',
                        position: 'left',
                        label: 'Linux',
                    },
                    // {to: '/blog', label: 'Blog', position: 'left'},
                    {
                        href: 'https://github.com/facebook/docusaurus',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                // links: [
                //   {
                //     title: 'Docs',
                //     items: [
                //       {
                //         label: 'Tutorial',
                //         to: '/docs/intro',
                //       },
                //     ],
                //   },
                //   {
                //     title: 'Community',
                //     items: [
                //       {
                //         label: 'X',
                //         href: 'https://x.com/Ge_St_86',
                //       },
                //     ],
                //   },
                //   {
                //     title: 'More',
                //     items: [
                //       {
                //         label: 'Blog',
                //         to: '/blog',
                //       },
                //       {
                //         label: 'GitHub',
                //         href: 'https://github.com/GeorgStrassberger',
                //       },
                //     ],
                //   },
                // ],
                copyright: `Copyright © ${new Date().getFullYear()} Sysdocs.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
