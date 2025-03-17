const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// ALLOWED MULTIPLE static assets directories
app.use(express.static('public'))
app.use(express.static('files'))
app.use('/files', express.static('filesWithPrefix'))        // specify a VIRTUAL path prefix
app.use(express.static(path.join(__dirname, 'public')))          // specify an ABSOLUTE path

// REQUIRED to listen server express
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
