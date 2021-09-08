let cks = {
    form:`<h6>Registration Form</h6>
    <input placeholder=email class='input'>
    <input placeholder=password class='input'>`,
};
let com1 = angular.module('com1',[]);

com1.factory('sat', function(){
    return {sat:[]};
})

com1.controller('c1-control', ['$scope', '$compile', function($scope, $compile){
    $scope.name = 'james';
    let html = $compile(`<p>Hello World</p>`)($scope);

    angular.element(document.getElementById('view')).append(html);
}]);

let c1 = document.createElement('div');
c1.setAttribute('ng-controller','c1-control');





// '<h6>Registration Form</h6>'+
//     '<input placeholder=email>'+
//     '<input placeholder=password>'



