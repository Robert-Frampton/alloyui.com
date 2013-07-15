AUI().use(
	'aui-calendar',
	function(A) {
		new A.Calendar(
			{
				allowNone: true,
				allowToday: true,
				boundingBox: '#myCalendar'
			}
		).render();
	}
);

