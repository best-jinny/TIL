function sum(a, b) {
    return a+b;
}

var result = sum(1, 2);
var expected = 5;

if(result !== expected){
    throw new Error(result + ' is not equal to ' + expected);
}