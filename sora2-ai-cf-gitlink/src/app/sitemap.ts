import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sora-2-ai.com'
  
  // 定义所有页面路径
  const pages = [
    { path: '', priority: 1, changeFrequency: 'daily' as const },
    { path: '/showcase', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/pricing', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/privacy', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/terms', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/refund', priority: 0.5, changeFrequency: 'monthly' as const },
  ]
  
  // 支持的所有语言
  const locales = ['en', 'ja', 'ko', 'hi', 'ru', 'de', 'es', 'pt', 'ar', 'id', 'fr']
  
  // 有多语言版本的文章列表
  const multilingualArticles = ['sora-android-app']
  
  // 为每个页面生成所有语言版本
  const sitemapEntries: MetadataRoute.Sitemap = []
  
  // 添加静态页面
  pages.forEach(({ path, priority, changeFrequency }) => {
    locales.forEach((locale) => {
      // 英文版本不需要locale前缀，其他语言需要
      const url = locale === 'en' 
        ? `${baseUrl}${path}`
        : `${baseUrl}/${locale}${path}`
      
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency,
        priority,
      })
    })
  })
  
  return sitemapEntries
}
