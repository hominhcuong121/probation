var myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope){

    // Mock Data
    $scope.employees = [
        {fullname: "Hồ Minh Cường", shortname: "cho38"},
        {fullname: "Trần Thị Kim Dung", shortname: "tdung8"},
        {fullname: "Vương Chí Phát", shortname: "vphat15"}
    ];

    // Add new employee
    $scope.newEmployee = {};
    $scope.saveEmployee = function() {
        $scope.employees.push($scope.newEmployee);
        $scope.newEmployee = {};
    }

    // Select employee
    $scope.clickedEmployee = {};
    $scope.selectEmployee = function(employee) {
        $scope.clickedEmployee = employee;
    }

    // Delete employee
    $scope.deleteEmployee = function() {
        $scope.employees.splice($scope.employees.indexOf($scope.clickedEmployee), 1);
    }
});