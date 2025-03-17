# Goal
* Express static files

# How has it been created?
* `npm init -y`
* `npm install express`
* create "app.js"

# How to run it locally?
* |
  * this root, `node app.js`
  * root's parent level, `node staticFiles/app.js`
* | browser, opens
  * "http://localhost:3000"
  * "http://localhost:3000/public" & "http://localhost:3000/files" & "http://localhost:3000/filesWithPrefix" 
    * NOTHING
  * "http://localhost:3000/css/index.css" & "http://localhost:3000/html/hello.html" & "http://localhost:3000/html/hello2.html"
    * ⚠️!= include the prefix path ("http://localhost:3000/public/css/index.css" & "http://localhost:3000/public/html/hello.html" & "http://localhost:3000/public/html/hello2.html")
    * ⚠️ONLY ones served -- thanks to -- define an absolute path ⚠️
  * "http://localhost:3000/images/Servus.jpg"
    * ⚠️!= include the prefix path (http://localhost:3000/files/images/Servus.jpg) ⚠️
  * "http://localhost:3000/files/images/Servus2.jpg"
    * specify a VIRTUAL path prefix
  * 