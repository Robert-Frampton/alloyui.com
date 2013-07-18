AUI().ready(
	'aui-loading-mask',
	function(A) {
		A.one('#wrapper').prepend('<div class="actions"><a href="javascript:;" id="toggleMask">Toggle Mask</a></div>');

		window.overlay = new A.OverlayBase(
			{
				contentBox: '#exampleText',
				srcNode: '#exampleArea',
				width: 300,
				align: {
					node: '#toggleMask',
					points: ['tl', 'bl']
				}
			}
		)
		.plug(
			A.LoadingMask,
			{
				background: '#000'
			}
		).render();

		A.one('#toggleMask').on('click', overlay.loadingmask.toggle, overlay.loadingmask);
	}
);