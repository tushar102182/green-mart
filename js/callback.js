// function  marry (name,isStablish,ludu,patri){

//     if(isStablish){
//         ludu(patri)
//     }
// return ;



// }
// function ludu(name){
// console.log("kobul",name)
// }

// marry("tomi",true,ludu,"afsana")

// one line code

const numbers =[1,2,3];
const double = numbers.map(num=>num*2);
// console.log(double)
const filter = numbers.filter((num)=>num%2===0);
// console.log(filter);
const info =[
{name:"khaled",age:13},
{name:"rashed",age:23},
{name:"tuhin",age:3},
{name:"rakib",age:33},
{name:"rakib",age:25},


]
const again = info.filter((name)=>name.age>21);
const reduce = numbers.reduce((acc,sum)=>acc+sum,0);
let Each=[];
const forEach = numbers.forEach(n=> {Each.push(n*2)});
console.log(Each);
