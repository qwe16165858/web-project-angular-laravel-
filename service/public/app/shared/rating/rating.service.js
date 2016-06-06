(function(){
  'use strict'

  angular.module('my.rating')
         .service('myRatingHttp', myRatingHttp);

  //////////////////////

  myRatingHttp.$inject = ['$http'];
  function myRatingHttp ($http)
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
