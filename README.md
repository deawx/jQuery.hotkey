jQuery Hotkey
=============

Simplest plugin for binding shortcuts

v1.1.0

Requirements
---------

jQuery 1.7+

Usage
-----

```js
$(document).hotkey('alt+shift+esc', function(e){
     // do stuff...
});

// or...

$(document).on('hotkey', null, 'alt+shift+esc', function(e){
    // do stuff...
});
```

Tools
-----

**$.hotkey.os(items)** - Definition of shortcut keys for the OS.

Supported OS: OS X, Windows, Linux, ChromeOS

Example object:

```js
var shortcut = $.hotkey.os({
	mac: 'cmd+s',
	linux: 'ctrl+alt+s',
	windows: 'ctrl+s',
	chrome: 'alt+shift+s',
	other: 'ctrl+s'
});
```
Property ```other``` is default shortcut.

Example
-------

Save post as ```ctrl+s``` or ```cmd+s``` for Mac

```js
var shortcut = $.hotkey.os({
	mac: 'cmd+s',
	other: 'ctrl+s'
});

$(document).hotkey(shortcut, function(e){
	e.preventDefault();
	$.post("post/add", $('form.post').serialize());
});
```

Changelog
---------

v1.1.0
* Add $.hotkey.os() tool
* Bug fixes

v1.0.0
* First commit