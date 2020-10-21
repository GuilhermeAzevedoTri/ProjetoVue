const app = require('express')()
const consing = require('consign')
const consign = require('consign/lib/consign')

consign()
.then('./config/middlewares.js')
.into(app)


app.listen(3000, () => {
    console.log('BackEnd Executando...')
})