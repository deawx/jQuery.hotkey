#jQuery Hotkey

Simplest plugin for binding shortcuts

v1.1.0

##Requirements

jQuery 1.7+


##Usage

Include jQuery and the plugin on a page. Then bind events.

```html
<script src="jquery.js"></script>
<script src="jquery.hotkey.js"></script>
<script>

	$(document).hotkey('alt+shift+esc', function(e){
	     // do stuff...
	});

	// or...

	$(document).on('hotkey', null, 'alt+shift+esc', function(e){
	    // do stuff...
	});

</script>
```

##Tools

####`$.hotkey.platform(items)`

Definition of shortcut keys for the OS.

Supported OS: OS X, Windows, Linux, ChromeOS

Returns: If the platform is not detected, it uses the property ```default``` for shortcut. 

`Example:`

```js
var shortcut = $.hotkey.platform({
	mac: 'cmd+s',
	linux: 'ctrl+alt+s',
	windows: 'ctrl+s',
	chrome: 'alt+shift+s',
	default: 'ctrl+s'
});
```

##Example

Save post as ```ctrl+s``` or ```cmd+s``` for Mac

```js
var shortcut = $.hotkey.platform({
	mac: 'cmd+s',
	default: 'ctrl+s'
});

$(document).hotkey(shortcut, function(e){
	e.preventDefault();
	$.post("post/add", $('form.post').serialize());
});
```

##Changelog

v1.1.0
* Add $.hotkey.platform() tool
* Bug fixes

v1.0.0
* First commit

## License

Copyright (c) 2015 Aleksey Barkovsky
Licensed under the MIT license.