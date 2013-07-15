AUI().use(
  'aui-base',
  'aui-delayed-task',
  function(A) {
    var inputNode = A.get('#longNumber');
    var symbol = A.Node.create('<span class="aui-button aui-button-content aui-icon-button aui-helper-hidden"><span class="aui-icon"></span></span>');

    inputNode.get('parentNode').insertBefore(symbol, inputNode.get('nextSibling'));

    var hideSymbolTask = new A.DelayedTask(
      function() {
        symbol.addClass('aui-helper-hidden');
      }
    );

    var validationTask = new A.DelayedTask(
      function() {
        var value = A.Lang.trim(this.get('value'));

        if (value.length) {
          var childIcon = symbol.get('firstChild');

          symbol.removeClass('aui-helper-hidden');

          if (/^[0-9]+$/.test(value)) {
            childIcon.removeClass('aui-icon-alert');
            childIcon.addClass('aui-icon-circle-check');
          }
          else {
            childIcon.addClass('aui-icon-alert');
            childIcon.removeClass('aui-icon-circle-check');
          }

          hideSymbolTask.delay(1000);
        }
        else {
          hideSymbolTask.cancel();
        }
      },
      inputNode
    );

    inputNode.on(
      'keypress',
      function(event) {
        validationTask.delay(500, null, null, [event]);
      }
    );
  }
);