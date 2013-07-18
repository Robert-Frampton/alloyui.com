AUI().use(
  'aui-editable',
  function(A) {
    new A.Editable(
      {
        inputType: 'textarea',
        node: '#editor'
      }
    );
  }
);