AUI().ready(
  'aui-live-search',
  function(A) {
    var liveSearch = new A.LiveSearch(
      {
        input: '#query1',
        nodes: '#search1 .entry',
        data: function(node) {
          return node.html();
        },
        // This attribute defines what happens to entries that are to be shown.
        show: function(node) {
          // Can exclude nodes from search.
          if (!node.hasClass('excluded'))
          {
            var data = node._OLD_DATA;
            // Save the initial state of the html document
            if (!data)
            {
              data = node.html();
              node._OLD_DATA = data;
            }
            // Get the value of the search
            var search = this.get('searchValue');
            // Embolden queried words (case insensitive)
            if (search)
            {
              data = data.replace(new RegExp(search, 'gi'), '<b>' + search + '</b>');
            }
            // Update the node with the emboldened words
            node.html(data);
            node.show();
            node.setAttribute('nodeStatus', 'show');
            node.addClass('matched');
          }
          return node;
        },
        // This attribute defines what happens to entries that are to be hidden.
        hide: function(node) {
          // Can exclude nodes from the search.
          if (!node.hasClass('excluded'))
          {
            node.hide();
            node.setAttribute('nodeStatus', 'hide');
            node.removeClass('matched');
          }
        }
      }
    );
  }
);