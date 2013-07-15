AUI().use(
  'aui-base',
  'aui-delayed-task',
  function(A) {
    var exampleNode = A.one('#myDelayedTask');

    var mouseoverTask = new A.DelayedTask(
      function() {
        this.addClass('aui-myDelayedTask-hover');
      },
      exampleNode
    );

    var mouseoutTask = new A.DelayedTask(
      function() {
        this.removeClass('aui-myDelayedTask-hover');
      },
      exampleNode
    );

    exampleNode.on(
      'mouseover',
      function(event) {
        mouseoutTask.cancel();
        mouseoverTask.delay();
      }
    );

    exampleNode.on(
      'mouseout',
      function(event) {
        mouseoverTask.cancel();
        mouseoutTask.delay(1000);
      }
    );
  }
);