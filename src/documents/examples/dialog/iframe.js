AUI().use(
  'aui-dialog',
  'aui-dialog-iframe',
  function(A) {
    window.myDialog = new A.Dialog(
      {
        centered: true,
        height: 600,
        title: 'Liferay\'s Website',
        width: 640
      }
    ).plug(
      A.Plugin.DialogIframe,
      {
        uri: 'http://liferay.com'
      }
    ).render();
  }
);