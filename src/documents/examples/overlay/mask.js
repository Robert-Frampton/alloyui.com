AUI().ready(
	'aui-overlay-mask',
	function(A) {

	var overlayMask = new A.OverlayMask().render();

	var message = A.Node.create('<h3 class="message">CLICK ON ME TO HIDE THIS PANEL</h3>');

	message.on('click',
		function(event) {
			overlayMask.hide();
			message.remove();
		}
	)

	var showMessage = function() {
		message.appendTo(document.body);
	};
	// Extras
	var setTarget = function(elem) {
		overlayMask.set('target', elem).show();

		if (elem == document) {
			showMessage();
		}
	};

	A.on('click', A.bind(setTarget, null, document), '#showOn-document');
	A.on('click', A.bind(setTarget, null, '#element1'), '#showOn-red');
	A.on('click', A.bind(setTarget, null, '#element2'), '#showOn-blue');
	A.on('click', A.bind(setTarget, null, '#element3'), '#showOn-green');
	}
);