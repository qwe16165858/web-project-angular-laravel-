(function(){
  'use strict'

  angular.module('my.subject-detail')
         .service('mySubjectDetailHttp', mySubjectDetailHttp);

  //////////////////////

  mySubjectDetailHttp.$inject = ['$http'];
  function mySubjectDetailHttp ($http)
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
