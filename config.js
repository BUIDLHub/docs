const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://buidlhub.com',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: './src/pwa-512.png',
    logoLink: 'https://buidlhub.com',
    title:
      "<a href='https://buidlhub.com'><img class='img-responsive' src='https://buidlhub.com/static/media/bhub-logo-hex-gold.135de49c.svg' alt='Learn logo' /></a>",
    githubUrl: 'https://github.com/BUIDLHub/docs',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twittter.com/buidlhub-" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://discord.gg/fQtpeT2%E2%80%8B" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/gettingStarted',
    ],
    collapsedNav: [
      '/gettingStarted', // add trailing slash if enabled above
    ],
    links: [{ text: 'BUIDLHub', link: 'https://buidlhub.com' }],
    frontline: false,
    ignoreIndex: true,
    title: "<a href='https://buidlhub.com'>BUIDLHub </a><div class='greenCircle'></div>",
  },
  siteMetadata: {
    title: 'BUIDLHub Docs',
    description: 'Documentation built with mdx',
    ogImage: null,
    docsLocation: 'https://github.com/BUIDLHub/docs',
    favicon: 'https://buidlhub.com/static/media/bhub-logo-hex-gold.135de49c.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'BUIDLHub Docs',
      short_name: 'BUIDLHubDocs',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
