/* jshint -W079 */
var mockData = (function() {
    return {
        getMockPeople: getMockPeople,
        getMockStates: getMockStates
    };

    function getMockStates() {
        return [{
            state: 'dashboard',
            config: {
                url: '/',
                templateUrl: 'app/dashboard/dashboard.html',
                title: 'dashboard',
                settings: {
                    nav: 1,
                    content: '<i class="fa fa-dashboard"></i> Dashboard'
                }
            }
        }];
    }

    function getMockPeople() {
        return [{
            id: 1,
            firstName: 'Lionel',
            lastName: 'Messi',
            age: 27,
            location: 'Argentina'
        }, {
            id: 2,
            firstName: 'Luis',
            lastName: 'Suarez',
            age: 28,
            location: 'Uruguay'
        }, {
            id: 3,
            firstName: 'Neymar',
            lastName: 'DoSantos',
            age: 21,
            location: 'Brazil'
        }];
    }
})();