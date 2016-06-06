(function() {
  'use strict'

  var myForumPageComponent =
  {
    templateUrl : 'app/components/nav/forum-page.html',
    controller  :  myForumPageCtrl,
    controllerAs: 'myForumPageCtrl',
    bindings    : {}
  };

  angular.module('my.forum-page')
         .component('myForumPage', myForumPageComponent);

  //////////////////////

  myForumPageCtrl.$inject = ['myForumPageHttp'];
  function myForumPageCtrl(myForumPageHttp)
  {
    var vm = this;
  }
})();
