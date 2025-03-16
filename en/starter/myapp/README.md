# Goal
* Create an Express app -- via -- Express generator / 
  * "myapp" named
  * | "myapp/"
  * [pug](https://pugjs.org/) -- as -- view engine
  * | 
    * `/`, returns "Hello World!"
    * OTHER, respond "404 Not Found"

# How has it been created?
* `express --view=pug myapp` or `npx express-generator --view=pug myapp`

# How to run it locally?
* `npm install`
* |
  * MacOS or Linux
    ```
    DEBUG=myapp:* npm start
    ```
  * Windows
    ```
    $env:DEBUG='myapp:*'; npm start
    ```
* open browser | http://localhost:3000/