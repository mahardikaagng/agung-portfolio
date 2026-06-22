import { MetadataRoute } from 'next'

const SITE_URL = 'https://agung-portfolio-agung-mahardika-s-projects.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
    },
  ]
}
