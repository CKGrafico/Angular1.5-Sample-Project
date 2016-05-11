describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('http://localhost:8000/app/#/debtors/');

    var todoList = element.all(by.repeater('item in $ctrl.list'));
    expect(todoList.count()).toEqual(10);
    expect(todoList.get(2).getText()).toEqual('Sandra - 34');
  });
});