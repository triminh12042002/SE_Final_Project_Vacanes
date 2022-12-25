const express = require('express')
const app = express()
const port = 5000


app.use('api/users', require('./routes/userRoutes'))

app.listen(port, () => console.log(`Server start at port ${port}`))