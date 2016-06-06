(function() {
  'use strict'

  angular.module('my.forum-page')
        .service('myFormPageHttp', myFormPageHttp);

  //////////////////////

  myFormPageHttp.$inject['http'];
  function myFormPageHttp($http)
  {
    var vm = this;
    var service = {
      test: test,
    };
    return service;

    //////////////////////

    function test($http)
    {
        return 'aa';
    }
  }
})();
