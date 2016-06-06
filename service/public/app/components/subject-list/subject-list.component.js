(function(){
  'use strict'

  var mySubjectListComponent =
  {
    templateUrl : 'app/components/subject-list/subject-list.html',
    controller  :  mySubjectListCtrl,
    controllerAs: 'mySubjectListCtrl',
    bindings    : {}
  };

  angular.module('my.subject-list')
         .component('mySubjectList', mySubjectListComponent);

  //////////////////////

  mySubjectListCtrl.$inject = ['mySubjectListHttp'];
  function mySubjectListCtrl(mySubjectListHttp)
  {
    var vm = this;
    vm.$onInit = init;
    vm.subjects = [
      {
        subject_img         : 'test-.png',
        subject_name        : 'IELTS Writting',
        subject_introduction: 'Very Good...',
        subject_next        : '06 May 2016',
        subject_id          : '1',
      },
      {
        subject_img         : 'test-.png',
        subject_name        : 'IELTS Writting',
        subject_introduction: 'Very Good...',
        subject_next        : '06 May 2016',
        subject_id          : '1',
      },
      {
        subject_img         : 'test-.png',
        subject_name        : 'IELTS Writting',
        subject_introduction: 'Very Good...',
        subject_next        : '06 May 2016',
        subject_id          : '1',
      },
      {
        subject_img         : 'test-.png',
        subject_name        : 'IELTS Writting',
        subject_introduction: 'Very Good...',
        subject_next        : '06 May 2016',
        subject_id          : '1',
      },
      {
        subject_img         : 'test-.png',
        subject_name        : 'IELTS Writting',
        subject_introduction: 'Very Good...',
        subject_next        : '06 May 2016',
        subject_id          : '1',
      },
      {
        subject_img         : 'test-.png',
        subject_name        : 'IELTS Writting',
        subject_introduction: 'Very Good...',
        subject_next        : '06 May 2016',
        subject_id          : '1',
      },
      {
        subject_img         : 'test-.png',
        subject_name        : 'IELTS Writting',
        subject_introduction: 'Very Good...',
        subject_next        : '06 May 2016',
        subject_id          : '1',
      },
      {
        subject_img         : 'test-.png',
        subject_name        : 'IELTS Writting',
        subject_introduction: 'Very Good...',
        subject_next        : '06 May 2016',
        subject_id          : '1',
      },
    ];

    //////////////////////

    function init()
    {
      $('.ui.dropdown')
        .dropdown({
          allowAdditions: true
        });
    }
  }
})();
