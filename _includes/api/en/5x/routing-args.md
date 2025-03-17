<h4> Arguments</h4>

<table class="doctable" border="1" style="padding-left: 20px;">
<tr>
<th>Argument </th>
<th> Description </th>
<th style="width: 100px;"> Default </th>
</tr>

<tr>
<td><code>path</code></td>
<td>
== path | middleware function -- is -- invoked </br>
ALLOWED values
<ul>
<li>string / -- represent a -- path</li>
<li>path pattern</li>
<li>regular expression pattern / match paths</li>
<li> `[ofPreviousAllowedValues]` </li>
</ul>

_Example:_ [Path examples](app-use.md#path-examples)
</td>
<td>'/' (root path)</td>
</tr>

<tr>
<td> <code>callback</code></td>
<td>
== Callback functions / ALLOWED values
<ul>
<li>middleware function</li>
<ul>
<li>👀ALLOWED ALSO to use [router](router.md) & [app](application.md)👀
<ul>
<li>Reason: 🧠implement the middleware interface 🧠</li>
</ul>
</li>
</ul>
<li>middleware functionS / -- separated by -- `,`</li>
<li>`[middlewareFunctions]`</li>
<li>COMBINATION of PREVIOUS</li>
</ul>
<p>
* TODO:
You can provide multiple callback functions that behave just like middleware, except
that these callbacks can invoke <code>next('route')</code> to bypass
the remaining route callback(s). You can use this mechanism to impose pre-conditions
on a route, then pass control to subsequent routes if there is no reason to proceed with the current route.
</p><p>
When a callback function throws an error or returns a rejected promise, `next(err)` will be invoked automatically.
</p><p>


_Examples:_ [Middleware callback function examples](app-use.md#middleware-callback-function-examples)

</td>
<td> None </td>
</tr></table>
