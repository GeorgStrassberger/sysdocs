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
                'juice-shop/star1/score_board',
                'juice-shop/star1/zero_stars',
                'juice-shop/star1/confidential_document',
                'juice-shop/star1/error_handling',
                'juice-shop/star1/dom_xss',
                'juice-shop/star1/missing_encoding',
                'juice-shop/star1/bully_chatbot',
                'juice-shop/star1/privace_policy',
                'juice-shop/star1/exposed_matrics',
                'juice-shop/star1/repetitive_registration',
                'juice-shop/star1/outdated_allowlist',
                'juice-shop/star1/mass_dispel'
            ],
        },
        {
            type: 'category',
            label: 'Extra Aufgaben',
            items: [
                'juice-shop/persist_img_change',
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
