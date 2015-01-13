#jQuery Hotkey Event

Simplest plugin for binding shortcuts events.

v1.2.1


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


##Key Bindings

Shotcuts can be passed as strings. Case and whitespace do not matter. `+` is used to add keys to make a single combo.
For example, if you wanted to look for the key combination of `control + shift + p`, then one of the following would
represent that (you can use shorthand names or symbols for keys that need it):

`ctrl+shift+p` or `control+shift+p` or `⌃+⇧+p`


##Key names

Full name | Name | Alias
----|---------|------------
Altername | `alt` | 
Option | `option` | `opt`, `⌥`
Control | `ctrl` | `control`, `⌃`
Shift | `shift` | `⇧`
Command | `cmd` | `cmd`, `command`, `⌘`, ``
Windows | `windows` | `win`
Spacebar | `space` | 
Return | `return` | `enter`, `⌅`, `↩`
Caps Lock | `caps` | `capital`, `capslock`, `⇪` 
Escape | `esc` | `escape`, `⎋` 
Back Space | `backspace` | `⌫` 
Delete | `del` | `delete`, `⌦`
Insert | `insert` | `ins`
Num Lock | `num` | `numlock`
Scroll Lock | `scroll` | `scrolllock`
Tab | `tab` | `⇥` 
Home | `home` | `↖` 
End | `end` | `↘` 
Page Up | `pageup` | `⇞` 
Pge Down | `pagedown` | `⇟` 
Arrow Up | `up` | `↑` 
Arrow Down | `down` | `↓` 
Arrow Left | `left` | `←` 
Arrow Right | `right` | `→` 
Hyper | `hyper` | `alt+ctrl+shift`
Informational | `f1`...`f12`
Plus | `plus` | 
Minus | `minus` | 


##Tools

####`$.hotkey.platform(items)`

Definition of shortcut keys for the OS.

Supported OS: OS X, Windows, Linux, ChromeOS.

Returns: If the platform is not detected, it return the property `default`. 

```js
var shortcut = $.hotkey.platform({
	mac: 'cmd+s',
	linux: 'ctrl+alt+s',
	windows: 'ctrl+s',
	chrome: 'alt+shift+s',
	default: 'ctrl+s'
});
```


##Example Usage

Save post as ```ctrl+s``` or ```cmd+s``` for Mac.

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


##Dependencies

Requires jQuery 1.7.x or higher.


##Changelog

v1.2.1
* Bug Fixes
* Minor improvements

v1.2.0
* Add symbols support
* Buf fixes
* Minor improvements

v1.1.0
* Add $.hotkey.platform() tool
* Bug fixes

v1.0.0
* Release

## License

Copyright (c) 2015 Aleksey Barkovsky
Licensed under the MIT license.