function slidejs (obj) {

	'use strict';

	//configuration variable
	var INDEX = obj.index; // amount of image. start with 0;
	var PATH = obj.path; //image url
	var EXTENSION = obj.extension || '.jpg'; //image extension
	var SLIDE0 = obj.slide0 || '#slide0'; //dom 0
	var SLIDE1 = obj.slide1 || '#slide1'; //dom 1
	var WIDTH = obj.width || 'auto';
	var HEIGHT = obj.height || 'auto';
	var TIME = obj.time || 800; //animating time of each slide
	var DURATION = obj.duration || 6000; //presenting time of each slide
	var REVERSE = obj.reverse || false;

	var CURRENT = (REVERSE === true ? INDEX : 0); // current image in display.
	var STATUS = 0; // help to determin fade or unfade.

	//initialize css
	function cssFix () {
		$(SLIDE0 + ',' + SLIDE1).css({
			'position': 'absolute',
			'width': WIDTH,
			'height': HEIGHT
		})
		.parent()
		.css({
			'position': 'relative',
			'width': WIDTH,
			'height': HEIGHT
		});
	}

	//setting up initial image to dom
	function domFix () {
		var slide1Image = (REVERSE === true ? INDEX - 1 : 1);
		var slide0Image = (REVERSE === true ? INDEX : 0);

		$(SLIDE1).attr('src', PATH + slide1Image + EXTENSION);
		$(SLIDE0).attr('src', PATH + slide0Image + EXTENSION);
	}

	function advanceImage () {

		function nextImage () {
			CURRENT = (CURRENT === INDEX ? 0 : CURRENT + 1);
			return PATH + CURRENT + EXTENSION;
		}

		function nextImageReverse () {
			CURRENT = (CURRENT === 0 ? INDEX : CURRENT - 1);
			return PATH + CURRENT + EXTENSION;
		}

		if (REVERSE === true) {
			return nextImageReverse();
		} else {
			return nextImage();
		}
	}

	//initialize function
	(function () {
		cssFix();
		domFix();
	})();

	$(window).load(function () {

		setInterval(function () {

			if (STATUS === 0) {

				STATUS = STATUS + 1;

				$(SLIDE0).fadeTo(TIME, 0, function () {
					$(this).attr('src', advanceImage());	
				});

			} else {

				STATUS = STATUS - 1;

				$(SLIDE0).fadeTo(TIME, 1, function () {
					$(SLIDE1).attr('src', advanceImage());
				});

			}

		}, DURATION);
	});
}