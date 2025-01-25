let data=42;
let dataCopy=data;
dataCopy=49
console.log(data);

const obj= {data:42}
const objCopy=obj
objCopy.data=60
console.log(obj.data);

let n=99
let ans=(n%2==0)?"Even":"Odd"
console.log(ans);

let mark=60
let grade=(mark>=90)?"A":(mark>70)?"B":(mark>40)?"C":"F"
console.log(grade);

let arr=[1,2,,3,4,5,6]
let arr2=[7,8,9]
let arrMerge=[...arr,...arr2]
console.log(arrMerge);

