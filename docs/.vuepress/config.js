module.exports = {
  theme: 'cosmos',
  title: 'Arcis Documentation',
  locales: {
    '/': {
      lang: 'en-US'
    },
  },
  markdown: {
    extendMarkdown: (md) => {
      md.use(require("markdown-it-katex"));
    },
  },
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css",
      },
    ],
  ],
  base: process.env.VUEPRESS_BASE || '/',
  plugins: [
    'vuepress-plugin-element-tabs'
  ],
  head: [
    // ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon32.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon16.png" }],
    ['link', { rel: "manifest", href: "/site.webmanifest" }],
    ['meta', { name: "msapplication-TileColor", content: "#2e3148" }],
    ['meta', { name: "theme-color", content: "#ffffff" }],
    ['link', { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    // ['link', { rel: "apple-touch-icon-precomposed", href: "/apple-touch-icon-precomposed.png" }],
  ],
  themeConfig: {
    repo: 'Ambiplatforms-TORQUE/arcis',
    docsRepo: 'Ambiplatforms-TORQUE/arcis',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinks: true,
    custom: true,
    project: {
      name: 'Arcis',
      denom: 'Arcis',
      ticker: 'ARCIS',
      binary: 'arcisd',
      testnet_denom: 'tArcis',
      testnet_ticker: 'tARCIS',
      rpc_url: 'https://eth.bd.arcis.org:8545',
      rpc_url_testnet: 'https://eth.bd.arcis.dev:8545',
      rpc_url_local: 'http://localhost:8545/',
      chain_id: '1002',
      testnet_chain_id: '1000',
      latest_version: 'v1.0.3',
      version_number: '2',
      testnet_version_number: '4',
      testnet_evm_explorer_url: 'https://evm.arcis.dev',
      evm_explorer_url: 'https://evm.arcis.org',
      testnet_cosmos_explorer_url: 'https://explorer.arcis.dev/',
      cosmos_explorer_url: 'https://www.mintscan.io/arcis',
    },
    logo: {
      src: '/arcis-black.svg',
    },
    algolia: {
      id: 'K3VQTEW3G5',
      key: 'bf836a3c934b1d4df091d5c5b69c65d7',
      index: 'arcis'
    },
    topbar: {
      banner: false
    },
    sidebar: {
      auto: false,
      nav: [
        {
          title: 'About Arcis',
          children: [
            {
              title: 'Introduction',
              directory: true,
              path: '/about/intro'
            },
            {
              title: 'Arcis Ecosystem',
              path: 'https://arcis.space/'
            },
            {
              title: 'Awesome Arcis',
              path: 'https://github.com/Ambiplatforms-TORQUE/awesome'
            },
          ]
        },
        {
          title: 'For Users',
          children: [
            {
              title: 'Basic Concepts',
              directory: true,
              path: '/users/basics'
            },
            {
              title: 'Digital Wallets',
              directory: true,
              path: '/users/wallets'
            },
            {
              title: 'Account Keys',
              directory: true,
              path: '/users/keys'
            },
            {
              title: 'Technical Concepts',
              directory: true,
              path: '/users/technical_concepts'
            },
          ]
        },
        {
          title: 'For dApp Devs',
          children: [
            {
              title: 'Overview',
              directory: false,
              path: '/developers/overview'
            },
            {
              title: 'Quick Connect',
              directory: false,
              path: '/developers/connect'
            },
            {
              title: 'Clients',
              directory: false,
              path: '/developers/clients'
            },
            {
              title: 'Guides',
              directory: true,
              path: '/developers/guides'
            },
            {
              title: 'Localnet',
              directory: true,
              path: '/developers/localnet'
            },
            {
              title: 'Libraries',
              directory: true,
              path: '/developers/libraries'
            },
            {
              title: 'Ethereum JSON-RPC',
              directory: true,
              path: '/developers/json-rpc'
            },
            {
              title: 'Cosmos gRPC & REST',
              path: 'https://api.arcis.dev/'
            },
            {
              title: 'Tendermint RPC',
              path: 'https://docs.tendermint.com/v0.34/rpc/'
            },
          ]
        },
        {
          title: 'For Protocol Devs',
          children: [
            {
              title: 'Modules',
              directory: true,
              path: '/modules'
            },
            {
              title: 'Module Accounts',
              directory: false,
              path: '/protocol/moduleaccounts'
            },
            {
              title: 'Telemetry',
              directory: false,
              path: '/protocol/telemetry'
            },
            {
              title: 'IBC Channels',
              directory: false,
              path: '/protocol/ibc'
            },
            {
              title: 'Arcis Go API',
              path: 'https://pkg.go.dev/github.com/Ambiplatforms-TORQUE/arcis'
            },
            {
              title: 'Ethermint Library Go API',
              path: 'https://pkg.go.dev/github.com/Ambiplatforms-TORQUE/ethermint'
            },
            {
              title: 'Arcis Protobuf',
              directory: false,
              path: '/protocol/proto-docs'
            }
          ]
        },
        {
          title: 'For Validators',
          children: [
            {
              title: 'Validators Overview',
              directory: false,
              path: '/validators/overview'
            },
            {
              title: 'Setup & Configuration',
              directory: true,
              path: '/validators/setup'
            },
            {
              title: 'Installation & Quick Start',
              directory: true,
              path: '/validators/quickstart'
            },
            {
              title: 'Join Testnet',
              directory: false,
              path: '/validators/testnet'
            },
            {
              title: 'Join Mainnet',
              directory: false,
              path: '/validators/mainnet'
            },
            {
              title: 'Security',
              directory: true,
              path: '/validators/security'
            },
            {
              title: 'Software Upgrade Guide',
              directory: true,
              path: '/validators/upgrades'
            },
            {
              title: 'Arcis Governance',
              directory: true,
              path: '/validators/governance'
            },
            {
              title: 'Snapshots & Archive Nodes',
              directory: false,
              path: '/validators/snapshots_archives'
            },
            {
              title: 'FAQ',
              directory: false,
              path: '/validators/faq'
            }
          ]
        },
        {
          title: 'Block Explorers',
          children: [
            {
              title: 'Block Explorers',
              path: '/developers/explorers'
            },
            {
              title: 'Blockscout (EVM)',
              path: 'https://evm.arcis.org'
            },
            {
              title: 'Mintscan (Cosmos)',
              path: 'https://www.mintscan.io/arcis/'
            },
          ]
        },
      ]
    },
    gutter: {
      title: 'Help & Support',
      chat: {
        title: 'Discord Channel',
        text: 'Chat with Arcis users and team on Discord.',
        url: 'https://discord.gg/arcis',
        bg: 'linear-gradient(103.75deg, #1B1E36 0%, #22253F 100%)'
      },
      forum: {
        title: 'Commonwealth Forum',
        text: 'Join the Arcis Commonwealth forum',
        url: 'https://commonwealth.im/arcis',
        bg: 'linear-gradient(221.79deg, #3D6B99 -1.08%, #336699 95.88%)',
      },
      github: {
        title: 'Found an Issue?',
        text: 'Help us improve this page by suggesting edits on GitHub.',
        bg: '#F8F9FC'
      }
    },
    footer: {
      logo: '/arcis-black.svg',
      textLink: {
        text: "arcis.org",
        url: 'https://arcis.org'
      },
      services: [
        {
          service: "github",
          url: 'https://github.com/Ambiplatforms-TORQUE/arcis'
        },
        {
          service: "twitter",
          url: "https://twitter.com/ArcisOrg",
        },
        {
          service: "telegram",
          url: "https://t.me/ArcisOrg",
        },
        {
          service: "linkedin",
          url: "https://www.linkedin.com/company/Ambiplatforms-TORQUE-finance/",
        },
        {
          service: "medium",
          url: "https://arcis.blog/",
        },
      ],
      smallprint: 'This website is maintained by Ambiplatforms-TORQUE Labs Ltd.',
      links: [{
        title: 'Ecosystem Documentation',
        children: [
        {
          title: 'Cosmos SDK Docs',
          url: 'https://docs.cosmos.network'
        },
        {
          title: 'Ethereum Docs',
          url: 'https://ethereum.org/developers'
        },
        {
          title: 'Tendermint Core Docs',
          url: 'https://docs.tendermint.com'
        }
        ]
      },
      {
        title: 'Community',
        children: [
          {
            title: 'Arcis Discord Community',
            url: 'https://discord.gg/arcis'
          },
          {
            title: 'Arcis Commonwealth Forum',
            url: 'https://commonwealth.im/arcis'
          },
        ]
      },
      {
        title: 'Arcis',
        children: [
          {
            title: 'Jobs at Arcis',
            url: 'https://Ambiplatforms-TORQUE.notion.site/'
          }
        ]
      }
      ]
    },
    versions: [
      {
        "label": "main",
        "key": "main"
      },
    ],
  }
};
