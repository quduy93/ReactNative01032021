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

// 16. filter
//1. Thay doi kich thuoc, khong thay doi gia tri
//2. Khong gan su thay doi vao mang old, gan su thay doi vao mang new

const arrNames = ["hao", "tuan", "loan", "hau"]
const newArrNames = arrNames.filter(function(name) {
    if (name.length == 3) {
        return true
    }
})
console.log(newArrNames)

const teo = {
    name:"Nguyen van teo",
    age: 10
}
delete teo.age
console.log(teo)

let listProducts = [
    {
        id:1,
        cateId: 1,
        name: "tivi"
    },
    {
        id:1,
        cateId: 1,
        name: "tu lanh"
    },
    {
        id:1,
        cateId: 2,
        name: "noi com dien"
    },
    {
        id:1,
        cateId: 3,
        name: "chen"
    }
]

function getProduct(cateId) {
    const filtered = listProducts.filter(function(product) {
        if (product.cateId === cateId) {
            return true
        }
        return false
    }).map(function(product) {
        delete product.cateId
        return product
    })
    console.log(filtered)
}
getProduct(3, listProducts)

//17. Ham reduce
const arrNums1 = [1,2,3,4,5,6,6]
//1. Thuc hien tinh toan de tra ve ket qua theo yeu cau
//2. Khong anh huong den old array

const newArrNums1 = arrNums1.reduce(function(accumulator, currentValue) {
    // loop 1
    // accumulator = init
    // current = 1 ( phan tu dau tien trong mang )
    // loop2 
    // accumulator = ket qua maf loop 1 tra ve
    return accumulator + currentValue
}, 0) // output is array, or is number
console.log(newArrNums1)


const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
  ]

function totalVoters(arr1) {
    const total = arr1.reduce(function(accumulator , voter) {
        if (voter.voted) {
            accumulator += 1
        }
        return accumulator
    }, 0)
    console.log(total)
}
totalVoters(voters)

// Bai tap kiem tra gia tri trung : 
const words = ["a","b","c","a","b","a","a","c"]
const object = words.reduce(function(accumulator, word) {
    if (word in accumulator) {
        accumulator[word] += 1
    } else {
        accumulator[word] = 1
    }
    return accumulator
}, {})
console.log(object)
  