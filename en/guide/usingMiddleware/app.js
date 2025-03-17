const express = require('express')
const app = express()

// 1. middleware function -- have access to -- `req`, `res` & `next`
app.use((req, res, next) => {
    // 2. ANY code -- can be -- executed
    console.log('Have access to req: ' + req + ' & res: ' + res + " & next: " + next)
    // 3. make a change | `req`
    console.log("req.user BEFORE changing it " + req.user)
    req.user = {
        id: 'user123',
        role: 'admin'
    };
    console.log("req.user AFTER changing it " + req.user)
    next()      // pass control | NEXT middleware function
})

// 4. middleware function -- can end -- request-response cycle
app.get('/end', (req, res) => {
    res.send('END request-response cycle')      // END request-response cycle
})
// ALTHOUGH mount path -- matches with -- '/end', since PREVIOUS one ends -> NOT reach this one
app.use('/end', (req, res, next) => {
    console.log("app.use('/end',...)")
    next()
})

// 5. route handlers -- enable define -- MULTIPLE routes / path
// 5.1 if NOT LAST route ends the request-response cycle -> LAST -- will never get -- called
app.get('/nextnocalled', (req, res, next) => {
    console.log('/nextnocalled  -  FIRST')
    next()
}, (req, res, next) => {    //  middleware sub-stack
    console.log('/nextnocalled  -  FIRST  -  SUBSTACK')
    res.send('User Info')   // ends the request-response cycle
})
app.get('/nextnocalled', (req, res, next) => {
    console.log('/nextnocalled  -  LAST')
    res.send(req.params.id)
})

// 5.2 if you want to skip the REST of middleware functions -> call `next('route')`
app.get('/user/:id', (req, res, next) => {
    // if the user ID is 0, skip to the next route
    if (req.params.id === '0') next('route')
    // otherwise pass the control to the next middleware function in this stack
    else next()
}, (req, res, next) => {
    // send a regular response
    res.send('regular')
})

// 6. handler for the /user/:id path, which sends a special response
app.get('/user/:id', (req, res, next) => {
    res.send('special')
})

// 7. middleware functions -- declared | array variable
function logOriginalUrl (req, res, next) {
    console.log('[/middlewaredeclaredinarray] Request URL:', req.originalUrl)
    next()
}
function logMethod (req, res, next) {
    console.log('[/middlewaredeclaredinarray] Request Type:', req.method)
    next()
}
const logStuff = [logOriginalUrl, logMethod]
app.get('/middlewaredeclaredinarray', logStuff, (req, res, next) => {
    res.send('User Info')
})

// REQUIRED -- to test -- middleware functions
app.listen(3000)