AUI().ready('aui-image-viewer', 'aui-media-viewer-plugin', function(A) {

  var mediaViewer = new A.ImageViewer({
    links: '#gallery a',
    plugins: [
      {
        // Daily Motion
        cfg: {
          'providers.dailymotion': {
            container: '<iframe frameborder="0" width="{width}" height="{height}" src="http://www.dailymotion.com/embed/video/{media}"></iframe>',
            matcher: new RegExp(
              A.Lang.sub(
                A.MediaViewerPlugin.REGEX_DOMAIN,
                {
                  domain: 'dailymotion.com'
                }
              ),
              'i'
            ),
            options: A.MediaViewerPlugin.DEFAULT_OPTIONS,
            mediaRegex: /\/video\/([^&#_]*)/i
          }
        },
        fn: A.MediaViewerPlugin
      }
    ],
    preloadNeighborImages: true
  });

  mediaViewer.render();
});