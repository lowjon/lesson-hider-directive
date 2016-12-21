angular.module('directivePractice')
  .directive('lessonHider', function () {
    return {
      templateUrl: "lessonHider.html",
      restrict: 'E',
      scope:{
        lesson: '=',
        dayAlert: '&',
        strike:'&'
      },
      controller: function ($scope, lessonService) {
        $scope.getSchedule = lessonService.getSchedule();
      },
      link: function (scope, element, attributes) {
        var checked =false;
        scope.getSchedule.then(function (response) {
          scope.schedule = response.data;

          scope.schedule.forEach(function (scheduleDay) {
            if (scheduleDay.lesson === scope.lesson){
              element.css('text-decoration','line-through');
              scope.lessonDay = scheduleDay.weekday;
              checked = true;
              return;
            }
          });
        });
        scope.strike= () => {
          if(checked){
            element.css('text-decoration','none');
            checked = false;
          }
          else{
            element.css('text-decoration','line-through');
            checked = true;
          }
        }
        scope.removeLesson = () => {
          element.remove();
        }
      }


    }
  });
