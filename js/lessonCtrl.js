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

    // Trying to get the strikeout style to go away when we click the checkbox
    $scope.isItStruckout = (check,lesson) => {
      console.log(check,lesson)
      if (check){
        // element.removeAttr('text-decoration');
        // document.getElementById(lesson).removeAttr('text-decoration');
          document.getElementById()

        console.log('here')
        // return 'checked'
      } else{
        // element.addAttr('text-decoration','line-through');

        // return ''
      }
    }

  });
