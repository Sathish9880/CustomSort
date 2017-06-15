var app = angular.module('MyEmpApp', []);
app.controller('EmpCtrl', function ($scope) {

    $scope.employes = [
        {name: 'kumar', id: 200, salary: 8000},
        {name: 'ram', id: 3200, salary: 48000},
        {name: 'sathish', id: 2400, salary: 4000},
        {name: 'vivek', id: 5200, salary: 6000},
        {name: 'arun', id: 2200, salary: 2000}
    ]
    $scope.reverse = false;
    $scope.sortKey = 'id';

    $scope.sort = function (keyname) {

        $scope.sortKey = keyname;
        console.log($scope.sortKey);

        $scope.reverse = !$scope.reverse;

        //console.log("test:"+!$scope.reverse);
    }
});