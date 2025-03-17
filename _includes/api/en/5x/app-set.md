<h3 id='app.set'>app.set(name, value)</h3>

* set app setting /
  * 's key == `name`
    * take care of [built-in app settings](#app.settings.table) 
    * 👀if you name == boolean -> 
      * `app.set('foo', true)` == `app.enable('foo')`
      * `app.set('foo', false)` == `app.disable('foo')` 👀
  * 's value == `value`

<h4 id='app.settings.table'>Application Settings</h4>

{% include api/en/5x/app-settings.md %}
