(function() {
  'use strict';

  angular
    .module('formModule')
    .controller('FormController', FormController);

    FormController.$inject = ['formFactory'];
    function FormController(formFactory) {
      var vm = this;

      vm.submit = submit;
      vm.oneDay = new formFactory.Workday();


      function submit(){
        var arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        console.log(vm.oneDay);
      }



    }

})();
