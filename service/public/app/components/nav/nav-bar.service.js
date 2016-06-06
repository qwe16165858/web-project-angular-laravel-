(function(){
  'use strict'

  angular.module('my.nav-bar')
         .service('myNavBarHttp', myNavBarHttp);

  //////////////////////

  myNavBarHttp.$inject = ['$http'];
  function myNavBarHttp ($http)
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
