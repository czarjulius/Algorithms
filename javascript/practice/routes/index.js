const {Router} = require('express')
const postRouter = require('./postRoute')

const route = Router();

route.use('/api', postRouter)

module.exports = route