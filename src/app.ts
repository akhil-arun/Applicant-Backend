export {}

const cors = require('cors')
const awesome = require('./routers/awesome')
const express = require('express')
const notFound = require('./middleware/not-found')
const app = express();

const port = 4000


app.use(express.json())
app.use(cors())

app.use('/awesome/applicant', awesome)

app.use(notFound)

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
