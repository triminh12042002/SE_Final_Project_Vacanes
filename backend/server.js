const express = require('express')
const app = express()
const port = 5000

app.use(express.json())
app.use('/api/users', require('./routes/userRoutes'))
app.get('/', (req, res) => {
    res.status(200).json({message: 'Homepage'})
})  

app.listen(port, () => console.log(`Server start at port ${port}`))