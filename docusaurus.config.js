import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'DevOps-Zone',
    tagline: 'System Documentation',
    favicon: 'img/georg-emoji-md.png',
    future: {
        v4: true,
    },
    url: 'https://docs.devops-zone.com',
    baseUrl: '/',
    organizationName: 'GEST',
    projectName: 'SysDocs',
    markdown: {
        hooks: {
            onBrokenMarkdownLinks: 'warn',
            onBrokenMarkdownImages: 'warn',
        }
    },
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'de'],
        localeConfigs: {
            en: {
                label: 'English',
                direction: 'ltr',
                htmlLang: 'en-US',
            },
            de: {
                label: 'Deutsch',
                direction: 'ltr',
                htmlLang: 'de-DE',
            },
        },
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
                    customCss: ['./src/css/custom.css'],
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace it with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: 'GS',
                logo: {
                    alt: 'georg-emoji-logo',
                    src: 'img/georg-emoji-md.png',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'projectSidebar',
                        position: 'left',
                        label: 'Projects',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'juiceShopSidebar',
                        position: 'left',
                        label: 'Juice Shop',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'patternSidebar',
                        position: 'left',
                        label: 'Pattern',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'toolSidebar',
                        position: 'left',
                        label: 'Tools',
                    },
                    {
                        type: 'localeDropdown',
                        position: 'right',
                    }
                    ,
                    // {to: '/blog', label: 'Blog', position: 'left'},
                    {
                        href: 'https://github.com/GeorgStrassberger',
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
