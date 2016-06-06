(function(){
  'use strict'

  var myTutorCardComponent =
  {
    templateUrl : 'app/components/nav/card.html',
    controller  :  myTutorCardCtrl,
    controllerAs: 'myTutorCardCtrl',
    bindings    : {}
  };

  angular.module('my.tutor-card')
         .component('myTutorCard', myTutorCardComponent);

  //////////////////////

  myNavBarCtrl.$inject = ['myTutorCardHttp'];
  function myTutorCardCtrl(myTutorCardHttp)
  {
    var vm = this;
    vm.menus = [
      {menu:'a'},
      {menu:'b'}
    ]
  }
})();
