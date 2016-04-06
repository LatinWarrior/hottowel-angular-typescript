namespace app.vehicles {
    'use strict';

    interface IVehiclesVm {
        title: string;
        vehicles: Array<any>;
        getVehicles: () => ng.IPromise<Array<any>>;
    }

    export class VehiclesController implements IVehiclesVm {
       

        static $inject: Array<string> = ['$q', 'vehiclesDataService', 'logger'];

        constructor(private $q: ng.IQService,
            private vehiclesDataService: app.core.IVehiclesDataService,
            private logger: blocks.logger.Logger) {
            //this.logger.info('Activated Vehicles View');
            var promises = [this.getVehicles()];
            this.$q.all(promises).then(function() {
                logger.info('Activated Vehicles View');
            });
        }

        vehicles: Array<any> = [];
        title: string = 'Vehicles';

        getVehicles() {
            return this.vehiclesDataService.getVehicles()
                .then((data) => {
                    this.vehicles = data;
                    return this.vehicles;
                });
        }
    }

    angular
        .module('app.vehicles')
        .controller('VehiclesController', VehiclesController);
}
