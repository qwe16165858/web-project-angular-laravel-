(function(){
  'use strict'

  var myNavBarComponent =
  {
    templateUrl : 'app/components/nav/nav-bar.html',
    controller  :  myNavBarCtrl,
    controllerAs: 'myNavBarCtrl',
    bindings    : {}
  };

  angular.module('my.nav-bar')
         .component('myNavBar', myNavBarComponent);

  //////////////////////

  myNavBarCtrl.$inject = ['myNavBarHttp'];
  function myNavBarCtrl(myNavBarHttp)
  {
    var vm = this;
  }
})();
