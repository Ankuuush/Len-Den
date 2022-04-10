const connectToMongo=require('./db');

connectToMongo();

var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())
const port = 5000
app.use(express.json())
app.use('/api/auth',require('./route/auth'))
app.use('/api/application',require('./route/LoanApp'))
app.use('/api/loanoffer',require('./route/LoanOffer'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})