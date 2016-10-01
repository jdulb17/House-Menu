(function() {
  'use strict';

  angular
    .module('homeModule')
    .controller('HomeController', HomeController)

    HomeController.$inject = [];
    function HomeController() {
      var vm = this;

      vm.Workday = Workday;
      vm.getDay = getDay()



      function Workday() {
        day = '';
        lunch = '';
        dinner = '';
      }

      function getDay() {
          var date = new Date();
          var day = date.getDay() - 1;
          if (day == -1) {
              day = 6;
          }
          var arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

          while (day <= 6) {
              console.log(arr[day]);
              day++
          }
      }

    }

})();
