// 1.
// var khong chat che trong khai bao bien -> nen su dung let
// var khong tuan thu theo scope          -> nen su dung let 

var a = 10
console.log(a)

if (true) {
    var b = 11
}
console.log(b)

// hoisting
console.log(c);
var c = 10             //  khi dung var bien c se duoc khoi tao truoc -> undefined
let d = 12             //  khi dung let bien d se khong khai tao truoc

// immutable (kieu vung nho), mutable (khong quan tam vung nho)

// 2. Kieu du lieu dynamic
