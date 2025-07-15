// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
    iotSidebar: [
        'iot/lorawan',
    ],
    patternSidebar: [
        'pattern/api-naming-conventions',
    ],
    juiceShopSidebar: [
        'juice-shop/index',
        'juice-shop/autostart-service',
        {
            type: 'category',
            label: '1 Star',
            items: [
                'juice-shop/score_board',
                'juice-shop/zero_stars',
                'juice-shop/confidential_document',
                'juice-shop/error_handling',
                'juice-shop/dom_xss',
                'juice-shop/missing_encoding',
                'juice-shop/bully_chatbot',
                'juice-shop/privace_policy',
                'juice-shop/exposed_matrics',
                'juice-shop/repetitive_registration',
                'juice-shop/outdated_allowlist',
                'juice-shop/mass_dispel'
            ],
        },
        {
            type: 'category',
            label: 'Extra Aufgaben',
            items: [
                'juice-shop/fix_loadingpath',
                'juice-shop/bonus_challenge'
            ],
        },
    ],
    linuxSidebar: [
        'linux/docker',
        {
            type: 'category',
            label: 'kali',
            items: ['linux/kali/kali'
            ],
        }
    ]
};

export default sidebars;
