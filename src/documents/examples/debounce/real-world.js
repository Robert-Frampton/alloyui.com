AUI().use(
  'aui-base',
  'aui-debounce',
  function(A) {
    var exampleNode = A.one('#example');

    var focusFn = A.debounce(
      function(event) {
        exampleNode.addClass('aui-demo-hover');
      }
    );

    var blurFn = A.debounce(
      function(event) {
        exampleNode.removeClass('aui-demo-hover', exampleNode.get('className'));
      },
      1000
    );

    exampleNode.on('mouseover',
      function(event) {
        blurFn.cancel();
        focusFn(event);
      }
    );

    exampleNode.on('mouseout',
      function(event) {
        focusFn.cancel();
        blurFn.delay(1000);
      }
    );
  }
);