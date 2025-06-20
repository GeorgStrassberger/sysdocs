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
        {
            type: 'category',
            label: 'iot',
            items: ['iot/lorawan'],
        }
    ],
    patternSidebar:[
        'pattern/type-naming',
    ],
    linuxSidebar: [
        {
            type: 'category',
            label: 'linux',
            items: ['linux/docker'
            ],
        }
    ]
};

export default sidebars;
