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

// true, false dinh nghia theo 6 truong hop
// 6 truong hop la false : 0, null, undefined, "", false, NaN
let e = 0
if ("") {
    console.log("TH true")
} else {
    console.log("TH false")
}

// undefined
// TH1 : khai bao 1 bien ma khong co gia tri
// TH2 : Goi thuoc tinh khong ton tai

// 3 : Object
const teo = {
    name:"Nguyen van teo",
    age: 10
}
console.log(teo['name'])
console.log(teo.name)

// 4 : Array
const arrNumber = [10,11,12,5,2]
console.log(arrNumber[0])

// 5 : Toan tu
// do uu tien 1 : ++ --
// do uu tien 2 : * /
// do uu tien 3 : + -

// 6 : Phuong thuc
function showName(name) {
    console.log(name)
}
//showName("Duy")
console.log(showName)
console.log(showName())
console.log(showName("Duy"))

// 7 : Object Method
const teo1 = {
    name:"Nguyen van teo",
    age: 10,
    showInfo : function() {
        console.log(this.name)
    }
}
console.log(teo1.showInfo())
// this tham chieu toi cho tao ra function

// 9 : vong loop
const arrName = ["Teo","Ti", "Hoa", "Tuan"]
for (const name of arrName) {
    console.log(name)
}

for (const key in teo) {
    console.log(key)
}