import React from 'react'
import { useRouter } from 'next/router'
import { useConfig, DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { frontMatter } = useConfig()
    return {
      titleTemplate: '%s – nsDocs',
      defaultTitle: 'nsDocs',
      description:
        frontMatter.description ||
        'A comprehensive, production-level guide for developing and managing a Discord app effectively.',
      twitter: {
        handle: '@nsgpriyanshu',
        site: '@nsgpriyanshu',
        cardType: 'summary_large_image',
      },
      openGraph: {
        type: 'website',
        url: 'https://nsgpriyanshu.github.io/nsdocs',
        site_name: 'nsDocs',
        title: frontMatter.title || 'nsDocs',
        description:
          frontMatter.description ||
          'A comprehensive, production-level guide for developing and managing a Discord app effectively.',
      },
    }
  },
  logo: (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src="./logo.png" alt="nsCore" style={{ height: '2rem', marginRight: '0.5rem' }} />
      <span style={{ fontWeight: 700 }}>nsDocs</span>
    </div>
  ),
  project: {
    link: 'https://github.com/nsgpriyanshu/nsdocs',
  },
  chat: {
    link: 'https://discord.gg/G44dR8Zjwx',
  },
  docsRepositoryBase: 'https://github.com/nsgpriyanshu/nsdocs',
  footer: {
    text: 'Developed by ŊʂƓ ᴾᴿᴵᵞᴬᴺˢᴴᵁ',
  },
  sidebar: {
    toggleButton: true,
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://nsgpriyanshu.github.io/nsdocs' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'nsDocs'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'A production level discord app guide'}
        />
        <meta property="og:image" content="./preview.png" />
        <meta property="og:site_name" content="nsDocs" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nsgpriyanshu" />
        <meta name="twitter:creator" content="@nsgpriyanshu" />
        <meta name="twitter:title" content={frontMatter.title || 'nsDocs'} />
        <meta
          name="twitter:description"
          content={frontMatter.description || 'A production level discord app guide'}
        />
        <meta name="twitter:image" content="./preview.png" />
        <meta name="keywords" content="Discord, app, guide, production-level, nsDocs" />
        <meta name="author" content="ŊʂƓ ᴾᴿᴵᵞᴬᴺˢᴴᵁ" />
        <meta property="robots" content="index, follow" />
        <link rel="canonical" href="https://nsgpriyanshu.github.io/nsdocs" />
        <link rel="icon" href="./favicon.ico" type="image/x-icon" />
      </>
    )
  },
}

export default config
