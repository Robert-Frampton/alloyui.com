AUI().use(
  'aui-tabs', 
  'substitute',
  function(A) {
    var tabs = new A.TabView(
      {
        boundingBox: '#example',
        contentNode: '#exampleContent'
      }
    );

    tabs.render();

    A.on(
      'click',
      function(event) {
        var buttonValue = this.get('value');

        if (this.hasClass('enableTab')) {
          tabs.enableTab(1);
          buttonValue = buttonValue.replace(/Enable/, 'Disable');
        }
        else {
          tabs.disableTab(1);
          buttonValue = buttonValue.replace(/Disable/, 'Enable');
        }

        this.toggleClass('enableTab');
        this.set('value', buttonValue);
      },
      '#disable'
    );

    var exampleContent = '<h5>{tabNumber}. New Tab Content</h5><br />This is tab #{tabNumber}. You made this!';

    A.on(
      'click',
      function(event) {
        var tabNumber = (tabs.get('items').length + 1);

        if (tabNumber > 10) {
          click.disable = true;
        }

        tabs.addTab(
          {
            label: 'Tab' + " " + tabNumber,
            content: A.Lang.substitute(exampleContent, {tabNumber: tabNumber}),
            active: true
          }
        );
      },
      '#add'
    );

    A.on(
      'click',
      function(event) {
        var tabNumber = (tabs.get('items').length - 1);

        tabs.removeTab(tabNumber);
      },
      '#remove'
    );
  }
);