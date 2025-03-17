# Goal
* [`application` object](../../5x/app.md)

# How has it been created?
* `npm init -y`
* `npm install express`
* create "app.js"

# How to run it locally?
* `node app.js`
* open browser | 
  * http://localhost:3000/
  * about `app.use([path,] callback [, callback...])`
    * http://localhost:3000/apple/ & http://localhost:3000/apple/another & ...
    * "http://localhost:3000/randomValue"
      * catch by `app.use()` / NO mount path
    * http://localhost:3000/errorhandlingmiddleware
      * Problem:
        * Problem1: root NOT found
          * Solution: TODO: