/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

require('dotenv').config()

const users = [
    {
      caption: 'Facebook',
      image: '/microbe-docs/img/logos/facebook.png',
      infoLink: 'https://code.facebook.com',
      pinned: true,
    },
    {
      caption: 'Oculus',
      image: '/microbe-docs/img/logos/oculus.png',
      infoLink: 'https://www.oculus.com/',
      pinned: true,
    },
    {
      caption: 'Instagram',
      image: '/microbe-docs/img/logos/instagram.png',
      infoLink: 'https://www.instagram.com/',
      pinned: true,
    },
    {
      caption: 'Twitter',
      image: '/microbe-docs/img/logos/twitter.png',
      infoLink: 'https://www.twitter.com',
      pinned: true,
    },
    {
      caption: 'Pinterest',
      image: '/microbe-docs/img/logos/pinterest.png',
      infoLink: 'https://www.pinterest.com',
      pinned: true,
    },
    {
      caption: 'The New York Times',
      image: '/microbe-docs/img/logos/nyt.png',
      infoLink: 'http://www.nytimes.com/',
      pinned: true,
    },
    {
      caption: 'Airbnb',
      image: '/microbe-docs/img/logos/airbnb.svg',
      infoLink: 'https://www.airbnb.com/',
    },
    {
      caption: 'IBM',
      image: '/microbe-docs/img/logos/ibm.png',
      infoLink: 'http://www.ibm.com/',
    },
    {
      caption: 'ebay',
      image: '/microbe-docs/img/logos/ebay.png',
      infoLink: 'http://www.ebay.com/',
    },
    {
      caption: 'PayPal',
      image: '/microbe-docs/img/logos/paypal.png',
      infoLink: 'https://www.paypal.com',
    },
    {
      caption: 'Spotify',
      image: '/microbe-docs/img/logos/spotify.png',
      infoLink: 'https://www.spotify.com',
    },
    {
      caption: 'Target',
      image: '/microbe-docs/img/logos/target.png',
      infoLink: 'http://www.target.com',
    },
    {
      caption: 'Intuit',
      image: '/microbe-docs/img/logos/intuit.png',
      infoLink: 'https://www.intuit.com/',
    },
    {
      caption: 'Cisco',
      image: '/microbe-docs/img/logos/cisco.png',
      infoLink: 'http://www.cisco.com/',
    },
    {
      caption: 'Algolia',
      image: '/microbe-docs/img/logos/algolia.svg',
      infoLink: 'https://algolia.com',
    },
    {
      caption: 'Artsy',
      image: '/microbe-docs/img/logos/artsy.png',
      infoLink: 'https://www.artsy.net/',
    },
    {
      caption: 'Audiense',
      image: '/microbe-docs/img/logos/audiense.png',
      infoLink: 'https://audiense.com/',
    },
    {
      caption: 'Automattic',
      image: '/microbe-docs/img/logos/automattic.png',
      infoLink: 'https://automattic.com/',
    },
    {
      caption: 'Coinbase',
      image: '/microbe-docs/img/logos/coinbase.png',
      infoLink: 'https://www.coinbase.com/',
    },
    {
      caption: 'Coursera',
      image: '/microbe-docs/img/logos/coursera.png',
      infoLink: 'https://coursera.org/',
    },
    {
      caption: 'Deezer',
      image: '/microbe-docs/img/logos/deezer.png',
      infoLink: 'https://www.deezer.com/',
    },
    {
      caption: 'Discord',
      image: '/microbe-docs/img/logos/discord.png',
      infoLink: 'https://discordapp.com/',
    },
    {
      caption: 'Egghead',
      image: '/microbe-docs/img/logos/egghead.png',
      infoLink: 'https://egghead.io/',
    },
    {
      caption: 'Elastic',
      image: '/microbe-docs/img/logos/elastic.png',
      infoLink: 'https://www.elastic.co/',
    },
    {
      caption: 'Formidable',
      image: '/microbe-docs/img/logos/formidablelabs.png',
      infoLink: 'http://formidable.com/',
    },
    {
      caption: 'Giant Machines',
      image: '/microbe-docs/img/logos/giantmachines.png',
      infoLink: 'https://www.giantmachines.com',
    },
    {
      caption: 'Globo',
      image: '/microbe-docs/img/logos/globo.png',
      infoLink: 'http://www.globo.com/',
    },
    {
      caption: 'Hearsay Systems',
      image: '/microbe-docs/img/logos/hearsaysystems.png',
      infoLink: 'https://hearsaysystems.com/company/careers/',
    },
    {
      caption: 'Help.com',
      image: '/microbe-docs/img/logos/Help-Clean.png',
      infoLink: 'https://help.com',
    },
    {
      caption: 'Hudl',
      image: '/microbe-docs/img/logos/hudl.png',
      infoLink: 'https://www.hudl.com/',
    },
    {
      caption: 'Intercom',
      image: '/microbe-docs/img/logos/intercom.png',
      infoLink: 'https://www.intercom.com/',
    },
    {
      caption: 'Jane',
      image: '/microbe-docs/img/logos/jane.svg',
      infoLink: 'https://jane.com',
    },
    {
      caption: 'Kickstarter',
      image: '/microbe-docs/img/logos/kickstarter.png',
      infoLink: 'https://www.kickstarter.com',
    },
    {
      caption: 'KLM Royal Dutch Airlines',
      image: '/microbe-docs/img/logos/klm.png',
      infoLink: 'https://www.klm.com/',
    },
    {
      caption: 'NHL',
      image: '/microbe-docs/img/logos/nhl.png',
      infoLink: 'https://www.nhl.com/',
    },
    {
      caption: 'Quiqup',
      image: '/microbe-docs/img/logos/quiqup.png',
      infoLink: 'https://www.quiqup.com/',
    },
    {
      caption: 'Reddit',
      image: '/microbe-docs/img/logos/reddit.png',
      infoLink: 'https://www.reddit.com/',
    },
    {
      caption: 'SeatGeek',
      image: '/microbe-docs/img/logos/seatgeek.png',
      infoLink: 'https://seatgeek.com/',
    },
    {
      caption: 'Shopify',
      image: '/microbe-docs/img/logos/shopify.svg',
      infoLink: 'https://www.shopify.com/',
    },
    {
      caption: 'SoundCloud',
      image: '/microbe-docs/img/logos/soundcloud.png',
      infoLink: 'https://soundcloud.com/',
    },
    {
      caption: 'Sprout Social',
      image: '/microbe-docs/img/logos/sproutsocial.png',
      infoLink: 'https://sproutsocial.com/',
    },
    {
      caption: 'Squarespace',
      image: '/microbe-docs/img/logos/squarespace.png',
      infoLink: 'https://squarespace.com/',
    },
    {
      caption: 'Trivago',
      image: '/microbe-docs/img/logos/trivago.png',
      infoLink: 'http://www.trivago.com/',
    },
    {
      caption: 'Truffls',
      image: '/microbe-docs/img/logos/truffls.png',
      infoLink: 'https://truffls.com/',
    },
    {
      caption: 'WOW air',
      image: '/microbe-docs/img/logos/wowair.png',
      infoLink: 'https://wowair.com/',
    },
    {
      caption: 'Xing',
      image: '/microbe-docs/img/logos/xing.png',
      infoLink: 'https://www.xing.com/',
    }
];

const siteConfig = {
  title: 'Microbe Docs',
  tagline: 'Microbe Docs',
  url: 'https://cbdowell.github.io',
  baseUrl: '/microbe-docs/',
  projectName: 'microbe-docs',
  headerLinks: [
    {
        doc: 'doc1',
        label: 'Docs'
    },
    {
        doc: 'doc4',
        label: 'API'
    },
    {
        page: 'help',
        label: 'Help'
    },
    {
        blog: true,
        label: 'Blog'
    },
  ],
  users,
  headerIcon: 'img/docusaurus.svg',
  footerIcon: 'img/docusaurus.svg',
  favicon: 'img/favicon.png',

  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },

  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Your Name or Your Company Name',

  organizationName: 'cbdowell', // or set an env variable ORGANIZATION_NAME
  projectName: 'microbe-docs', // or set an env variable PROJECT_NAME
  highlight: {
    theme: 'default',
  },

  scripts: ['https://buttons.github.io/buttons.js'],
  repoUrl: 'https://github.com/cbdowell/microbe-docs',
};

module.exports = siteConfig;
