(function ($) {
	"use strict";
	$.fn.serialFade = function( o ) {
			var 	o = $.extend({
						time: 900,
						delay: 300,
						level: 0,
						end: null,
						each: null
					}, o),
					d = o.delay,
					a = this;
			
			return a.each(function(i,b){
				b = $(b);
				setTimeout(function(){
					b.stop().fadeTo(o.time,o.level);
					i == a.length -1 ? setTimeout(function(){ /^f/.test(typeof o.end) ? o.end.call(b) : null;}, o.time + d) : null;
				}, d * i);
				setTimeout(function(){ /^f/.test(typeof o.each) ? o.each.call(b) : null;}, (d * i) + d);
			});
	};
})(jQuery);