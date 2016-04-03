namespace app.vehicle {
  'use strict';

  angular
    .module('app.vehicles')
    .config(configureStates);

  configureStates.$inject = ['$stateProvider'];
  /* @ngInject */
  function configureStates($stateProvider: ng.ui.IStateProvider) {
    var states: any[] = getStates();
    states.forEach(function(state) {
      $stateProvider.state(state.state, state.config);
    });
  }

  function getStates(): any[] {
    return [
      {
        state: 'vehicles',
        config: {
          url: '/vehicle',
          templateUrl: 'app/vehicle/vehicles.html',
          controller: 'VehiclesController',
          controllerAs: 'vm',
          title: 'Vehicles',
          settings: {
            nav: 2,
            content: '<i class="fa fa-car"></i> Vehicles'
          }
        }
      }
    ];
  }
}
