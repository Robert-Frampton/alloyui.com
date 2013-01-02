---
layout: single-doc
title: Image Viewer
tags: 'image-viewer'
---

# Image Viewer

The image viewer allows the user to view and cycle through a gallery of images.

#### Getting Started

First load the seed file, if you haven't yet.

``` html
<script src="<%= @cdn %>"></script>
```

Then initialize AlloyUI and load the Image Viewer module.

``` javascript
AUI().use('image-viewer', function(A) {
  // code goes here
});
```

---

#### Using Image Viewer

First create a div containing links to the images being used, and optional thumbnails if desired.

``` html
<div id="gallery">
	<a href="pic-1.jpg" title="caption-1">
		<img src="thumbnail-1.jpg" />
	</a>
	<a href="pic-2.jpg" title="caption-2">
		<img src="thumbnail-2.jpg" />
	</a>
	<a href="pic-3.jpg" title="caption-3">
		<img src="thumbnail-3.jpg" />
	</a>
	<a href="pic-4.jpg" title="caption-4">
		<img src="thumbnail-4.jpg" />
	</a>
</div>
```

Now we use these links to create a new instance of Image Viewer.

``` javascript
AUI().use('image-viewer', function(A) {
  var imageViewer = new A.ImageViewer({
    links: '#gallery a',
    captionFromTitle: true,
  })
});
```

---

#### Configuring Image Viewer

There are a number of options that can be passed into the Image Viewer changing appearence and functionality.

``` javascript
AUI().ready('aui-image-viewer-base', function(A) {

  var imageViewer = new A.ImageViewer({
    links: '#gallery1 a',
    caption: 'Default caption',
    captionFromTitle: true,
    preloadAllImages: true,
    // preloadNeighborImages: true,
    showInfo: true,
    lockScroll: true,
    infoTemplate: 'Image number {current} of {total}, modified text.',
    // showArrows: false,
    // showClose: false,
    // modal: false,
    modal: {
      background: 'lightblue',
      opacity: .4
    }
  })
  .render();

});
```

---


#### Media

Video can also be implemented with the aui media viewer plugin.

``` html
<div id="gallery">
  <a href="http://www.youtube.com/watch?v=dZn_VBgkPNY" title="Yo-Yo Ma plays Bach">
    <img alt="Yo-Yo Ma plays Bach" src="youtube-thumbnail.png">
  </a>
  <a href="http://vimeo.com/22439234" title="The Mountain (Vimeo movie)">
    <img alt="The Mountain (Vimeo movie)" src="vimeo-thumbnail.png">
  </a>
</div>
```

```javascript
AUI().ready('aui-image-viewer', 'aui-media-viewer-plugin', function(A) {

  var mediaViewer = new A.ImageViewer({
    links: '#gallery a',
    plugins: [
      {
        fn: A.MediaViewerPlugin
      }
    ]
  });

  mediaViewer.render();
});
```