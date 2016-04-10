/**
 * Created by Luis Blanco on 4/9/2016.
 */

namespace app.layout {
    'use strict';

    interface IShowStatsScope {
        model: {};
        comments: string;
        number: string;
        name: string;
        colour: string;
        details: string;
        type: string;
        goto: string;
    }

    class showStats implements ng.IDirective {

        static $inject: Array<string> = [''];

        constructor() { }

        static instance(): ng.IDirective {
            return new showStats();
        }

        templateUrl: string ='app/dashboard/show-stats.html';
        restrict: string = 'E';
        replace: boolean = true;
        scope: IShowStatsScope = {
            'model': '=',
            'comments': '@',
            'number': '@',
            'name': '@',
            'colour': '@',
            'details':'@',
            'type':'@',
            'goto':'@'
        };
    }

    angular
        .module('app.layout')
        .directive('showStats', showStats.instance);
}


