(function(){
  'use strict'

  angular.module('my.comment')
         .service('myCommentHttp', myCommentHttp);

  //////////////////////

  myCommentHttp.$inject = ['$http'];
  function myCommentHttp ($http)
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
