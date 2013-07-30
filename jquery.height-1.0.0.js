/**
 * jquery.height.js
 * https://github.com/yangci/jquery.height.js
 * 
 * Copyright (c) 2013 KLIP LLC
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * @Author: Yoji Itoh (yoji.itoh@klip.co.jp)
 * @Version: 1.0.0
 *
 * Usage:
 *     $().fixHeight();
 **/
(function(jQuery) {
	jQuery.fn.fixHeight = function() {
		var height = {};
		var max = {};

		this.each(function() {
			var e = jQuery(this);
			var y = e.offset().top;

			if (height[y] === undefined) {
				height[y] = [];
			}
			height[y].push(e);

			if (max[y] === undefined) {
				max[y] = 0;
			}
			if (max[y] < e.height()) {
				max[y] = e.height();
			}
		});

		return this.each(function() {
			var e = jQuery(this);
			var y = e.offset().top;

			e.height(max[y]);
		});
	}
})(jQuery);
