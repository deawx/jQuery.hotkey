jQuery Hotkey
=============

Simplest plugin for binding shortcuts

v1.0.0

Usage
=====

```js
$(document).hotkey('alt+shift+esc', function(e){
     // do stuff...
});

// or...

$(document).on('hotkey', null, 'alt+shift+esc', function(e){
    // do stuff...
});
```

Example
=======

Save post as cmd+s/ctrl+s

```js
var shortcut = navigator.appVersion.indexOf("Mac") != -1)
	? 'cmd+s'
	: 'ctrl+s';

$(document).hotkey(shortcut, function(e){
	
	e.preventDefault();

	$.post("post/add", $('form.post').serialize());
});
```