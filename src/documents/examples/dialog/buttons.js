AUI().use(
	'aui-dialog',
	function(A) {
		var myButtons = [
			{
				text: 'Change title',
				handler: function() {
					this.set('New dialog title', 'title');
				}
			},
			{
				text: 'Change body',
				handler: function() {
					this.set('bodyContent', 'New body content');
				}
			},
		];

		new A.Dialog(
			{
				bodyContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
				buttons: myButtons,
				centered: true,
				title: 'Dialog title'
			}
		).render();
	}
);