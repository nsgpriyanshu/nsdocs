import { useConfig } from 'nextra-theme-docs'

/* eslint sort-keys: error */
/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
export default {
  banner: {
    content: 'nsDocs – Comprehensive Guide',
    key: 'nsDocs',
  },
  chat: {
    link: 'https://discord.gg/G44dR8Zjwx', // Nexus Discord server
  },
  docsRepositoryBase: 'https://github.com/nsgpriyanshu/nsdocs',
  editLink: {
    content: 'Edit this page on GitHub',
  },
  faviconGlyph: '🚀',
  head: function useHead() {
    const config = useConfig()
    const title = `${config.title} – nsDocs`
    const description =
      config.frontMatter.description ||
      'A comprehensive, production-level guide for developing and managing a Discord app effectively.'
    const image = config.frontMatter.image || 'https://nsgpriyanshu.github.io/nsdocs/preview.png'
    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="og:image" content={image} />

        <meta name="msapplication-TileColor" content="#fff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="apple-mobile-web-app-title" content="nsDocs" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://nsgpriyanshu.github.io/nsdocs" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </>
    )
  },
}
