const express = require('express')
const app = express()

// 1.   app.get(name)
console.log("app.get('title') " + app.get('title'))

app.set('title', 'My Site')
console.log("app.get('title') AFTER set" + app.get('title'))
