/*
 * jQuery Hotkey Plugin
 * Copyright 2015, Aleksey Barkovsky
 *
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * 
 * 
 * Examples:
 *
 * $(document).hotkey('alt+shift+esc', function(e){
 *     // do stuff...
 * });
 * 
 * // or...
 * 
 * $(document).on('hotkey', null, 'alt+shift+esc', function(e){
 *     // do stuff...
 * }); 
 */

;(function($, window, document){

	"use strict";

	$.hotkey = {

		varsion: '1.0.0',

		specialKeys: {
			8: "backspace",
			9: "tab",
			10: "return",
			13: "return",
			19: "pause",
			20: "capslock",
			27: "esc",
			32: "space",
			33: "pageup",
			34: "pagedown",
			35: "end",
			36: "home",
			37: "left",
			38: "up",
			39: "right",
			40: "down",
			45: "insert",
			46: "del",
			59: ";",
			61: "=",
			96: "0",
			97: "1",
			98: "2",
			99: "3",
			100: "4",
			101: "5",
			102: "6",
			103: "7",
			104: "8",
			105: "9",
			106: "*",
			107: "plus",
			109: "minus",
			110: ".",
			111: "/",
			112: "f1",
			113: "f2",
			114: "f3",
			115: "f4",
			116: "f5",
			117: "f6",
			118: "f7",
			119: "f8",
			120: "f9",
			121: "f10",
			122: "f11",
			123: "f12",
			144: "numlock",
			145: "scroll",
			173: "-",
			186: ";",
			187: "=",
			188: ",",
			189: "-",
			190: ".",
			191: "/",
			192: "`",
			219: "[",
			220: "\\",
			221: "]",
			222: "'"
		}
	};

	var self = $.event.special.hotkey = {
		setup: function(data, namespaces) {
			$(this).data("hotkey", true).on('keydown', null, data, self.keydown);
		},
		teardown: function(data) {
			$(this).unbind('keydown', self.keydown);
		},
		keydown: function(event){
			if ($(this).data("hotkey")) {

				var keys     = event.data, 
				    sequence = ['alt', 'ctrl', 'shift', 'meta'],
				    pressed  = [],
				    primary  = '',
				    binded   = [];

				if (typeof keys == 'string' && keys != '') {
					keys = event.data.toLowerCase().replace("hyper", "alt+ctrl+shift").split('+');
				} 

				if ($.isArray(keys) && keys.length > 0) {
					keys = $.map(keys, function(value){
						return value == 'cmd' ? 'meta' : value;
					});
				} else {
					return;
				}

				// Определяем нажатые кнопки в нужной последовательности
				$.each(sequence, function(k, key){
					event[key + 'Key'] && pressed.push(key);
				});

				if ($.inArray(event.which, [16, 17, 18, 91, 92])) {
					if (typeof $.hotkey.specialKeys[event.which] !== 'undefined') {
						pressed.push($.hotkey.specialKeys[event.which]);
					} else {
						pressed.push(String.fromCharCode(event.which).toLowerCase());
					}
				}

				pressed = pressed.length > 1 ? pressed.join('+') : pressed;

				// Расставляем назначеные кнопки в нужной последжовательности
				$.each(sequence, function(k, key){
					k = $.inArray(key, keys);
					if (k > -1) {
						binded.push(key);
						delete keys[k];
					}
				});

				primary = keys.join('');
				if (primary != '') {
					binded.push(primary);
				}

				binded = binded.join('+');

				console.log('Binded', binded);
			
				// Сравниваем результыты и вызываем событие
				if (pressed == binded) {
					console.log('fire');
					event.type = "hotkey";
					$(this).trigger(event);
				}
			}
		}
	};

	$.fn.hotkey = function(keys, handler){
		$(this).on('hotkey', null, keys, handler);
	};
})($, window, document);