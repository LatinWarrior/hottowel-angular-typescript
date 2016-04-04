/*jshint node:true*/

namespace data {

    'use strict';

    interface IPeople {
        id: number;
        firstName: string;
        lastName: string;
        age: number;
        location: string;
    }

    interface IVehicle {
        id: number;
        make: string;
        model: string;
        year: number;
    }

    export function getPeople() {
        var people: Array<IPeople> = [
            { id: 1, firstName: 'Lionel', lastName: 'Messi', age: 27, location: 'Argentina' },
            { id: 2, firstName: 'Luis', lastName: 'Suarez', age: 28, location: 'Uruguay' },
            { id: 3, firstName: 'Neymar', lastName: 'DoSantos', age: 21, location: 'Brazil' }
        ];
        return people;
    }

    export function getVehicles(){

            var vehicles: Array<IVehicle> = [
                {id: 1, make: 'chevrolet', model: 'sonic', year: 2016},
                {id: 2, make: 'chevrolet', model: 'cruze', year: 2016},
                {id: 3, make: 'chevrolet', model: 'spark', year: 2016},
                {id: 4, make: 'chevrolet', model: 'impala', year: 2016},
                {id: 5, make: 'chevrolet', model: 'volt', year: 2016},
                {id: 6, make: 'chevrolet', model: 'malibu', year: 2016}
            ];
        return vehicles;
    }
}

export = data;
