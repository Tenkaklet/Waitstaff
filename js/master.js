angular.module('waitstaffApp', []).controller('waitCtrl', [function (){
    var self = this;

    self.submit = function () {
        console.log('Input prices of:', self.input);
    };
}]);
