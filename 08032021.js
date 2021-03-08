// 18. Prototype
// Class (Lop doi tuong)
function Person(name, age) {
    this.name = name
    this.age = age
}

// static
// prototype se can thiep vao constructor cua doi tuong chi su dung cho phuong thuc, prototype la lop doi tuong -> giam quan ly vung nho
Person.prototype.showName = function() {
    console.log(this.name)
}

const teo = new Person("teo", 10)
console.log(teo)

//19. Function Scope () => {}
let a = 10
function doSth() {
    let a = 5
    console.log(a+1)
}
doSth()
console.log(a)

// 20. Function Context
const teo3 = {
    name:"Teo",
    age: 10,
    showName:function() {
        console.log(this.name)
    }
}

// bind dinh nghi cac phuong thuc co tu khoa this
// bind chi dung cho dinh nghia khong thuc thi phuong thuc
const copy = teo3.showName.bind(teo3)
copy()

function run(cb) {
    console.log('run...')
    cb()
}

const mouse = {
    name:"Mickey",
    run: function() {
        console.log(this.name + 'is running')
    }
}

run(mouse.run.bind(mouse))

// 21 : A row function Lambda expression -> chuc nang xu ly
const arr1 = [1,2,3]
const newArr1 = arr1.map((num) => {
    return num*2
})
console.log(arr1, newArr1)

const teo4 = {
    name:"Teo",
    age: 10,
    showName:function() {
        let that = this
        let fn = function() {
            console.log(that.name)
        }
        fn()
    }
}

const teo5 = {
    name:"Teo",
    age: 10,
    showName:function() {        
        let fn = () => {
            let fn2 = () => {
                console.log(this.name)
            }     
            fn2()       
        }
        fn()
    }
}
teo5.showName()

