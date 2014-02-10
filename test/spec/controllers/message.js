'use strict';

describe('Controller: MessageCtrl', function () {

  // load the controller's module
  beforeEach(module('javascriptApp'));

  var MessageCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/message')
      .respond("Hello World!");
    scope = $rootScope.$new();
    MessageCtrl = $controller('MessageCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of message to the scope', function () {
    expect(scope.message).toBeUndefined();
    $httpBackend.flush();
    expect(scope.message).toBe("Hello World!");
  });
});
