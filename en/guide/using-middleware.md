---
layout: page
title: Using Express middleware
description: Learn how to use middleware in Express.js applications, including application-level and router-level middleware, error handling, and integrating third-party middleware.
menu: guide
lang: en
redirect_from: "/guide/using-middleware.html"
---

# Using middleware

* Express == 💡routing and middleware web framework💡 / minimal functionality of its own
  * Reason of "minimal": 🧠== middleware function callS 🧠

* Middleware functions
  * 👀:= functions / 
    * -- have access to --👀
      * [`req` == request object](/_includes/api/en/5x/req.md)  
      * [`res` == response object](/_includes/api/en/5x/res.md)
      * next middleware function (== `next`) | application's request-response cycle
    * can
      * Execute any code
      * Make changes | request & response objects
      * End the request-response cycle
      * Call the next middleware function | stack
        * == pass control | NEXT middleware function
        * ⚠️if the CURRENT middleware function does NOT end the request-response cycle -> MANDATORY to call `next()`⚠️
  * types
    * [Application-level middleware](#application-level-middleware)
    * [Router-level middleware](#router-level-middleware)
    * [Error-handling middleware](#error-handling-middleware)
    * [Built-in middleware](#built-in-middleware)
    * [Third-party middleware](#third-party-middleware)

* sub-stack of middleware system | mount point
  * == series of middleware functions together 

<h2 id='middleware.application'>Application-level middleware</h2>
## Application-level middleware

* if you want to bind application-level middleware -- to an -- instance of the [app object](/_includes/api/en/5x/app.md) -> use
  * `app.use([path], ....)`
  * `app.METHOD()` / 
    * ALLOWED `METHOD` are `.get`, `.post` or `.put`
      * == `app.get()`, `app.post()` or `app.put()`

* route handlers
  * 👀-- enable you to define -- MULTIPLE routes / path 👀
    * ⚠️if NOT LAST route ends the request-response cycle -> LAST -- will never get -- called ⚠️

* 💡if you want to skip the REST of middleware functions & used | `app.METHOD()` or `router.METHOD()` -> call `next('route')` 💡

* middleware functions -- can be -- declared | array variable
  * Reason: 🧠reusability🧠

<h2 id='middleware.router'>Router-level middleware</h2>
## Router-level middleware

* TODO:
* `[mountPath]`
  * == optional mount path
  Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of `express.Router()`.

```js
const router = express.Router()
```
Load router-level middleware by using the `router.use()` and `router.METHOD()` functions.

The following example code replicates the middleware system that is shown above for application-level middleware, by using router-level middleware:

```js
const express = require('express')
const app = express()
const router = express.Router()

// a middleware function with no mount path. This code is executed for every request to the router
router.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/user/:id', (req, res, next) => {
  console.log('Request URL:', req.originalUrl)
  next()
}, (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
})

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/user/:id', (req, res, next) => {
  // if the user ID is 0, skip to the next router
  if (req.params.id === '0') next('route')
  // otherwise pass control to the next middleware function in this stack
  else next()
}, (req, res, next) => {
  // render a regular page
  res.render('regular')
})

// handler for the /user/:id path, which renders a special page
router.get('/user/:id', (req, res, next) => {
  console.log(req.params.id)
  res.render('special')
})

// mount the router on the app
app.use('/', router)
```

To skip the rest of the router's middleware functions, call `next('router')`
to pass control back out of the router instance.

This example shows a middleware sub-stack that handles GET requests to the `/user/:id` path.

```js
const express = require('express')
const app = express()
const router = express.Router()

// predicate the router with a check and bail out when needed
router.use((req, res, next) => {
  if (!req.headers['x-auth']) return next('router')
  next()
})

router.get('/user/:id', (req, res) => {
  res.send('hello, user!')
})

// use the router and 401 anything falling through
app.use('/admin', router, (req, res) => {
  res.sendStatus(401)
})
```

<h2 id='middleware.error-handling'>Error-handling middleware</h2>
## Error-handling middleware

<div class="doc-box doc-notice" markdown="1">
Error-handling middleware always takes _four_ arguments. You must provide four arguments to identify it as an error-handling middleware function. Even if you don't need to use the `next` object, you must specify it to maintain the signature. Otherwise, the `next` object will be interpreted as regular middleware and will fail to handle errors.
</div>

Define error-handling middleware functions in the same way as other middleware functions, except with four arguments instead of three, specifically with the signature `(err, req, res, next)`:

```js
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
```

For details about error-handling middleware, see: [Error handling](/{{ page.lang }}/guide/error-handling.html).

<h2 id='middleware.built-in'>Built-in middleware</h2>
## Built-in middleware

Starting with version 4.x, Express no longer depends on [Connect](https://github.com/senchalabs/connect). The middleware
functions that were previously included with Express are now in separate modules; see [the list of middleware functions](https://github.com/senchalabs/connect#middleware).

Express has the following built-in middleware functions:

- [express.static](/en/4x/api.html#express.static) serves static assets such as HTML files, images, and so on.
- [express.json](/en/4x/api.html#express.json) parses incoming requests with JSON payloads. **NOTE: Available with Express 4.16.0+**
- [express.urlencoded](/en/4x/api.html#express.urlencoded) parses incoming requests with URL-encoded payloads.  **NOTE: Available with Express 4.16.0+**

<h2 id='middleware.third-party'>Third-party middleware</h2>
## Third-party middleware

Use third-party middleware to add functionality to Express apps.

Install the Node.js module for the required functionality, then load it in your app at the application level or at the router level.

The following example illustrates installing and loading the cookie-parsing middleware function `cookie-parser`.

```bash
$ npm install cookie-parser
```

```js
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

// load the cookie-parsing middleware
app.use(cookieParser())
```

For a partial list of third-party middleware functions that are commonly used with Express, see: [Third-party middleware](../resources/middleware.html).
