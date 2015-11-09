angular.module('waitstaffApp', []).controller('waitCtrl', [function (){
    var self = this;
    //Make an empty object to enable cancel().
    self.cancelValue = {};

    //set the meal counter to 0 && tipTotal to 0.
    self.numOfMeal = 0;
    self.tipTotal = 0;

    self.submit = function () {
        // Declare of basic functionality variables.
        var tip = self.input.tip;
        var base = self.input.mealPrice;
        var tax = self.input.tax;
        console.log('Input prices of:', self.input);
        //Calculate sub Total
        console.log(base + (base * (tax/100)));
        self.subTotal = base + (base * (tax/100));
        console.log(self.subTotal);
        // Calculate totalAll dvs (subTotal & tip).
        self.totalAll = self.subTotal + (self.subTotal * (tip/100));
        console.log(self.totalAll);
        // Calculate Tip
        self.tipping = self.subTotal * (tip/100);
        // When form is submitted meal counter increments by 1.
        self.numOfMeal ++;
        // Calculate the tipTotal.
        self.tipTotal = self.tipTotal + self.tipping;
        // Calculate the average between tipTotal & numOfMeal.
        self.averageTip = self.numOfMeal / self.tipTotal;
    };
    self.cancel = function () {
        self.input = angular.copy(self.cancelValue);
        console.log('hello there');
    };
    self.reset = function () {
        self.input = angular.copy(self.cancelValue);
        self.subTotal = angular.copy(self.cancelValue);
        self.totalAll = angular.copy(self.cancelValue);
        self.tipping = angular.copy(self.cancelValue);
        self.numOfMeal = 0;
        self.tipTotal = 0;
        self.averageTip = angular.copy(self.cancelValue);
    };
}]);
