namespace app.dashboard {
  'use strict';

  interface IDashboardVm {
    news: { title: string, description: string };
    messageCount: number;
    people: Array<any>;
    title: string;
    getMessageCount: () => ng.IPromise<number>;
    getPeople: () => ng.IPromise<Array<any>>;
  }

  export class DashboardController implements IDashboardVm {
      
    static $inject: Array<string> = ['$q', 'peopleDataService', 'logger'];
    
    constructor(private $q: ng.IQService,
      private peopleDataService: app.core.IPeopleDataService,
      private logger: blocks.logger.Logger) {
      var promises = [this.getMessageCount(), this.getPeople()];
      this.$q.all(promises).then(function() {
        logger.info('Activated Dashboard View');
      });
    }

    news = {
      title: 'My Application',
      description: 'Built with AngularJS'
    };
    messageCount: number = 0;
    people: Array<any> = [];
    title: string = 'Dashboard';

    getMessageCount() {
      return this.peopleDataService.getMessageCount().then((data) => {
        this.messageCount = data;
        return this.messageCount;
      });
    }

    getPeople() {
      return this.peopleDataService.getPeople().then((data) => {
        this.people = data;
        return this.people;
      });
    }
  }

  angular
    .module('app.dashboard')
    .controller('DashboardController', DashboardController);
}
