const app = require('express')()
const consing = require('consign')
const consign = require('consign/lib/consign')

const db = require('./config/db')

app.db = db;

consign()
.include('./config/passport.js')
.then('./config/middlewares.js')
.then('./api/validation.js')
.then('./api')
.then('./config/routes.js')
.into(app)


app.listen(3000, () => {
    console.log('BackEnd Executando...')
})