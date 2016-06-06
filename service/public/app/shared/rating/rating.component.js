(function(){
  'use strict'

  var myRatingComponent =
  {
    templateUrl : 'app/shared/rating/rating.html',
    controller  :  myRatingCtrl,
    controllerAs: 'myRatingCtrl',
    bindings    : {
      rating: '=',
    }
  };

  angular.module('my.rating')
         .component('myRating', myRatingComponent);

  //////////////////////

  myRatingCtrl.$inject = ['myRatingHttp'];
  function myRatingCtrl(myRatingHttp)
  {
    var vm = this;

    vm.$onInit = init;

    //////////////////////

    function init()
    {
      $('.ui.rating').rating();
    }
  }
})();
