(function(){
  'use strict'

  angular.module('my.totor-card')
         .service('myTutorCardHttp', myTutorCardHttp);

  //////////////////////

  var cardtutor = angular.module('my.tutor-card', []);
  cardtutor.controller('tutorcard', ['$scope', function($scope) {
    $scope.title = 'Tutors';
    $scope.tutors = [
      {
        name: "Laura",
        price: 19,
        cover:'service/resources/assets/logo.jpg'
      },
      {
        name: "Laura",
        price: 19,
        cover:'service/resources/assets/logo.jpg'
      },
      {
        name: "Laura",
        price: 19,
        cover:'service/resources/assets/logo.jpg'
      },
      {
        name: "Laura",
        price: 19,
        cover:'service/resources/assets/logo.jpg'
      }
    ];
  }]);


  myTutorCardHttp.$inject = ['$http'];
  function myTutorCardHttp ($http)
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
