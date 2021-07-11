require('dotenv').config()
const express = require('express')
var cors = require('cors');
const app = express()
const mongoose = require('mongoose')

app.use(cors({
    origin: "http://localhost:3000",
}));

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const scoreRouter = require('./routes/scores')
app.use('/scores', scoreRouter)

app.listen(5000, () => console.log('Server Started'))