function slidejs (obj) {

	var INDEX = obj.index; // amount of image. start with 0;
	var PATH = obj.path; //image url
	var EXTENSION = obj.extension || '.jpg'; //image extension
	var SLIDE0 = obj.slide0 || '#slide0'; //dom 0
	var SLIDE1 = obj.slide1 || '#slide1'; //dom 1
	var TIME = obj.time || 800; //duration of slide

	var CURRENT = 1; // current image in display.
	var STATUS = 0; // help to determin fade or unfade.

	function nextImage () {
		CURRENT = (CURRENT === INDEX ? 0 : CURRENT + 1);
		return PATH + CURRENT + EXTENSION;
	}

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

	}, 6000);

}