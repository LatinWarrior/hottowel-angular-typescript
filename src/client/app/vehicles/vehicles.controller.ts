namespace app.vehicles {
  'use strict';

  interface IVehicle {
        id: number;
        make: string;
        model: string;
        year: number;
    }

  interface IVehiclesVm {
    title: string;
    vehicles: Array<IVehicle>;
    getVehicles:() => ng.IPromise<Array<IVehicle>>;
  }

  export class VehiclesController implements IVehiclesVm {
    title: string = 'Vehicles';

    static $inject:Array<string> = ['logger', '$q', 'VehiclesDataService'];

    constructor(private logger:blocks.logger.Logger,
                private $q:ng.IQService,
                private dataservice:app.core.IVehiclesDataService) {
      //this.logger.info('Activated Vehicles View');
      var promises = [this.getVehicles()];
      this.$q.all(promises).then(() => {
          logger.info('Activated Vehicles View');
      });
    }

    vehicles:Array<IVehicle> = [];

    getVehicles() {
      return this.dataservice.getVehicles()
          .then((data: Array<IVehicle>) => {
            this.vehicles = data;
            return this.vehicles;
          });
    }
  }

  angular
      .module('app.vehicles')
      .controller('VehiclesController', VehiclesController);
}
