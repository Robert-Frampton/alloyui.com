AUI().ready(
  'aui-textboxlist',
  function(A) {
    var continents = [
      ['Africa'],
      ['America'],
      ['Antarctica'],
      ['Asia'],
      ['Oceania'],
      ['Europe'],
    ];

    new A.TextboxList(
      {
        contentBox: '#myList',
        dataSource: continents,
        width: 600
      }
    ).render();
  }
);