require('dotenv')

const config = {
  server_url: 'http://server.thexdream.net:3800',
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