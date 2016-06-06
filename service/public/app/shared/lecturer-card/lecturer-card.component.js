(function(){
  'use strict'

  var myLecturerCardComponent =
  {
    templateUrl : 'app/shared/lecturer-card/lecturer-card.html',
    controller  :  myLecturerCardCtrl,
    controllerAs: 'myLecturerCardCtrl',
    bindings    : {
      lecturer: '=',
    }
  };

  angular.module('my.lecturer-card')
         .component('myLecturerCard', myLecturerCardComponent);

  //////////////////////

  function myLecturerCardCtrl()
  {
    var vm = this;
  }
})();
