(function(){
  'use strict'

  angular.module('my.app')
         .directive('myTask', myTask);

  function myTask ()
  {
    return {
      templateUrl : 'app/task.html',
      controllerAs: 'myTaskCtrl',
      controller  : myTaskCtrl
    }

    //////////////////////
    myTaskCtrl.$inject = ['$http'];
    function myTaskCtrl($http)
    {
      var vm = this;

      $http.get('api/getTask').then(function(reps){
        vm.task = reps.data;
      });
    }
  }
})();
