AUI().use(
  'aui-base',
  'aui-debounce',
  function(A) {
    var example = A.one('#example');
    var exampleInput = A.one('#exampleInput');
    var exampleKeypressCountNode = example.one('.keypress span');
    var exampleDebouncedCountNode = example.one('.debounce span');

    var exampleKeypressCount = 0;
    var exampleDebouncedCount = 0;

    exampleInput.on('keypress', function(event) {
      exampleKeypressCountNode.text(++exampleKeypressCount);
    });

    exampleInput.on('keypress', A.debounce(
      function(event) {
        exampleDebouncedCountNode.text(++exampleDebouncedCount);
      },
      500
     )
    );
  }
);