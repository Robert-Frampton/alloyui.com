AUI().use(
  'aui-resize',
  function(A) {
   var resize = new A.Resize(
    {
      node: '#resize',
      proxy: true
    }
  );

    resize.plug(A.Plugin.ResizeConstrained, {
      constrain: '#parent',
      minHeight: 25,
      minWidth: 70,
      preserveRatio: true
      }
    ).render();
  }
);