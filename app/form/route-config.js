(function() {
  'use strict';

  angular
    .module('formModule')
    .config(configFunction);

    configFunction.$inject = ['$stateProvider'];
    function configFunction($stateProvider) {
        $stateProvider.state('form', {
          url: '/form',
          templateUrl: 'form/addnew.html',
          controller: 'FormController',
          controllerAs: 'vm',
        });

    }

})();
