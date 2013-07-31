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
 * @Version: 1.0.1
 *
 * Usage:
 *     $().fixHeight();
 **/
(function(jQuery) {
	jQuery.fn.fixHeight = function() {
		var obj = [];
		var max = {};

		this.each(function(i) {
			var e = jQuery(this);
			var y = e.offset().top;
			var height = e.height();

			obj[i] = y;

			if (max[y] === undefined) {
				max[y] = height;
			} else if (max[y] < height) {
				max[y] = height;
			}
		});

		return this.each(function(i) {
			var e = jQuery(this);
			var y = obj[i];
			e.height(max[y]);
		});
	}
})(jQuery);
