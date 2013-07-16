AUI().use(
  'aui-tabs',
  function(A) {
    new A.TabView(
      {
        boundingBox: '#exampleTabs',
        items: [
          {label: 'Tab 1', content: 'Give me a T!'},
          {label: 'Tab 2', content: 'Give me a A!'},
          {label: 'Tab 3', content: 'Give me a B!'},
          {label: 'Tab 4', content: 'Give me a S!'},
          {label: 'Tab 5', content: 'Tabs!'}
        ]
      }
    ).render();
  }
);