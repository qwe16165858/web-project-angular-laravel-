(function(){
  'use strict'

  var mySubjectDetailComponent =
  {
    templateUrl : 'app/components/subject-detail/subject-detail.html',
    controller  :  mySubjectDetailCtrl,
    controllerAs: 'mySubjectDetailCtrl',
    bindings    : {}
  };

  angular.module('my.subject-detail')
         .component('mySubjectDetail', mySubjectDetailComponent);

  //////////////////////

  mySubjectDetailCtrl.$inject = ['mySubjectDetailHttp', '$sce'];
  function mySubjectDetailCtrl(mySubjectDetailHttp, $sce)
  {
    var vm = this;

    vm.subject_outline = [
      {
        title  : 'Chapter - 1',
        content: "Last seen watching <a><b>Bob's Burgers</b></a> 10 hours ago."
      },
      {
        title  : 'Chapter - 2',
        content: "Last seen watching <a><b>The Godfather Part 2</b></a> yesterday."
      },
      {
        title  : 'Chapter - 3',
        content: "Last seen watching <a><b>Twin Peaks</b></a> 3 days ago."
      },
      {
        title  : 'Chapter - 4',
        content: "Has not watched anything recently"
      },
      {
        title  : 'Chapter - 5',
        content: "Last seen watching <a><b>Arrested Development</b></a> just now."
      },
    ];

    angular.forEach(vm.subject_outline, function(item){
      item.content = $sce.trustAsHtml(item.content);
    });

    vm.lecturer = {
      image         : 'test-.png',
      name          : 'Kristy',
      position      : 'IELTS Examine',
      introduction  : 'Kristy is an art director living in New York.',
      subjectsCount : '2'
    };

    vm.rating = {
      average   : 4.8,
      viewers   : 12,
      content   : 4.5,
      assignment: 4.9,
      lecturer  : 4.7,
    };

    vm.comments = [
      {
        author  : 'Matt',
        text    : "How artistic!",
        date    : "Today at 5:42PM",
        comments: []
      },
      {
        author  : 'Elliot Fu',
        text    : "This has been very useful for my research. Thanks as well!",
        date    : "Yesterday at 12:30AM",
        comments: []
      },
      {
        author  : 'Jenny Hess',
        text    : "Elliot you are always so right :)",
        date    : "Just Now",
        comments: [
          {
            author  : 'Jenny Hess',
            text    : "Elliot you are always so right :)",
            date    : "Just Now",
            comments: []
          }
        ]
      },
      {
        author  : 'Joe Henderson',
        text    : "Dude, this is awesome. Thanks so much",
        date    : "5 days ago",
        comments: []
      },
    ];
  }
})();
