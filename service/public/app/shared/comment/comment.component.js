(function(){
  'use strict'

  var myCommentComponent =
  {
    templateUrl : 'app/shared/comment/comment.html',
    controller  :  myCommentCtrl,
    controllerAs: 'myCommentCtrl',
    bindings    : {
      comment: '=',
    }
  };

  angular.module('my.comment')
         .component('myComment', myCommentComponent);

  //////////////////////

  myCommentCtrl.$inject = ['myCommentHttp'];
  function myCommentCtrl(myCommentHttp)
  {
    var vm = this;
  }
})();
