import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://nsgpriyanshu.github.io/nsdocs/pages/api/sitemap.xml',
  }
}