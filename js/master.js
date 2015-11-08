angular.module('waitstaffApp', []).controller('waitCtrl', [function (){
    var self = this;



    var mealPrice = self.mealPrice;
    self.submit = function () {
        var tip = self.input.tip;
        var base = self.input.mealPrice;
        console.log('Input prices of:', self.input);
        //Calculate Tip
        console.log((tip + base)/100);
    };
}]);
