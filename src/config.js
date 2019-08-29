require('dotenv')

const config = {
  backendUri: 'http://localhost:3800',
  api: {
    userSignUp: '/api'
  },
  routes: {
    homepage: '/',
    topnews: '/topnews',
    about: '/about',
    setting: '/setting'
  }
}

module.exports = config;