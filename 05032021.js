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
