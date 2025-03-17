<h3 id='app.listen_path_callback'>app.listen(path, [callback])</h3>
# `app.listen(path, [callback])`

* starts a UNIX socket
* listens for connections | GIVEN path
* == Node's [http.Server.listen()](https://nodejs.org/api/http.html#http_server_listen)

<h3 id='app.listen'>app.listen([port[, host[, backlog]]][, callback])</h3>
# `app.listen([port[, host[, backlog]]][, callback])`

* binds and listens for connections | SPECIFIED host & port
* == Node's [http.Server.listen()](https://nodejs.org/api/http.html#http_server_listen)
* if `port` is omitted or is 0 -> OS -- will assign an -- arbitrary unused port
  * use cases
    * automated tasks (tests, etc.)
* `app.listen()`
  * == NO argument
  * returns a [http.Server](https://nodejs.org/api/http.html#http_class_http_server) object
