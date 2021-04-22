const {Router} = require('express')
const casts = require('../cast')

const route = Router();

route.get('/post', (req, res)=>{
  const payload = casts.map(cast=>{
    return cast.payload
  })
  res.status(200).json(
    payload
  )
})

module.exports = route