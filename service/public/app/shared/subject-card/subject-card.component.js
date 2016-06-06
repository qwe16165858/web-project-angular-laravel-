(function(){
  'use strict'

  var mySubjectCardComponent =
  {
    templateUrl : 'app/shared/subject-card/subject-card.html',
    controller  :  mySubjectCardCtrl,
    controllerAs: 'mySubjectCardCtrl',
    bindings    : {
      subject: '=',
    }
  };

  angular.module('my.subject-card')
         .component('mySubjectCard', mySubjectCardComponent);

  //////////////////////

  function mySubjectCardCtrl()
  {
    var vm = this;

    vm.$onInit = init;
    
    //////////////////////

    function init()
    {
      $('.special.cards .image').dimmer({
        on: 'hover'
      });
    }
  }
})();
