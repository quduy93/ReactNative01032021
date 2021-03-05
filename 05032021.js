// 13. Array method
const arrNum = [1,2,3,4,5]

// Method thay doi truc tiep arr
// them du lieu o cuoi mang
arrNum.push(6)
console.log(arrNum)
// xoa o cuoi
arrNum.pop()
console.log(arrNum)
// them o dau
arrNum.unshift(0)
console.log(arrNum)
// xoa o dau
arrNum.shift()
console.log(arrNum)
// xoa o giua
arrNum.splice(1,2)
console.log(arrNum)
// them o giua
arrNum.splice(1,0,6,7)
console.log(arrNum)
// xoa nguoc
arrNum.splice(-2,1)
console.log(arrNum)

// 14. Callback (Higher order function) method nhan gia tri la method su dung funciton programming
function tinhTong(arr, fn) {
    let result = 0
    for (const value of arr) {
        result += value
    }
    fn(result)
}
// cach 1
tinhTong([1,2,3,4,5], console.log)
// cach 2 Tu dinh nghia
tinhTong([1,2,3,4,5], function(result) {
    console.log(result)
})

// 15 : MAP
//1. Thay doi gia tri cua tung phan tu, khong thay doi kich thuoc mang
//2. Khong gan su thay doi vao mang old, gan su thay doi vao mang new
const arrNums = [1,2,3,4,5,6,7]
const newArrNums = arrNums.map(function(number, index) {
    return number*2
})
console.log(arrNums)
console.log(newArrNums)

nameOnly([
    {
        name:"Messi",
        age: 20
    },
    {
        name:"Neymar",
        age: 22
    },
    {
        name:"Ronaldo",
        age: 24
    }
])

function nameOnly(arr) {
    const newArrMap = arr.map(function(person) {
        return person.name
    })
    console.log(newArrMap)
}

// nang cap mang
Array.prototype.myMap = function(fn) {
    let newArr =  []
    for (const value of this) {
        newArr.push(fn(value))
    }
    return newArr
}
const newArrNums2 = arrNums.myMap(function(number) {
    return number*2
})
console.log(newArrNums2)