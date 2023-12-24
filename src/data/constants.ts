const isProduction = process.env.NODE_ENV === 'production'

export const Constants = {
  baseUrl: 'https://vivendoacorrida.com',
  name: 'Abner Santana',
  description: 'Tech | Nerd | Marathoner | YouTuber',
  ogImage: 'https://vivendoacorrida.com/static/og-image.jpg',
  isProduction: isProduction,
}
