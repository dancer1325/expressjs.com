# expressjs.com

* goal
  * repository of the website [expressjs.com](https://expressjs.com) -- hosted on -- github-pages

## How to run this website locally?

### -- via -- Ruby `gem`
1. install [Ruby and Bundler](https://help.github.com/articles/setting-up-your-pages-site-locally-with-jekyll/)
2. `gem install jekyll-redirect-from`
   * install [jekyll-redirect-from](https://github.com/jekyll/jekyll-redirect-from) -- from -- gem
3. `bundle install`
   * Bundler will look in the Gemfile for which gems to install. 
   * The `github-pages` gem includes the same version of Jekyll and other dependencies as used by GitHub Pages, so that your local setup mirrors GitHub Pages as closely as possible.
4. `bundle exec jekyll serve`
5. | your browser, open "http://localhost:4000"

### -- via -- Docker

1. install Docker & Make
2. `make build`
3. `make serve`
   * serve the project / include live reloading
4. `make clean`
   * remove the generated docker images & resources

## Formatting

* [Kramdown](https://kramdown.gettalong.org/quickref.html)
  * == variant of Markdown
  * -- used by -- Jekyll  
  * you can use [GFM](https://kramdown.gettalong.org/parser/gfm.html)
    * _Example:_ 
      ```.js
      var express = require('express')
      var app = express()
      app.listen(3000)
      ```
      -- transformed to --
      ```
      const express = require('express')
      const app = express()
      app.listen(3000)
      ```
* [Liquid template engine](https://shopify.github.io/liquid/)
  * -- used by -- Jekyll

## Why to use Jekyll?

* ALTERNATIVE to Express-based solution
* 👀Jekyll -- comes built-in with -- GitHub Pages 👀
