AUI().ready(
  'aui-image-viewer-gallery',
  function(A) {
    new A.ImageGallery(
      {
        caption: 'Liferay Champion Soccer',
        delay: 2000,
        links: '#myGallery a',
        pagination: {
          total: 5
        }
      }
    ).render();
  }
);