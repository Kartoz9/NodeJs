const express = require('express')
const app = express()

const peopleRouter = require('./methods-public/routes/people')
const authRouter = require('./methods-public/routes/auth')

app.use(express.static('./methods-public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api/people', peopleRouter)
app.use('/login', authRouter)

app.listen(5000, () => {
  console.log('Server is listening on port 5000...')
})
