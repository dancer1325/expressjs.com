# Goal
* [`application` object](../../5x/app.md)

# How has it been created?
* `npm init -y`
* `npm install express cors`
* create "*.js"

# How to run it locally?
* `node fileName.js`
* about
  * "all.js"
    * `curl -X OPTIONS http://localhost:80/products/1 -H "Origin: http://example.com" -H "Access-Control-Request-Method: GET" -v`
      * returns "Access-Control-Allow-Origin: *"
  * "corsPer1Route.js"
    * `curl -X OPTIONS http://localhost:80/products/1 -H "Origin: http://example.com" -H "Access-Control-Request-Method: GET" -v`
      * NOT returns "Access-Control-Allow-Origin: *"
    * `curl -X GET http://localhost:80/products/1 -H "Origin: http://example.com" -H "Access-Control-Request-Method: GET" -v`
      * returns "Access-Control-Allow-Origin: *"
  * "corsWithOptions.js"
    * `curl -v -H "Origin: http://example.com" http://localhost:80/products/1`
      * includes "Access-Control-Allow-Origin: http://example.com"
    * `curl -v -H "Origin: http://different-example.com" http://localhost:80/products/1`
      * NOT includes "Access-Control-Allow-Origin"
  