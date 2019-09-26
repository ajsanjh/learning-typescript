"use strict";
var MyMath2;
(function (MyMath2) {
    var PI = 3.14;
    function calculateCircumfrence2(diameter) {
        return diameter * PI;
    }
    MyMath2.calculateCircumfrence2 = calculateCircumfrence2;
    function calculateArea2(radius) {
        return PI * radius * radius;
    }
    MyMath2.calculateArea2 = calculateArea2;
})(MyMath2 || (MyMath2 = {}));
