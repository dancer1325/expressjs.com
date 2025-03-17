<h3 id='app.use'>app.use([path,] callback [, callback...])</h3>

* 💡mounts the SPECIFIED [middleware](/en/guide/using-middleware.md) function or functions | SPECIFIED path 💡/
  * 👀if requestedPath's base -- matches -- `path` -> middleware function is executed 👀
    * 👀requestedPath's base == "x/*" 👀
    * if you do NOT specify `path` -> middleware function is executed / EVERY app's request 
      * Reason: 🧠by default, `path` == "/" 🧠
    * _Example:_ `app.use('/apple', ...)` -- match --
      * "/apple", 
      * "/apple/images",
      * "/apple/images/news"
      * ...
  * ⚠️middleware functions are executed sequentially ⚠️
    * == inclusion order is important
    * ⚠️if a middleware function does NOT allow going beyond the request -> NO reach other middleware functions ⚠️
  * ⚠️INDEPENDENT of HTTP request's method ⚠️

* [routing-args](/_includes/api/en/5x/routing-args.md)

# Description

* sub-apps / [application settings](/_includes/api/en/5x/app-settings.md)' value
  * != default value -> inherit it
  * == default value -> NOT inherit it

# Error-handling middleware

* := 👀middleware function / takes 4 arguments `(err, req, res, next)`) 👀  
  * ALTHOUGH you do NOT use the `next` object -> you must specify it -- to maintain the -- signature
    * Reason: 🧠`next` object -- will be interpreted as -- regular middleware -> fail to handle errors 🧠
* see [Error handling](/en/guide/error-handling.md)

# Path examples

* valid `path` values -- for mounting -- middleware
* TODO:
<div class="table-scroller">
<table class="doctable" border="1">

<thead>
<tr>
<th>Type</th>
<th>Example</th>
</tr>
</thead>

<tbody>

<tr>
<td>Path</td>
<td markdown="1">
This will match paths starting with `/abcd`:

```js
app.use('/abcd', (req, res, next) => {
  next()
})
```

</td>
</tr>

<tr>
<td>Path Pattern</td>
<td markdown="1">
This will match paths starting with `/abcd` and `/abd`:

```js
app.use('/ab(c?)d', (req, res, next) => {
  next()
})
```

</td>
</tr>

<tr>
<td>Regular Expression</td>
<td markdown="1">
This will match paths starting with `/abc` and `/xyz`:

```js
app.use(/\/abc|\/xyz/, (req, res, next) => {
  next()
})
```

</td>
</tr>

<tr>
<td>Array</td>
<td markdown="1">
This will match paths starting with `/abcd`, `/xyza`, `/lmn`, and `/pqr`:

```js
app.use(['/abcd', '/xyza', /\/lmn|\/pqr/], (req, res, next) => {
  next()
})
```

</td>
</tr>

</tbody>

</table>
</div>

# Middleware callback function examples

The following table provides some simple examples of middleware functions that
can be used as the `callback` argument to `app.use()`, `app.METHOD()`, and `app.all()`.

<table class="doctable" border="1">

<thead>
<tr>
<th>Usage</th>
<th>Example</th>
</tr>
</thead>
<tbody>

<tr>
<td>Single Middleware</td>
<td markdown="1">
You can define and mount a middleware function locally.

```js
app.use((req, res, next) => {
  next()
})
```

A router is valid middleware.

```js
const router = express.Router()
router.get('/', (req, res, next) => {
  next()
})
app.use(router)
```

An Express app is valid middleware.

```js
const subApp = express()
subApp.get('/', (req, res, next) => {
  next()
})
app.use(subApp)
```

</td>
</tr>

<tr>
<td>Series of Middleware</td>
<td markdown="1">
You can specify more than one middleware function at the same mount path.

```js
const r1 = express.Router()
r1.get('/', (req, res, next) => {
  next()
})

const r2 = express.Router()
r2.get('/', (req, res, next) => {
  next()
})

app.use(r1, r2)
```

</td>
</tr>

<tr>
<td>Array</td>
<td markdown="1">
Use an array to group middleware logically.

```js
const r1 = express.Router()
r1.get('/', (req, res, next) => {
  next()
})

const r2 = express.Router()
r2.get('/', (req, res, next) => {
  next()
})

app.use([r1, r2])
```

</td>
</tr>

<tr>
<td>Combination</td>
<td markdown="1">
You can combine all the above ways of mounting middleware.

```js
function mw1 (req, res, next) { next() }
function mw2 (req, res, next) { next() }

const r1 = express.Router()
r1.get('/', (req, res, next) => { next() })

const r2 = express.Router()
r2.get('/', (req, res, next) => { next() })

const subApp = express()
subApp.get('/', (req, res, next) => { next() })

app.use(mw1, [mw2, r1, r2], subApp)
```

</td>
</tr>

</tbody>

</table>

Following are some examples of using the [express.static](/{{page.lang}}/guide/using-middleware.html#middleware.built-in)
middleware in an Express app.

Serve static content for the app from the "public" directory in the application directory:

```js
// GET /style.css etc
app.use(express.static(path.join(__dirname, 'public')))
```

Mount the middleware at "/static" to serve static content only when their request path is prefixed with "/static":

```js
// GET /static/style.css etc.
app.use('/static', express.static(path.join(__dirname, 'public')))
```

Disable logging for static content requests by loading the logger middleware after the static middleware:

```js
app.use(express.static(path.join(__dirname, 'public')))
app.use(logger())
```

Serve static files from multiple directories, but give precedence to "./public" over the others:

```js
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'files')))
app.use(express.static(path.join(__dirname, 'uploads')))
```
