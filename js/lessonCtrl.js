angular.module('directivePractice')
  .controller('lessonCtrl', function ($scope) {
    $scope.test = 'Two-Way data binding!';

    $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

    $scope.announceDay = (lesson, day) => {
      if (day === undefined){
        alert(lesson + ' is currently inactive.')
      } else {
        alert(lesson + ' is active on ' + day + '.')
      }
    }



  });
