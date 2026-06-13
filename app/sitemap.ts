import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mahardikaagng.github.io',
      lastModified: new Date(),
    },
  ]
}
