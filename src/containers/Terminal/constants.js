const COMMAND_LIST = ['About', 'Why', 'Portfolio', 'Contact', 'GUI']

const COMMAND_OUTPUTS = {
  HELP: [
    'ABOUT  — read about Everstake Capital',
    'WHY  — learn why developers trust Everstake Capital',
    "PORTFOLIO  — see Everstake Capital's portfolio",
    'CONTACT — get in touch with Everstake Capital',
    'GUI  — launch the website',
    'HELP — list all available commands',
  ],
  ABOUT: [
    {
      text: 'Money is cheap, expertise is priceless. We bridge the gap.',
      color: '#9999FF',
    },
    {
      text: 'Everstake Capital invests in early-stage blockchain startups and provide them with technical expertise.',
    },
    {
      text: 'Everstake Capital is backed by the biggest staking provider Everstake.',
    },
    {
      text: 'Invests in projects built on Solana, Ethereum, Cosmos, Tera, Flow, Polkadot and other PoS-chains.',
    },
  ],
  WHY: [
    { text: 'We speak </programming> language', color: '#9999FF' },
    {
      text: 'We have been running nodes and RPCs, developing smart contracts, and building blockchain products from scratch since 2018. On top of that, we train Rust, GO, and Solidity developers.',
    },
    { text: 'We know how to get things done', color: '#9999FF' },
    {
      text: "It's hard to build something innovative from scratch alone. We developed dozens of products like Metaplex, Everlend, Astroport, and offer you our best practices.",
    },
    { text: "We're driven by ideas, too", color: '#9999FF' },
    {
      text: 'Everstake Capital helps transform your vision into a product and always respects your decisions.',
    },
  ],
  PORTFOLIO: [
    {
      header: 'Where are the real innovations happening?',
      table: [
        {
          header: 'Technologies',
          body: [
            ['DeFi', 'NFT', 'Oracles'],
            ['Play2Earn', 'Crosschain', 'GameFi'],
            ['web3'],
          ],
        },
        {
          header: 'Blockchains',
          body: [
            ['Solana', 'Terra', 'Cosmos'],
            ['Ethereum', 'Polygon', 'Optimism'],
            ['Arbitrum', 'Casper', 'Polkadot'],
          ],
        },
      ],
    },
    {
      header: 'Where are we in these innovations?',
      descr:
        "We've invested in 25 crypto startups and launched 50 validator nodes for the most popular blockchains:",
      table: [
        {
          body: [
            [
              {
                label: 'Metaplex',
                link: '#',
              },
              {
                label: 'Wormhole',
                link: '#',
              },
              {
                label: 'Celestia',
                link: '#',
              },
              {
                label: 'Astroport',
                link: '#',
              },
            ],
            [
              {
                label: 'Anchor',
                link: '#',
              },
              {
                label: 'Pyth',
                link: '#',
              },
              {
                label: 'Neon',
                link: '#',
              },
              {
                label: 'Graph',
                link: '#',
              },
            ],
            [
              {
                label: 'Oasis',
                link: '#',
              },
              {
                label: 'Scale',
                link: '#',
              },
              {
                label: 'Flow',
                link: '#',
              },
              {
                label: 'Clover Labs',
                link: '#',
              },
            ],
            [
              {
                label: 'Biconomy',
                link: '#',
              },
              {
                label: 'Vega',
                link: '#',
              },
              {
                label: 'HXRO',
                link: '#',
              },
              {
                label: 'pStake',
                link: '#',
              },
            ],
          ],
        },
      ],
    },
  ],
}

export { COMMAND_LIST, COMMAND_OUTPUTS }
