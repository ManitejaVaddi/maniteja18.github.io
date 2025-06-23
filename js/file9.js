// arrays

// const score=[1,2,7,5,3];
// console.log(score)
// console.log(score[0]);
// score.push(9)
// console.log(score)
// console.log(score.length)
// const score1=[7,8,9]
// const newscore=[...score,...score1]
// console.log(newscore);

let cart={};
const products=[
    {id:1,name:"Product1",price:25},
    {id:2,name:"product2",price:50},
    {id:3,name:"product3",price:75},
];
function addToCart(id){
    cart={ ...cart,[id]:1};
}
addToCart(1);
addToCart(3);
console.log(cart);