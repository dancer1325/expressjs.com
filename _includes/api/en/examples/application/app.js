const express = require('express')

// 0.   app
const app = express()
const anotherApp = express()    // ANY name -- can be -- given
console.log("app " + app)
console.log("anotherApp " + anotherApp)

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
