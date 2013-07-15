AUI().use(
  'aui-resize',
  function(A) {
    new A.Resize(
      {
      	handles: 'b, br, r',
      	node: "#resize",
        proxy: true
      }
    ).render();
  }
);