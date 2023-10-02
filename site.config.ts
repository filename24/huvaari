import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '93d5b96fe9404f9594a989fc70682188',
  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'My School',
  domain: 'anhgerel.vercel.app',
  author: 'Ankhgerel',

  // open graph metadata (optional)
  description: 'My school coming soon...',
  language: 'mn',

  // social usernames (optional)
  //twitter: 'transitive_bs',
  github: 'ankhgerel',
  //linkedin: 'fisch2',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: '',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/10': "2b48c5f3115e49bd81fff38b4b3b8668"
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages

  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Home',
      pageId: '2b48c5f3115e49bd81fff38b4b3b8668'
    }
  ]
})
