const express = require('express')
const http = require('http')
const https = require('https')
const fs = require('fs');
const SOCKET_PATH = '/tmp/sock';

// 0.   app
const app = express()
const anotherApp = express()    // ANY name -- can be -- given
console.log("app " + app)
console.log("anotherApp " + anotherApp)
http.createServer(app).listen(80)
https.createServer(app).listen(443)

// 1.   app.get(name)
console.log("app.get('title'): " + app.get('title'))

// 2.   app.set(name, value)
app.set('title', 'My Site')
console.log("app.get('title') AFTER set: " + app.get('title'))
// 2.1  app.set(booleanKey, true) or app.set(booleanKey, false)   ==   app.enable(booleanKey) or app.disable(booleanKey)
app.set('foo', true)
console.log("app.get('foo') AFTER set: " + app.get('foo'))
app.disable('foo')
console.log("app.get('foo') AFTER disable: " + app.get('foo'))

// 3.   app.get(path, callback [, callback ...])
app.get('/', (req, res) => {
    res.send('GET request to homepage')
})

// 4.   app.use([path,] callback [, callback...])
// 4.1  if requestedPath's base -- matches -- `path` -> middleware function is executed
app.use('/apple', (req, res, next) => {
    console.log("requestedPath's base -- matches -- `path`")
    next()
})
// 4.2  path  NOT specified -> "/"      == executed / EVERY request | app
app.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})
// 4.3  middleware functions -- are executed -- sequentially
app.use('/nogobeyond', (req, res, next) => {
    res.send('NO go beyond!')
    // next()       == NO go beyond
})
app.get('/nogobeyond', (req, res) => {
    res.send('nogobeyond, because PREVIOUS sequential match one, does NOT pass it')
})
// 4.4  error-handling middleware
app.use('/errorhandlingmiddleware', (err, req, res, next) => {
    res.status(500).send('Something broke!')
    console.error(err.stack)
})


// 5.   app.listen(path [, callback])
fs.unlinkSync(SOCKET_PATH);
app.listen(SOCKET_PATH)

// 6.   app.listen([port[, host[, backlog]]][, callback])
app.listen(3000)
// NO arguments
app.listen = function () {
    const server = http.createServer(this)
    return server.listen.apply(server, arguments)
}