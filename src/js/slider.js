$(document)
	.ready(function() {
		$('.slider')
			.each(function() { // For every slider
				var $this = $(this); // Current slider
				var $group = $this.find('.slider__group'); // Get the slide-group (container)
				var $slides = $this.find('.slider__slide'); // Create jQuery object to hold all slides
				var buttonArray = []; // Create array to hold navigation buttons
				var currentIndex = 0; // Hold index number of the current slide
				var timeout; // Sets gap between auto-sliding

				function move(newIndex) { // Creates the slide from old to new one
					var animateLeft, slideLeft; // Declare variables

					advance(); // When slide moves, call advance() again

					// If it is the current slide is animating or showing do nothing
					if ($group.is(':animated') || currentIndex === newIndex) {
						return;
					}

					buttonArray[currentIndex].removeClass('button--active'); // Remove class from item
					buttonArray[newIndex].addClass('button--active'); // Add class to new item

					if (newIndex > currentIndex) { // If new item > current
						slideLeft = '100%'; // Sit the new slide to the right
						animateLeft = '-100%'; // Animate the current group to the left
					} else { // Otherwise
						slideLeft = '-100%'; // Sit the new slide to the left
						animateLeft = '100%'; // Animate the current group to the right
					}
					// Position new slide to left (if less) or right (if more) of current
					$slides.eq(newIndex)
						.css({ left: slideLeft, display: 'block' });

					$group.animate({ left: animateLeft }, function() { // Animate slides and
						$slides.eq(currentIndex)
							.css({ display: 'none' }); // Hide previous slide
						$slides.eq(newIndex)
							.css({ left: 0 }); // Set position of the new item
						$group.css({ left: 0 }); // Set position of group of slides
						currentIndex = newIndex; // Set currentIndex to the new image
					});
				}

				function advance() { // Used to set
					clearTimeout(timeout); // Clear previous timeout
					timeout = setTimeout(function() { // Set new timer
						if (currentIndex < ($slides.length - 1)) { // If slide < total slides
							move(currentIndex + 1); // Move to next slide
						} else { // Otherwise
							move(0); // Move to the first slide
						}
					}, 4000); // Milliseconds timer will wait
				}

				$.each($slides, function(index) {
					// Create a button element for the button
					var $button = $('<button type="button" class="slider__button"></button>');
					if (index === currentIndex) { // If index is the current item
						$button.addClass('button--active'); // Add the active class
					}
					$button.on('click', function() { // Create event handler for the button
							move(index); // It calls the move() function
						})
						.appendTo('.slider__buttons'); // Add to the buttons holder
					buttonArray.push($button); // Add it to the button array
				});

				advance(); // Script is set up, advance() to move it

			});
	});
