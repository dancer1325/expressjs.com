---
layout: home
title: Express - Node.js web application framework
description: "Express is a fast, unopinionated, minimalist web framework for Node.js, providing a robust set of features for web and mobile applications."
menu: home
lang: en
redirect_from: "/en/index.html"
---

* == Node.js web Application framework /
  * minimal
    * == Node.js features
  * flexible
  * provides features 
    * | applications 
      * web 
      * mobile
    * if you want MORE features -> use [Express middleware modules](/en/resources/middleware.md)
* allows
  * creating APIs HTTP-utility
* `npm install express --save`
* _Example:_
  ```javascript
  const express = require('express')
  const app = express()
  const port = 3000
  
  app.get('/', (req, res) => {
  res.send('Hello World!')
  })
  
  app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  })
  ```