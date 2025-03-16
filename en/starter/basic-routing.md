---
layout: page
title: Express basic routing
description: Learn the fundamentals of routing in Express.js applications, including how to define routes, handle HTTP methods, and create route handlers for your web server.
menu: starter
lang: en
redirect_from: "/starter/basic-routing.html"
---

# Basic routing

* Routing
  * == how an application -- responds to a -- client request / PARTICULAR endpoint

* ALLOWED \>= 1 handler functions / route

* route
  ```js
  app.METHOD(PATH, HANDLER)
  ```
  * `app`
    * == `express`' instance
  * `METHOD`
    * == [HTTP request method](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods) / lowercase
  * `PATH`
    * == path | server
  * `HANDLER`
    * if route is matched -> function executed 

* requirements
  * instance of `express` / `app` is created
  * server -- is -- running
