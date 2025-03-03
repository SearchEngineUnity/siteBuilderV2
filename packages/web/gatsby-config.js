/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || `development`}`,
});

// off-main-thread related
// const adapter = require('gatsby-adapter-netlify').default;

const isProd = process.env.NODE_ENV === 'production';
const previewEnabled = (process.env.GATSBY_IS_PREVIEW || 'false').toLowerCase() === 'true';

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://www.techlifeunity.com/', // update to new netlify URL
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  // off-main-thread related
  // adapter: adapter({
  //   excludeDatastoreFromEngineFunction: false,
  //   imageCDN: true,
  // }),
  trailingSlash: `never`,
  siteMetadata: {
    title: `web`,
    siteUrl,
  },
  // flags: {
  //   DEV_SSR: true,
  // },
  // off-main-thread related
  // partytownProxiedURLs: [`https://s.skimresources.com/js/89665X1543008.skimlinks.js`],
  plugins: [
    'gatsby-plugin-loadable-components-ssr',
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        // eslint-disable-next-line global-require
        queries: require('./src/utils/algolia-queries'),
      },
    },
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google2: [
              {
                family: `Figtree`,
                axes: 'ital,wght@0,300..900;1,300..900',
              },
            ],
          },
        },
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: process.env.AIRTABLE_TABLE_NAME,
            tableView: process.env.AIRTABLE_TABLE_VIEW_NAME,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'ki8bqxrw',
        dataset: 'production',
        token: process.env.SANITY_TOKEN,
        watchMode: !isProd, // watchMode only in dev mode
        // watchMode: false,
        overlayDrafts: !isProd || previewEnabled, // drafts in dev & Gatsby Cloud Preview
      },
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: 'none',
          quality: 50,
          breakpoints: [600, 960, 1280, 1920],
          backgroundColor: `transparent`,
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        lang: `en`,
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*', disallow: ['/404', '/search'] }],
            sitemap: `${siteUrl}/sitemap-index.xml`,
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['*'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['*'] }],
            sitemap: null,
            host: null,
          },
          development: {
            policy: [{ userAgent: '*', disallow: ['*'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        // id: 'GTM-5RQDBMKP',
        id: process.env.GTM_ID,
      },
    },
  ],
};
