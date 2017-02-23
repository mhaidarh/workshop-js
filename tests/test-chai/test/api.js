require('dotenv-extended').load()
console.log('process:', process.env.NODE_ENV)

// TEST IN ORDER
require('../api/index.js')
require('../api/auth.js')
require('../api/accounts.js')
require('../api/books.js')
require('../api/posts.js')
