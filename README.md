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