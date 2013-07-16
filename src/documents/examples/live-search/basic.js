AUI().use(
  'aui-live-search',
  function(A) {
    var liveSearch = new A.LiveSearch(
      {
        input: '#query1',
        nodes: '#search1 .entry'
      }
    ).render();
  }
);