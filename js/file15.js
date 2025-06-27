//json
// const student='{name: "Mani", age: 20}'
// console.log(student.name)


const student='{"name":"Mani","age": 20}'
const obj=JSON.parse(student)
console.log(obj.name)
console.log(JSON.stringify(obj))