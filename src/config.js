require('dotenv')

const config = {
  server_url: 'https://server.thexdream.net/thexdream-backend',
  api: {
    userSignUp: '/api',
    getTopNews: '/api/news'
  },
  routes: {
    homepage: '/',
    topnews: '/topnews',
    about: '/about',
    setting: '/setting'
  }
}

module.exports = config;