// let com2 = angular.module('com2', []);

let cks = {
    form:`<h6>Registration Form</h6>
    <input placeholder=email class='input'>
    <input placeholder=password class='input'>
    <button ng-click='log()'>Click</button>
    <button ng-click='close()'>Close</button>
    `,
};


function mng(){}

let com1 = angular.module('com1',['mng']);

com1.controller('controller1', function($scope){
    $scope.openForm = function(){
        console.log('form is open');
        // console.log(this);
        $scope.$broadcast('openForm', {msg:'open the form'});
    }
});

com1.controller('controller2', function($scope,$element, $window){
    $scope.$on('openForm', function(event, args){
        console.log(event, args);
    });
    $scope.log = function(){
        console.log('log here');
    };
    $scope.close = function(){
        console.log('close the component');
        console.log($element, $window);
        // this.$destroy();
        // $element.empty();
        $element[0].remove();
    };
});

com1.directive('myEl', function(){
    return {
        scope:true,
        restrict: 'A',
        template:cks.form,
        controller:'controller2'
    }
});




let el = document.createElement('div')
el.setAttribute('my-el', "");
document.body.appendChild(el);


function createComponent(name, template){

};