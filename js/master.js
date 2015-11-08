angular.module('waitstaffApp', []).controller('waitCtrl', [function (){
    var self = this;

    self.submit = function () {
        var tip = self.input.tip;
        var base = self.input.mealPrice;
        var tax = self.input.tax;
        console.log('Input prices of:', self.input);
        //Calculate Tip
        // console.log((tip + base)/100);
        console.log(base + (base * (tax/100)));
        self.subTotal = base + (base * (tax/100));
        console.log(self.subTotal);

    };
}]);
