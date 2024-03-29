/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (C) 2014-2020 ServMask Inc.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * ███████╗███████╗██████╗ ██╗   ██╗███╗   ███╗ █████╗ ███████╗██╗  ██╗
 * ██╔════╝██╔════╝██╔══██╗██║   ██║████╗ ████║██╔══██╗██╔════╝██║ ██╔╝
 * ███████╗█████╗  ██████╔╝██║   ██║██╔████╔██║███████║███████╗█████╔╝
 * ╚════██║██╔══╝  ██╔══██╗╚██╗ ██╔╝██║╚██╔╝██║██╔══██║╚════██║██╔═██╗
 * ███████║███████╗██║  ██║ ╚████╔╝ ██║ ╚═╝ ██║██║  ██║███████║██║  ██╗
 * ╚══════╝╚══════╝╚═╝  ╚═╝  ╚═══╝  ╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
 */

jQuery(document).ready(function ($) {
	'use strict';

	// Idea

	$('#ai1wm-feedback-type-link-1').click(function () {
		var radio = $('#ai1wm-feedback-type-1');
		if (radio.is(':checked')) {
			radio.attr('checked', false);
		} else {
			radio.attr('checked', true);
		}
	});

	// Help
	$('#ai1wm-feedback-type-2').click(function () {
		// Hide other options
		$('#ai1wm-feedback-type-1').closest('li').hide();

		// Change placeholder message
		$('.ai1wm-feedback-form').find('.ai1wm-feedback-message').attr('placeholder', ai1wm_locale.how_may_we_help_you);

		// Show feedback form
		$('.ai1wm-feedback-form').fadeIn();
	});

	// Cancel feedback form
	$('#ai1wm-feedback-cancel').click(function (e) {
		$('.ai1wm-feedback-form').fadeOut(function () {
			$('.ai1wm-feedback-type').attr('checked', false).closest('li').show();
		});

		e.preventDefault();
	});

	// Send feedback form
	$('#ai1wm-feedback-submit').click(function (e) {
		var self = $(this);

		var spinner = self.next();
		var type = $('.ai1wm-feedback-type:checked').val();
		var email = $('.ai1wm-feedback-email').val();
		var message = $('.ai1wm-feedback-message').val();
		var terms = $('.ai1wm-feedback-terms').is(':checked');

		self.attr('disabled', true);
		spinner.css('visibility', 'visible');

		$.ajax({
			url: ai1wm_feedback.ajax.url,
			type: 'POST',
			dataType: 'json',
			async: true,
			data: {
				secret_key: ai1wm_feedback.secret_key,
				ai1wm_type: type,
				ai1wm_email: email,
				ai1wm_message: message,
				ai1wm_terms: +terms
			},
			dataFilter: function dataFilter(data) {
				return Ai1wm.Util.json(data);
			}
		}).done(function (data) {
			self.attr('disabled', false);
			spinner.css('visibility', 'hidden');

			if (data.errors.length > 0) {
				$('.ai1wm-feedback .ai1wm-message').remove();

				var errorMessage = $('<div />').addClass('ai1wm-message ai1wm-error-message');
				$.each(data.errors, function (key, value) {
					errorMessage.append($('<p />').text(value));
				});

				$('.ai1wm-feedback').prepend(errorMessage);
			} else {
				var successMessage = $('<div />').addClass('ai1wm-message ai1wm-success-message');
				successMessage.append($('<p />').text(ai1wm_locale.thanks_for_submitting_your_feedback));

				$('.ai1wm-feedback').html(successMessage);
			}
		});

		e.preventDefault();
	});
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (C) 2014-2020 ServMask Inc.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * ███████╗███████╗██████╗ ██╗   ██╗███╗   ███╗ █████╗ ███████╗██╗  ██╗
 * ██╔════╝██╔════╝██╔══██╗██║   ██║████╗ ████║██╔══██╗██╔════╝██║ ██╔╝
 * ███████╗█████╗  ██████╔╝██║   ██║██╔████╔██║███████║███████╗█████╔╝
 * ╚════██║██╔══╝  ██╔══██╗╚██╗ ██╔╝██║╚██╔╝██║██╔══██║╚════██║██╔═██╗
 * ███████║███████╗██║  ██║ ╚████╔╝ ██║ ╚═╝ ██║██║  ██║███████║██║  ██╗
 * ╚══════╝╚══════╝╚═╝  ╚═╝  ╚═══╝  ╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
 */

jQuery(document).ready(function ($) {
	'use strict';

	$('#ai1wm-report-problem-button').click(function (e) {
		$(this).next('.ai1wm-report-problem-dialog').toggleClass('ai1wm-report-active');

		e.preventDefault();
	});

	$('#ai1wm-report-cancel').click(function (e) {
		$(this).closest('.ai1wm-report-problem-dialog').removeClass('ai1wm-report-active');

		e.preventDefault();
	});

	$('#ai1wm-report-submit').click(function (e) {
		var self = $(this);

		var spinner = self.next();
		var email = $('.ai1wm-report-email').val();
		var message = $('.ai1wm-report-message').val();
		var terms = $('.ai1wm-report-terms').is(':checked');

		self.attr('disabled', true);
		spinner.css('visibility', 'visible');

		$.ajax({
			url: ai1wm_report.ajax.url,
			type: 'POST',
			dataType: 'json',
			async: true,
			data: {
				secret_key: ai1wm_report.secret_key,
				ai1wm_email: email,
				ai1wm_message: message,
				ai1wm_terms: +terms
			},
			dataFilter: function dataFilter(data) {
				return Ai1wm.Util.json(data);
			}
		}).done(function (data) {
			self.attr('disabled', false);
			spinner.css('visibility', 'hidden');

			if (data.errors.length > 0) {
				$('.ai1wm-report-problem-dialog .ai1wm-message').remove();

				var errorMessage = $('<div />').addClass('ai1wm-message ai1wm-error-message');
				$.each(data.errors, function (key, value) {
					errorMessage.append($('<p />').text(value));
				});

				$('.ai1wm-report-problem-dialog').prepend(errorMessage);
			} else {
				var successMessage = $('<div />').addClass('ai1wm-message ai1wm-success-message');
				successMessage.append($('<p />').text(ai1wm_locale.thanks_for_submitting_your_request));

				$('.ai1wm-report-problem-dialog').html(successMessage);

				// Hide message
				setTimeout(function () {
					$('.ai1wm-report-problem-dialog').removeClass('ai1wm-report-active');
				}, 2000);
			}
		});

		e.preventDefault();
	});
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (C) 2014-2020 ServMask Inc.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * ███████╗███████╗██████╗ ██╗   ██╗███╗   ███╗ █████╗ ███████╗██╗  ██╗
 * ██╔════╝██╔════╝██╔══██╗██║   ██║████╗ ████║██╔══██╗██╔════╝██║ ██╔╝
 * ███████╗█████╗  ██████╔╝██║   ██║██╔████╔██║███████║███████╗█████╔╝
 * ╚════██║██╔══╝  ██╔══██╗╚██╗ ██╔╝██║╚██╔╝██║██╔══██║╚════██║██╔═██╗
 * ███████║███████╗██║  ██║ ╚████╔╝ ██║ ╚═╝ ██║██║  ██║███████║██║  ██╗
 * ╚══════╝╚══════╝╚═╝  ╚═╝  ╚═══╝  ╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
 */

var Modal = __webpack_require__(4),
    $ = jQuery;

var Import = function Import() {
	var self = this;

	// Set params
	this.params = [];

	// Set modal
	this.modal = new Modal();

	// Set confirm listener
	this.modal.onConfirm = function (options) {
		self.onConfirm(options);
	};

	// Set blogs listener
	this.modal.onBlogs = function (options) {
		self.onBlogs(options);
	};

	// Set stop listener
	this.modal.onStop = function (options) {
		self.onStop(options);
	};

	// Set disk space listener
	this.modal.onDiskSpaceConfirm = function (options) {
		self.onDiskSpaceConfirm(options);
	};
};

Import.prototype.setParams = function (params) {
	this.params = Ai1wm.Util.list(params);
};

Import.prototype.start = function (options, retries) {
	var self = this;
	retries = retries || 0;

	// Reset stop flag
	if (retries === 0) {
		this.stopImport(false);
	}

	// Stop running import
	if (this.isImportStopped()) {
		return;
	}

	// Initializing beforeunload event
	$(window).bind('beforeunload', function () {
		return ai1wm_locale.stop_importing_your_website;
	});

	// Set initial status
	this.setStatus({ type: 'info', message: ai1wm_locale.preparing_to_import });

	// Set params
	var params = this.params.concat({ name: 'secret_key', value: ai1wm_import.secret_key });

	// Set additional params
	if (options) {
		params = params.concat(Ai1wm.Util.list(options));
	}

	// Import
	$.ajax({
		url: ai1wm_import.ajax.url,
		type: 'POST',
		dataType: 'json',
		data: params,
		dataFilter: function dataFilter(data) {
			return Ai1wm.Util.json(data);
		}
	}).done(function () {
		self.getStatus();
	}).done(function (result) {
		if (result) {
			self.run(result);
		}
	}).fail(function (xhr) {
		var timeout = retries * 1000;

		try {
			var json = Ai1wm.Util.json(xhr.responseText);
			if (json) {
				var result = JSON.parse(json);
				var error = result.errors.pop();
				if (error.message) {
					self.stopImport(true);
					self.setStatus({
						type: 'error',
						title: ai1wm_locale.unable_to_import,
						message: error.message
					});
					return;
				}
			}
		} catch (e) {}

		if (retries >= 5) {
			self.stopImport(true);
			self.setStatus({
				type: 'error',
				title: ai1wm_locale.unable_to_import,
				message: ai1wm_locale.unable_to_start_the_import
			});
			return;
		}

		retries++;

		setTimeout(self.start.bind(self, options, retries), timeout);
	});
};

Import.prototype.run = function (params, retries) {
	var self = this;
	retries = retries || 0;

	// Stop running import
	if (this.isImportStopped()) {
		return;
	}

	// Import
	$.ajax({
		url: ai1wm_import.ajax.url,
		type: 'POST',
		dataType: 'json',
		data: params,
		dataFilter: function dataFilter(data) {
			return Ai1wm.Util.json(data);
		}
	}).done(function (result) {
		if (result) {
			self.run(result);
		}
	}).fail(function (xhr) {
		var timeout = retries * 1000;

		try {
			var json = Ai1wm.Util.json(xhr.responseText);
			if (json) {
				var result = JSON.parse(json);
				var error = result.errors.pop();
				if (error.message) {
					self.stopImport(true);
					self.setStatus({
						type: 'error',
						title: ai1wm_locale.unable_to_import,
						message: error.message
					});
					return;
				}
			}
		} catch (e) {}

		retries++;

		setTimeout(self.run.bind(self, params, retries), timeout);
	});
};

Import.prototype.confirm = function (options, retries) {
	var self = this;
	retries = retries || 0;

	// Stop running import
	if (this.isImportStopped()) {
		return;
	}

	// Set params
	var params = this.params.concat({ name: 'secret_key', value: ai1wm_import.secret_key }).concat({ name: 'priority', value: 150 });

	// Set additional params
	if (options) {
		params = params.concat(Ai1wm.Util.list(options));
	}

	// Confirm
	$.ajax({
		url: ai1wm_import.ajax.url,
		type: 'POST',
		dataType: 'json',
		data: params,
		dataFilter: function dataFilter(data) {
			return Ai1wm.Util.json(data);
		}
	}).done(function () {
		self.getStatus();
	}).done(function (result) {
		if (result) {
			self.run(result);
		}
	}).fail(function (xhr) {
		var timeout = retries * 1000;

		try {
			var json = Ai1wm.Util.json(xhr.responseText);
			if (json) {
				var result = JSON.parse(json);
				var error = result.errors.pop();
				if (error.message) {
					self.stopImport(true);
					self.setStatus({
						type: 'error',
						title: ai1wm_locale.unable_to_import,
						message: error.message
					});
					return;
				}
			}
		} catch (e) {}

		if (retries >= 5) {
			self.stopImport(true);
			self.setStatus({
				type: 'error',
				title: ai1wm_locale.unable_to_import,
				message: ai1wm_locale.unable_to_confirm_the_import
			});
			return;
		}

		retries++;

		setTimeout(self.confirm.bind(self, options, retries), timeout);
	});
};

Import.prototype.checkDiskSpace = function (fileSize, callback) {
	this.diskSpaceCallback = callback;

	var diskSpaceFree = parseInt(ai1wm_disk_space.free, 10);
	var diskSpaceFactor = parseInt(ai1wm_disk_space.factor, 10);
	var diskSpaceExtra = parseInt(ai1wm_disk_space.extra, 10);

	if (diskSpaceFree >= 0) {
		var diskSpaceRequired = fileSize * diskSpaceFactor + diskSpaceExtra;
		if (diskSpaceRequired > diskSpaceFree) {
			this.setStatus({
				type: 'disk_space_confirm',
				message: ai1wm_locale.out_of_disk_space.replace('%s', Ai1wm.Util.sizeFormat(diskSpaceRequired - diskSpaceFree))
			});
			return;
		}
	}

	callback();
};

Import.prototype.blogs = function (options, retries) {
	var self = this;
	retries = retries || 0;

	// Stop running import
	if (this.isImportStopped()) {
		return;
	}

	// Set params
	var params = this.params.concat({ name: 'secret_key', value: ai1wm_import.secret_key }).concat({ name: 'priority', value: 150 });

	// Set additional params
	if (options) {
		params = params.concat(Ai1wm.Util.list(options));
	}

	// Blogs
	$.ajax({
		url: ai1wm_import.ajax.url,
		type: 'POST',
		dataType: 'json',
		data: params,
		dataFilter: function dataFilter(data) {
			return Ai1wm.Util.json(data);
		}
	}).done(function () {
		self.getStatus();
	}).done(function (result) {
		if (result) {
			self.run(result);
		}
	}).fail(function (xhr) {
		var timeout = retries * 1000;

		try {
			var json = Ai1wm.Util.json(xhr.responseText);
			if (json) {
				var result = JSON.parse(json);
				var error = result.errors.pop();
				if (error.message) {
					self.stopImport(true);
					self.setStatus({
						type: 'error',
						title: ai1wm_locale.unable_to_import,
						message: error.message
					});
					return;
				}
			}
		} catch (e) {}

		if (retries >= 5) {
			self.stopImport(true);
			self.setStatus({
				type: 'error',
				title: ai1wm_locale.unable_to_import,
				message: ai1wm_locale.unable_to_prepare_blogs_on_import
			});
			return;
		}

		retries++;

		setTimeout(self.blogs.bind(self, options, retries), timeout);
	});
};

Import.prototype.clean = function (options, retries) {
	var self = this;
	retries = retries || 0;

	// Reset stop flag
	if (retries === 0) {
		this.stopImport(true);
	}

	// Set initial status
	this.setStatus({ type: 'info', message: ai1wm_locale.please_wait_stopping_the_import });

	// Set params
	var params = this.params.concat({ name: 'secret_key', value: ai1wm_import.secret_key }).concat({ name: 'priority', value: 400 });

	// Set additional params
	if (options) {
		params = params.concat(Ai1wm.Util.list(options));
	}

	// Clean
	$.ajax({
		url: ai1wm_import.ajax.url,
		type: 'POST',
		dataType: 'json',
		data: params,
		dataFilter: function dataFilter(data) {
			return Ai1wm.Util.json(data);
		}
	}).done(function () {
		// Unbinding the beforeunload event when we stop importing
		$(window).unbind('beforeunload');

		// Destroy modal
		self.modal.destroy();
	}).fail(function (xhr) {
		var timeout = retries * 1000;

		try {
			var json = Ai1wm.Util.json(xhr.responseText);
			if (json) {
				var result = JSON.parse(json);
				var error = result.errors.pop();
				if (error.message) {
					self.stopImport(true);
					self.setStatus({
						type: 'error',
						title: ai1wm_locale.unable_to_import,
						message: error.message
					});
					return;
				}
			}
		} catch (e) {}

		if (retries >= 5) {
			self.stopImport(true);
			self.setStatus({
				type: 'error',
				title: ai1wm_locale.unable_to_import,
				message: ai1wm_locale.unable_to_stop_the_import
			});
			return;
		}

		retries++;

		setTimeout(self.clean.bind(self, options, retries), timeout);
	});
};

Import.prototype.getStatus = function () {
	var self = this;

	// Stop getting status
	if (this.isImportStopped()) {
		return;
	}

	this.statusXhr = $.ajax({
		url: ai1wm_import.status.url,
		type: 'GET',
		dataType: 'json',
		cache: false,
		dataFilter: function dataFilter(data) {
			return Ai1wm.Util.json(data);
		}
	}).done(function (params) {
		if (params) {
			self.setStatus(params);

			// Next status
			switch (params.type) {
				case 'done':
				case 'error':
					// Unbinding the beforeunload event when any case is performed
					$(window).unbind('beforeunload');
					return;

				case 'confirm':
				case 'disk_space_confirm':
				case 'blogs':
					return;
			}
		}

		// Import is not done yet, let's check status in 3 seconds
		setTimeout(self.getStatus.bind(self), 3000);
	}).fail(function () {
		// Import is not done yet, let's check status in 3 seconds
		setTimeout(self.getStatus.bind(self), 3000);
	});
};

Import.prototype.setStatus = function (params) {
	this.modal.render(params);
};

Import.prototype.onConfirm = function (options) {
	this.confirm(options);
};

Import.prototype.onBlogs = function (options) {
	this.blogs(options);
};

Import.prototype.onStop = function (options) {
	this.clean(options);
};

Import.prototype.onDiskSpaceConfirm = function (options) {
	this.diskSpaceCallback(options);
};

Import.prototype.stopImport = function (isStopped) {
	try {
		if (isStopped && this.statusXhr) {
			this.statusXhr.abort();
		}
	} finally {
		this.isStopped = isStopped;
	}
};

Import.prototype.isImportStopped = function () {
	return this.isStopped;
};

module.exports = Import;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (C) 2014-2020 ServMask Inc.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * ███████╗███████╗██████╗ ██╗   ██╗███╗   ███╗ █████╗ ███████╗██╗  ██╗
 * ██╔════╝██╔════╝██╔══██╗██║   ██║████╗ ████║██╔══██╗██╔════╝██║ ██╔╝
 * ███████╗█████╗  ██████╔╝██║   ██║██╔████╔██║███████║███████╗█████╔╝
 * ╚════██║██╔══╝  ██╔══██╗╚██╗ ██╔╝██║╚██╔╝██║██╔══██║╚════██║██╔═██╗
 * ███████║███████╗██║  ██║ ╚████╔╝ ██║ ╚═╝ ██║██║  ██║███████║██║  ██╗
 * ╚══════╝╚══════╝╚═╝  ╚═╝  ╚═══╝  ╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
 */

var $ = jQuery;

var Modal = function Modal() {
	var self = this;

	// Error Modal
	this.error = function (params) {
		// Create the modal container
		var container = $('<div></div>');

		// Create section to hold title, message and action
		var section = $('<section></section>');

		// Create header to hold title
		var header = $('<h1></h1>');

		// Create paragraph to hold mesage
		var message = $('<p></p>').html(params.message);

		// Create action section
		var action = $('<div></div>');

		// Create title
		var title = $('<span></span>').addClass('ai1wm-title-red').text(params.title);

		// Create close button
		var closeButton = $('<button type="button" class="ai1wm-button-red"></button>').on('click', function () {
			self.destroy();
		});

		// Append text to close button
		closeButton.append(ai1wm_locale.close_import);

		// Append close button to action
		action.append(closeButton);

		// Append title to section
		header.append(title);

		// Append header and message to section
		section.append(header).append(message);

		// Append section and action to container
		container.append(section).append(action);

		// Render modal
		self.modal.html(container).show();
		self.modal.focus();
		self.overlay.show();
	};

	// Progress Modal
	this.progress = function (params) {
		// Update progress bar meter
		if (this.progress.progressBarMeter) {
			this.progress.progressBarMeter.width(params.percent + '%');
		}

		// Update progress bar percent
		if (this.progress.progressBarPercent) {
			this.progress.progressBarPercent.text(params.percent + '%');
			return;
		}

		// Create the modal container
		var container = $('<div></div>');

		// Create section to hold title, message and action
		var section = $('<section></section>');

		// Create header to hold progress bar
		var header = $('<h1></h1>');

		// Create action section
		var action = $('<div></div>');

		// Create progress bar
		var progressBar = $('<span class="ai1wm-progress-bar"></span>');

		// Create progress bar meter
		this.progress.progressBarMeter = $('<span class="ai1wm-progress-bar-meter"></span>').width(params.percent + '%');

		// Create progress bar percent
		this.progress.progressBarPercent = $('<span class="ai1wm-progress-bar-percent"></span>').text(params.percent + '%');

		// Create stop import
		var stopButton = $('<button type="button" class="ai1wm-button-red"></button>').on('click', function () {
			stopButton.attr('disabled', 'disabled');
			self.onStop();
		});

		// Append text to stop button
		stopButton.append('<i class="ai1wm-icon-notification"></i> ' + ai1wm_locale.stop_import);

		// Append progress meter and progress percent
		progressBar.append(this.progress.progressBarMeter).append(this.progress.progressBarPercent);

		// Append stop button to action
		action.append(stopButton);

		// Append progress bar to section
		header.append(progressBar);

		// Append header to section
		section.append(header);

		// Append section and action to container
		container.append(section).append(action);

		// Render modal
		self.modal.html(container).show();
		self.modal.focus();
		self.overlay.show();
	};

	// Pro Modal
	this.pro = function (params) {
		// Create the modal container
		var container = $('<div></div>');

		// Create section to hold title, message and action
		var section = $('<section></section>');

		// Create header to hold warning
		var header = $('<h1></h1>');

		// Create paragraph to hold mesage
		var message = $('<p class="ai1wm-import-modal-content"></p>').html(params.message);

		// Create action section
		var action = $('<div></div>');

		// Create warning
		var warning = $('<i class="ai1wm-icon-notification"></i>');

		// Create close button
		var closeButton = $('<button type="button" class="ai1wm-button-gray"></button>').on('click', function () {
			self.destroy();
		});

		// Append text to close button
		closeButton.append(ai1wm_locale.close_import);

		// Append close button to action
		action.append(closeButton);

		// Append warning to section
		header.append(warning);

		// Append header and message to section
		section.append(header).append(message);

		// Append section and action to container
		container.append(section).append(action);

		// Render modal
		self.modal.html(container).show();
		self.modal.focus();
		self.overlay.show();
	};

	// Confirm Modal
	this.confirm = function (params) {
		// Create the modal container
		var container = $('<div></div>');

		// Create section to hold title, message and action
		var section = $('<section></section>');

		// Create header to hold warning
		var header = $('<h1></h1>');

		// Create paragraph to hold mesage
		var message = $('<p class="ai1wm-import-modal-content"></p>').html(params.message);

		// Create action section
		var action = $('<div class="ai1wm-import-modal-actions"></div>');

		// Create warning
		var warning = $('<i class="ai1wm-icon-notification"></i>');

		// Create close button
		var closeButton = $('<button type="button" class="ai1wm-button-gray"></button>').on('click', function () {
			closeButton.attr('disabled', 'disabled');
			self.onStop();
		});

		// Create confirm button
		var confirmButton = $('<button type="button" class="ai1wm-button-green"></button>').on('click', function () {
			confirmButton.attr('disabled', 'disabled');
			self.onConfirm();
		});

		// Append text to close button
		closeButton.append(ai1wm_locale.close_import);

		// Append text to confirm button
		confirmButton.append(ai1wm_locale.confirm_import + ' &gt;');

		// Append close button to action
		action.append(closeButton);

		// Append confirm button to action
		action.append(confirmButton);

		// Append warning to section
		header.append(warning);

		// Append header and message to section
		section.append(header).append(message);

		// Append section and action to container
		container.append(section).append(action);

		// Render modal
		self.modal.html(container).show();
		self.modal.focus();
		self.overlay.show();
	};

	// Disk space Confirm Modal
	this.diskSpaceConfirm = function (params) {
		// Create the modal container
		var container = $('<div></div>');

		// Create section to hold title, message and action
		var section = $('<section></section>');

		// Create header to hold warning
		var header = $('<h1></h1>');

		// Create paragraph to hold mesage
		var message = $('<p class="ai1wm-import-modal-content"></p>').html(params.message);

		// Create action section
		var action = $('<div class="ai1wm-import-modal-actions"></div>');

		// Create warning
		var warning = $('<i class="ai1wm-icon-notification"></i>');

		// Create close button
		var closeButton = $('<button type="button" class="ai1wm-button-gray"></button>').on('click', function () {
			self.destroy();
		});

		// Create confirm button
		var confirmButton = $('<button type="button" class="ai1wm-button-green"></button>').on('click', function () {
			$(this).attr('disabled', 'disabled');
			self.onDiskSpaceConfirm();
		});

		// Append text to close button
		closeButton.append(ai1wm_locale.close_import);

		// Append text to confirm button
		confirmButton.append(ai1wm_locale.confirm_disk_space);

		// Append close button to action
		action.append(closeButton);

		// Append confirm button to action
		action.append(confirmButton);

		// Append warning to section
		header.append(warning);

		// Append header and message to section
		section.append(header).append(message);

		// Append section and action to container
		container.append(section).append(action);

		// Render modal
		self.modal.html(container).show();
		self.modal.focus();
		self.overlay.show();
	};

	// Blogs Modal
	this.blogs = function (params) {
		// Create the modal container
		var container = $('<form></form>').on('submit', function (e) {
			e.preventDefault();
			continueButton.attr('disabled', 'disabled');
			self.onBlogs(container.serializeArray());
		});

		// Create section to hold title, message and action
		var section = $('<section></section>');

		// Create header to hold title
		var header = $('<h1></h1>');

		// Create paragraph to hold mesage
		var message = $('<p></p>').html(params.message);

		// Create action section
		var action = $('<div></div>');

		// Create title
		var title = $('<span></span>').addClass('ai1wm-title-grey').text(params.title);

		// Create continue button
		var continueButton = $('<button type="submit" class="ai1wm-button-green"></button>');

		// Append text to continue button
		continueButton.append(ai1wm_locale.continue_import);

		// Append continue button to action
		action.append(continueButton);

		// Append title to section
		header.append(title);

		// Append header and message to section
		section.append(header).append(message);

		// Append section and action to container
		container.append(section).append(action);

		// Render modal
		self.modal.html(container).show();
		self.modal.focus();
		self.overlay.show();
	};

	// Info Modal
	this.info = function (params) {
		// Create the modal container
		var container = $('<div></div>');

		// Create section to hold title, message and action
		var section = $('<section></section>');

		// Create header to hold loader
		var header = $('<h1></h1>');

		// Create paragraph to hold mesage
		var message = $('<p></p>').html(params.message);

		// Create action section
		var action = $('<div></div>');

		// Create loader
		var loader = $('<span class="ai1wm-loader"></span>');

		// Create warning
		var warning = $('<p></p>').html(ai1wm_locale.please_do_not_close_this_browser);

		// Create notice to be displayed during import process
		var notice = $('<div class="ai1wm-import-modal-notice"></div>');

		// Append warning to notice
		notice.append(warning);

		// Append stop button to action
		action.append(notice);

		// Append loader to header
		header.append(loader);

		// Append header and message to section
		section.append(header).append(message);

		// Append section and action to container
		container.append(section).append(action);

		// Render modal
		self.modal.html(container).show();
		self.modal.focus();
		self.overlay.show();
	};

	// Done Modal
	this.done = function (params) {
		// Create the modal container
		var container = $('<div></div>');

		// Create section to hold title, message and action
		var section = $('<section></section>');

		// Create header to hold title
		var header = $('<h1></h1>');

		// Create paragraph to hold mesage
		var message = $('<p class="ai1wm-import-modal-content-done"></p>').html(params.message);

		// Create action section
		var action = $('<div class="ai1wm-import-modal-actions"></div>');

		// Create title
		var title = $('<span></span>').addClass('ai1wm-title-green').text(params.title);

		// Create close button
		var closeButton = $('<button type="button" class="ai1wm-button-green"></button>').on('click', function () {
			self.destroy();
		});

		// Append text to close button
		closeButton.append(ai1wm_locale.finish_import + ' &gt;');

		// Append close button to action
		action.append(closeButton);

		// Append title to section
		header.append(title);

		// Append header and message to section
		section.append(header).append(message);

		// Append section and action to container
		container.append(section).append(action);

		// Render modal
		self.modal.html(container).show();
		self.modal.focus();
		self.overlay.show();
	};

	// Create the overlay
	this.overlay = $('<div class="ai1wm-overlay"></div>');

	// Create the modal container
	this.modal = $('<div class="ai1wm-modal-container" role="dialog" tabindex="-1"></div>');

	$('body').append(this.overlay) // Append overlay to body
	.append(this.modal); // Append modal to body
};

Modal.prototype.render = function (params) {
	$(document).trigger('ai1wm-import-status', params);

	// Show modal
	switch (params.type) {
		case 'pro':
			this.pro(params);
			break;

		case 'error':
			this.error(params);
			break;

		case 'confirm':
			this.confirm(params);
			break;

		case 'disk_space_confirm':
			this.diskSpaceConfirm(params);
			break;

		case 'blogs':
			this.blogs(params);
			break;

		case 'progress':
			this.progress(params);
			break;

		case 'info':
			this.info(params);
			break;

		case 'done':
			this.done(params);
			break;
	}
};

Modal.prototype.destroy = function () {
	this.modal.hide();
	this.overlay.hide();
};

module.exports = Modal;

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/**
 * Copyright (C) 2014-2020 ServMask Inc.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * ███████╗███████╗██████╗ ██╗   ██╗███╗   ███╗ █████╗ ███████╗██╗  ██╗
 * ██╔════╝██╔════╝██╔══██╗██║   ██║████╗ ████║██╔══██╗██╔════╝██║ ██╔╝
 * ███████╗█████╗  ██████╔╝██║   ██║██╔████╔██║███████║███████╗█████╔╝
 * ╚════██║██╔══╝  ██╔══██╗╚██╗ ██╔╝██║╚██╔╝██║██╔══██║╚════██║██╔═██╗
 * ███████║███████╗██║  ██║ ╚████╔╝ ██║ ╚═╝ ██║██║  ██║███████║██║  ██╗
 * ╚══════╝╚══════╝╚═╝  ╚═╝  ╚═══╝  ╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
 */

var FileUploader = __webpack_require__(13),
    Feedback = __webpack_require__(1),
    Report = __webpack_require__(2),
    Import = __webpack_require__(3);

jQuery(document).ready(function ($) {
  'use strict';

  var uploader = void 0;
  if (Ai1wm.MultisiteExtensionUploader) {
    uploader = new Ai1wm.MultisiteExtensionUploader();
  } else if (Ai1wm.UnlimitedExtensionUploader) {
    uploader = new Ai1wm.UnlimitedExtensionUploader();
  } else if (Ai1wm.FileExtensionUploader) {
    uploader = new Ai1wm.FileExtensionUploader();
  } else {
    uploader = new Ai1wm.FileUploader();
  }

  uploader.init();

  // Expands/Collapses Import from
  $('.ai1wm-expandable > div.ai1wm-button-main').on('click', function () {
    $(this).parent().toggleClass('ai1wm-open');
  });
});

global.Ai1wm = jQuery.extend({}, global.Ai1wm, { FileUploader: FileUploader, Feedback: Feedback, Report: Report, Import: Import });
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (C) 2014-2020 ServMask Inc.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * ███████╗███████╗██████╗ ██╗   ██╗███╗   ███╗ █████╗ ███████╗██╗  ██╗
 * ██╔════╝██╔════╝██╔══██╗██║   ██║████╗ ████║██╔══██╗██╔════╝██║ ██╔╝
 * ███████╗█████╗  ██████╔╝██║   ██║██╔████╔██║███████║███████╗█████╔╝
 * ╚════██║██╔══╝  ██╔══██╗╚██╗ ██╔╝██║╚██╔╝██║██╔══██║╚════██║██╔═██╗
 * ███████║███████╗██║  ██║ ╚████╔╝ ██║ ╚═╝ ██║██║  ██║███████║██║  ██╗
 * ╚══════╝╚══════╝╚═╝  ╚═╝  ╚═══╝  ╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
 */

var Import = __webpack_require__(3),
    $ = jQuery;

var FileUploader = function FileUploader() {};

FileUploader.prototype.setDefaultValues = function () {
	this.model = new Import();
	this.stopUpload = false;
};

FileUploader.prototype.init = function () {
	var _this = this;

	var formElement = $('#ai1wm-import-form');
	var selectElement = $('#ai1wm-import-file');
	var dropElement = $('#ai1wm-drag-drop-area');

	selectElement.on('change', function (e) {
		_this.setDefaultValues();

		var file = e.target.files.item(0);
		if (file) {
			_this.fileSize = file.size;
			if (_this.fileSize > ai1wm_uploader.max_file_size) {
				_this.model.setStatus({ type: 'pro', message: ai1wm_locale.import_from_file });
			} else {
				_this.model.checkDiskSpace(_this.fileSize, function () {
					try {
						_this.onFilesAdded(file);
						_this.onBeforeUpload(file);
						_this.upload(file);
					} catch (error) {
						_this.onError(error);
					}
				});
			}
		}

		formElement.trigger('reset');
		e.preventDefault();
	});

	dropElement.on('dragenter', function (e) {
		dropElement.addClass('ai1wm-drag-over');
		e.preventDefault();
	});

	dropElement.on('dragover', function (e) {
		dropElement.addClass('ai1wm-drag-over');
		e.preventDefault();
	});

	dropElement.on('dragleave', function (e) {
		dropElement.removeClass('ai1wm-drag-over');
		e.preventDefault();
	});

	dropElement.on('drop', function (e) {
		_this.setDefaultValues();
		dropElement.removeClass('ai1wm-drag-over');

		var file = e.originalEvent.dataTransfer.files.item(0);
		if (file) {
			_this.fileSize = file.size;
			if (_this.fileSize > ai1wm_uploader.max_file_size) {
				_this.model.setStatus({ type: 'pro', message: ai1wm_locale.import_from_file });
			} else {
				_this.model.checkDiskSpace(_this.fileSize, function () {
					try {
						_this.onFilesAdded(file);
						_this.onBeforeUpload(file);
						_this.upload(file);
					} catch (error) {
						_this.onError(error);
					}
				});
			}
		}

		formElement.trigger('reset');
		e.preventDefault();
	});
};

// Check extension
FileUploader.prototype.c1 = function (file) {
	if (file.name.substr(-6) !== 'wpress') {
		throw new Error(ai1wm_locale.invalid_archive_extension);
	}
};

// Check compatibility
FileUploader.prototype.c3 = function () {
	if (ai1wm_compatibility.messages.length > 0) {
		throw new Error(ai1wm_compatibility.messages.join());
	}
};

FileUploader.prototype.onFilesAdded = function (file) {
	this.c1(file);
	this.c3(file);

	// Initializing beforeunload event
	$(window).bind('beforeunload', function () {
		return ai1wm_locale.stop_importing_your_website;
	});
};

FileUploader.prototype.onBeforeUpload = function (file) {
	var self = this;

	var storage = Ai1wm.Util.random(12);
	var options = Ai1wm.Util.form('#ai1wm-import-form').concat({ name: 'storage', value: storage }).concat({ name: 'archive', value: file.name }).concat({ name: 'file', value: 1 });

	// Set global params
	this.model.setParams(options);

	// Set multipart params
	$.extend(ai1wm_uploader.params, {
		storage: storage,
		archive: file.name
	});

	// Set stop
	this.model.onStop = function () {
		self.stopUpload = true;

		// Clean storage
		self.model.clean();
	};

	// Set status
	this.model.setStatus({ type: 'progress', percent: '0.00' });
};

FileUploader.prototype.upload = function (file) {
	var self = this;

	var formData = new FormData();
	formData.append('upload-file', file);
	for (var name in ai1wm_uploader.params) {
		formData.append(name, ai1wm_uploader.params[name]);
	}

	$.ajax({
		url: ai1wm_uploader.url,
		type: 'POST',
		data: formData,
		cache: false,
		contentType: false,
		processData: false,
		xhr: function xhr() {
			var handle = $.ajaxSettings.xhr();
			if (handle.upload) {
				handle.upload.addEventListener('progress', function (event) {
					var percent = event.loaded / event.total * 100;
					self.model.setStatus({ type: 'progress', percent: percent.toFixed(2) });
				});
			}

			return handle;
		},
		success: function success() {
			if (self.stopUpload) {
				return;
			}

			self.onFileUploaded();
		},
		error: function error(jqXHR, textStatus) {
			throw new Error(textStatus);
		}
	});
};

FileUploader.prototype.onUploadProgress = function (percent) {
	this.model.setStatus({ type: 'progress', percent: percent });
};

FileUploader.prototype.onFileUploaded = function () {
	this.model.start();
};

FileUploader.prototype.onError = function (error) {
	this.model.setStatus({ type: 'error', title: ai1wm_locale.unable_to_import, message: error.message });
};

module.exports = FileUploader;

/***/ })
/******/ ]);