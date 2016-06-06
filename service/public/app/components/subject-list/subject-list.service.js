(function(){
  'use strict'

  angular.module('my.subject-list')
         .service('mySubjectListHttp', mySubjectListHttp);

  //////////////////////

  mySubjectListHttp.$inject = ['$http'];
  function mySubjectListHttp ($http)
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
