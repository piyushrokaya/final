// console.log("one")
// setTimeout(() => {
//     console.log('hello')
// }, 2000);
// console.log("two")


// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,sumcallback){
//     sumcallback(a,b);//this will pass a and b in sum function
// }
//calculator(1,2,sum);//sum is already defined function 
//only use sum as parameter


// function calculator(a,b,sumcallback){
//     sumcallback(a,b);

// }
// calculator(1,2,(a,b)=>{
//     console.log(a+b);
// })

//callback hell:nested callbacks stacked below one another forming pyramid structure.
// function getData(dataId,getNextData){
//     setTimeout(() => {
//         console.log("data",dataId);
//        if( getNextData){
//         getNextData();         //if getnextdata exists then only call getnextdata function
//        }
//     }, 2000);
// }
// getData(1,()=>{  //getData is callback cant use directly getData(2) so used arrow function it wont execute immediately
//     console.log("loading data 2...")          
//     getData(2);
// });


//to solve callback hell promises are used
//promises
//let promise=new Promise((resolve,reject)=>{...})
