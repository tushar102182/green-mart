// function multiply(a,b=1){
//     let ans = a*b;
//     console.log(ans+ ": is the answer")



// }
// multiply(5);
// function add(a,b){
//     let sum = a+b;
//     console.log(sum + ": is the sum")
// }
// add(5,3);

// function card( heading,price,description){
// const div =
//    ` <div>
//         <h2>
//             ${heading.toUpperCase()}
//         </h2>
//         <p>
//             ${price}

//         </p>
// <p>
//     ${description};
// </p>

//     </div>`
//     console.log(div);
// }

// card("Cute Apple","$1.99","A clean and beautiful apple for your healthy lifesyle")

// const differance = (a,b=2) => a-b;
// console.log(differance(6));


// const person ={name :"tushar",age :"24"};
// person.salary =59999;
// const person2 = {...person};

// console.log(person);
// console.log(person2);

const {name,price,... rest} = { 
    name :"iPhone" ,
     price : 5000 ,
      brand :"Apple",
      camara:"12MP",
      color:"white",
    };
console.log(rest);