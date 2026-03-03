const numbers =[1,2,3,4,5,7,8];
for(const n of numbers){
    // console.log(n);

}
const num ={
    name:"Tushar",
    age: 24,
    university:"NSTU",

}
console.log(num?.name);
for(const n in num){
    const value = num[n];

    console.log(value);
}
