---
layout: page
title: Serving static files in Express
description: Understand how to serve static files like images, CSS, and JavaScript in Express.js applications using the built-in 'static' middleware.
menu: starter
lang: en
redirect_from: "/starter/static-files.html"
---

# Serving static files | Express

* static files
  * _Example:_ images, CSS files & JavaScript files
* `express.static(rootHostingStaticAssets, [options])`
  * == 👀built-in middleware Express's function 👀
  * see [express.static](/{{page.lang}}/4x/api.html#express.static)
  * ALLOWED MULTIPLE static assets directories / looks up the static directories -- in -- order
    ```
    app.use(express.static('public'))
    app.use(express.static('files'))
    ```
* `app.use(['virtualPathPrefix'], express.static(rootHostingStaticAssets, [options]))`
  * serve images, CSS files & JavaScript files 
    * placed | `rootHostingStaticAssets/`
    * ⚠️/ `rootHostingStaticAssets/` -- NOT part of the -- URL ⚠️
    * / `['virtualPathPrefix']` == [mount path](/{{ page.lang }}/4x/api.html#app.use)
  * `rootHostingStaticAssets/`
    * ⚠️by default, -- relative to the -- directory | you launch your `node` process ⚠️
    * if you want to specify an absolute path -> use `path.join(__dirname, rootHostingStaticAssets)`
* if you want to cache / improve performance of serving static assets -> [use a reverse proxy](/{{page.lang}}/advanced/best-practice-performance.html#use-a-reverse-proxy)

* see [serve-static](/resources/middleware/serve-static.html)
