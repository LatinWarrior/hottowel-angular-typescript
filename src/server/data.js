/*jshint node:true*/
"use strict";
var data;
(function (data) {
    'use strict';
    function getPeople() {
        var people = [
            { id: 1, firstName: 'Lionel', lastName: 'Messi', age: 27, location: 'Argentina' },
            { id: 2, firstName: 'Luis', lastName: 'Suarez', age: 28, location: 'Uruguay' },
            { id: 3, firstName: 'Neymar', lastName: 'DoSantos', age: 21, location: 'Brazil' }
        ];
        return people;
    }
    data.getPeople = getPeople;
    function getVehicles() {
        var vehicles = [
            { id: 1, make: 'chevrolet', model: 'sonic', year: 2016 },
            { id: 2, make: 'chevrolet', model: 'cruze', year: 2016 },
            { id: 3, make: 'chevrolet', model: 'spark', year: 2016 },
            { id: 4, make: 'chevrolet', model: 'impala', year: 2016 },
            { id: 5, make: 'chevrolet', model: 'volt', year: 2016 },
            { id: 6, make: 'chevrolet', model: 'malibu', year: 2016 }
        ];
        return vehicles;
    }
    data.getVehicles = getVehicles;
})(data || (data = {}));
module.exports = data;
//# sourceMappingURL=data.js.map