function slidejs (obj) {

	var INDEX = obj.index; // amount of image. start with 0;
	var PATH = obj.path; //image url
	var EXTENSION = obj.extension || '.jpg'; //image extension
	var SLIDE0 = obj.slide0 || '#slide0'; //dom 0
	var SLIDE1 = obj.slide1 || '#slide1'; //dom 1
	var WIDTH = obj.width || 'auto';
	var HEIGHT = obj.height || 'auto';
	var TIME = obj.time || 800; //duration of slide
	var DURATION = obj.duration || 6000

	var CURRENT = 1; // current image in display.
	var STATUS = 0; // help to determin fade or unfade.

	function nextImage () {
		CURRENT = (CURRENT === INDEX ? 0 : CURRENT + 1);
		return PATH + CURRENT + EXTENSION;
	}

	$(window).load(function () {

		$(SLIDE0 + ',' + SLIDE1).css({
			'position': 'absolute',
			'width': WIDTH,
			'height': HEIGHT
		})
		.parent()
		.css({
			'position': 'relative'
		})

		setInterval(function () {

			if (STATUS === 0) {

				STATUS = STATUS + 1;

				$(SLIDE0).fadeTo(TIME, 0, function () {
					$(this).attr('src', nextImage());	
				});

			} else {

				STATUS = STATUS - 1;

				$(SLIDE0).fadeTo(TIME, 1, function () {
					$(SLIDE1).attr('src', nextImage());
				});

			}

		}, DURATION);
	})
}