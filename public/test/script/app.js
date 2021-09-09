let cks = {
    form:`<h6>Registration Form</h6>
    <input placeholder=email class='input'>
    <input placeholder=password class='input'>`,
};
// let com1 = angular.module('com1',[]);

// com1.factory('sat', function(){
//     return {sat:[]};
// })

// com1.controller('c1-control', ['$scope', '$compile', function($scope, $compile, $attrs){
//     console.log($attrs);
//     $scope.name = 'james';
//     let html = `<p ng-click="alert('clicked')" is-test=true>Hello World</p>`;
//     let compile = $compile(html);
//     let link = compile($scope);
//     angular.element(document.querySelector('[ng-controller]')).append(link);
// }]);

// let c1 = document.createElement('div');
// c1.setAttribute('ng-controller','c1-control');
// c1.setAttribute('is-test','true');




// function createComponent(name, template){
    
//     angular.element()
// }


let com1 = angular.module('com1',[]);

com1.component('my-el', {
    template:cks.form,
    controller: function($scope, $compile, $attrs){
        console.log($attrs);
    }
})
// angular.bootstrap(document, ['com1']);