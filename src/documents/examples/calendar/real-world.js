AUI().use(
	'aui-calendar', 
	function(A) {
		new A.Calendar(
			{
				boundingBox: '#myCalendar',
				firstDayOfWeek: 1,
				showOtherMonth: false,
				srcNode: '#myCalendar .aui-calendar-content'
			}
		).render();
	}
);