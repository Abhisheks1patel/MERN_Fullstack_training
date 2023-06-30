// Write a function calculate that takes three arugments from the user, say num1 , num2, and operation(1==add, 2==subtract, 
//     3==multiply, 4==divide ).Don`t use switch statement or if else statements
     
//     1.add,
//     2.subtract,
//     3.multiply,
//     4.divide 
    
//     write the calc function for all the operations




function calc(num) {
    var add = function (x,y) {
        return x+y;
    }
       var sub = function (x,y) {
        return x-y;
    }
       var mul = function (x,y) {
        return x*y;
    }
       var div = function (x,y) {
        return x/y;
    }
    
    return { add , sub , mul,div}
}
// undefined
// calc();
// {add: ƒ, sub: ƒ, mul: ƒ, div: ƒ}
// calc().add(10,9);
// 19
// calc().sub(10,9);
// 1
// calc().mul(10,9);
// 90
// calc().div(10,9);
// 1.1111111111111112


///////////// 2nd method//////////
// using prompt
var x= parseInt(prompt("enter x"));
  var y= +prompt("enter y");function calc(x,y) {
  
    var add = function (x,y) {
        return x+y;
    }
       var sub = function (x,y) {
        return x-y;
    }
       var mul = function (x,y) {
        return x*y;
    }
       var div = function (x,y) {
        return x/y;
    }
    
    return{ add , sub , mul,div}
}
// undefined
// calc();
// {add: ƒ, sub: ƒ, mul: ƒ, div: ƒ}
// calc().add(x,y);
// 19

