AUI().ready(
  'aui-editable',
  function(A) {
    var styled = document.getElementById('editor1');
    new A.Editable(
      {
        node: '#editor1'
      }
    );
    var styler = new A.Editable(
      {
        after: {
          save: function(){
            changeStyle();
          }
        },
        inputType: 'textarea',
        node: '#editor2'
      }
    );
    var changeStyle = function(){
      var text = styler.get('contentText');
      styled.setAttribute('style', text);
      styled.style.cssText = text;
    }
    changeStyle();
  }
);