<h2 id="app">Application</h2>

* == 👀object / 
  * -- represents the -- Express application 👀
    * 💡return value of `express()` 💡 
    * 's methods
      * route HTTP requests
        * [app.METHOD](#app.METHOD)
        * [app.param](#app.param)
      * configure middleware
        * [app.route](#app.route)
      * render HTML views
        * [app.render](#app.render)
      * register a template engine
        * [app.engine](#app.engine)
    * 's properties
      * == application's behaviour
        * see [Application settings](app-settings.md)
    * -- can be referred from --
      * [`req.app`](req-app.md)
        * == request object
      * [`res.app`](res-app.md)
        * == response object 
  * 's design of use
    * Node's HTTP servers' callback / handle requests
      * -> SAME code base | HTTP & HTTPS
* "app"
  * 👀== conventional name == you can rename 👀

<h3 id='app.properties'>Properties</h3>

<section markdown="1">
  {% include api/en/5x/app-locals.md %}
</section>

<section markdown="1">
  {% include api/en/5x/app-mountpath.md %}
</section>

<section markdown="1">
  {% include api/en/5x/app-router.md %}
</section>

<h3 id='app.events'>Events</h3>

<section markdown="1">
  {% include api/en/5x/app-onmount.md %}
</section>

<h3 id='app.methods'>Methods</h3>

<section markdown="1">
  {% include api/en/5x/app-all.md %}
</section>

<section markdown="1">
  {% include api/en/5x/app-delete-method.md %}
</section>

<section markdown="1">
  {% include api/en/5x/app-disable.md %}
</section>

<section markdown="1">
  {% include api/en/5x/app-disabled.md %}
</section>

<section markdown="1">
  {% include api/en/5x/app-enable.md %}
</section>

<section markdown="1">
  {% include api/en/5x/app-enabled.md %}
</section>

<section markdown="1">
  {% include api/en/5x/app-engine.md %}
</section>

<section markdown="1">
  {% include api/en/5x/app-get.md %}
</section>

<section markdown="1">
  {% include api/en/5x/app-get-method.md %}
</section>

<section markdown="1">
  {% include api/en/5x/app-listen.md %}
</section>

<section markdown="1">
  {% include api/en/5x/app-METHOD.md %}
</section>

<section markdown="1">
  {% include api/en/5x/app-param.md %}
</section>

<section markdown="1">
  {% include api/en/5x/app-path.md %}
</section>

<section markdown="1">
  {% include api/en/5x/app-post-method.md %}
</section>

<section markdown="1">
  {% include api/en/5x/app-put-method.md %}
</section>

<section markdown="1">
  {% include api/en/5x/app-render.md %}
</section>

<section markdown="1">
  {% include api/en/5x/app-route.md %}
</section>

<section markdown="1">
  {% include api/en/5x/app-set.md %}
</section>

<section markdown="1">
  {% include api/en/5x/app-use.md %}
</section>
