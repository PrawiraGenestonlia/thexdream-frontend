require('dotenv')
const config = {
  server_url: 'https://server.thexdream.net/thexdream-backend',
  api: {
    userSignUp: '/api',
    getTopNews: '/api/news',
    getReadNews: '/api/news/read'
  },
  routes: {
    homepage: '/',
    topnews: '/topnews',
    about: '/about',
    setting: '/setting',
    singlenews: '/singlenews'
  }
}

module.exports = config;