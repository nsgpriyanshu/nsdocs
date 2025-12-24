import { Metadata } from 'next'

const siteConfig = {
    siteName: 'nsDocs',
    siteDescription:
        'A centralized documentation for the projects made by nsgpriyanshu',
    siteKeywords:
        'nscore, nsdocs, typescript, nextjs, nstypocolors',
    links: {
        twitter: '@nsgpriyanshu',
        github: 'https://github.com/nsgpriyanshu',
        siteUrl: 'https://nsdocs.vercel.app',
        ogImage: '/og-image.png',
        twitterImage: '/og-image.png',
    },
    themeColors: {
        light: '#fbfbfb',
        dark: '#1a1a1e',
    },
    author: {
        name: 'nsgpriyanshu',
        url: 'https://nsgpriyanshu.vercel.app/',
    },
}

type MetadataProps = {
    title?: string
    description?: string
    images?: string | string[]
    icons?: Metadata['icons']
    noIndex?: boolean
    canonicalUrl?: string
}

export const generateMetadata = ({
    title,
    description,
    images = [siteConfig.links.ogImage],
    icons = [
        { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
        { rel: 'icon', sizes: '32x32', url: '/favicon-32x32.png' },
        { rel: 'icon', sizes: '16x16', url: '/favicon-16x16.png' },
        { rel: 'shortcut icon', url: '/favicon.ico' },
    ],
    noIndex = false,
    canonicalUrl,
}: MetadataProps = {}): Metadata => {
    const baseUrl = siteConfig.links.siteUrl

    const ogImages = Array.isArray(images)
        ? images.map((img) => (img.startsWith('http') ? img : `${baseUrl}${img}`))
        : [`${baseUrl}${images}`]

    return {
        title: title || `${siteConfig.siteName} - Home`,
        description: description || siteConfig.siteDescription,
        icons,
        keywords: siteConfig.siteKeywords,
        ...(noIndex && { robots: { index: false, follow: false } }),
        openGraph: {
            title: title || siteConfig.siteName,
            description: description || siteConfig.siteDescription,
            url: canonicalUrl || baseUrl,
            type: 'website',
            locale: 'en_US',
            siteName: siteConfig.siteName,
            images: ogImages.map((url) => ({
                url,
                width: 1200,
                height: 630,
                alt: siteConfig.siteName,
            })),
        },
        twitter: {
            card: 'summary_large_image',
            title: title || siteConfig.siteName,
            description: description || siteConfig.siteDescription,
            images: ogImages.map((url) => ({ url, alt: siteConfig.siteName })),
            site: siteConfig.links.twitter,
            creator: siteConfig.links.twitter,
        },
        themeColor: [
            { media: '(prefers-color-scheme: light)', color: siteConfig.themeColors.light },
            { media: '(prefers-color-scheme: dark)', color: siteConfig.themeColors.dark },
        ],
        alternates: canonicalUrl ? { canonical: canonicalUrl } : undefined,
    }
}
