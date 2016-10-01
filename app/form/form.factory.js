(function() {
  'use strict';

  angular
    .module('formModule')
    .factory('formFactory', formFactory);

    formFactory.$inject = [];
    function formFactory() {

      var factory = {
        Workday: Workday,

      }
      return factory;

      //////////////////////////////////////////////////////////////////////////

      function Workday() {
        this.day = '';
        this.lunch = '';
        this.dinner = '';
      }
    }
})();
