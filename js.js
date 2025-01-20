
// // // // // // // const temp=[1,2,3,4]
// // // // // // // for(let x in temp){
// // // // // // // console.log("x:",x)
// // // // // // // }
// // // // // // // for (let x of temp){
// // // // // // //     console.log("x:",x)
// // // // // // // }
// // // // // // //largest no
// // // // // // // function getlargest(arrx){
// // // // // // //     let max=arrx(0)
// // // // // // //     for (let i of arrx){
// // // // // // //         if (imax){
// // // // // // //             max=i
// // // // // // //         }
// // // // // // //     }
// // // // // // //     return max
// // // // // // // }
// // // // // // // console.log(getlargest([1,2,3,4,55]))


// // // // // // const getsquare=(x) => {
// // // // // //     return x*x
// // // // // // }
// // // // // // console.log(getsquare(3))

// // // // // let numbers=[1,2,3,4]
// // // // // let squares =numbers.filter((x)=>{
// // // // //     return x%3===0
// // // // // })
// // // // // console.log("squares:",squares)

// // // // const firstfunction =() =>{
// // // //     console.log("I am first function")
// // // //     const secondfunction=()=>{
// // // //         console.log("second function")
// // // //     }
// // // // return secondfunction
// // // // }
// // // // const closure =firstfunction()
// // // // console.log("closure:",closure)
// // // // closure()

// // // const incrementdecrement =()=>{
// // //     let count=0
// // //     return{
// // //         increment: ()=>{
// // //             count ++
// // //         },
// // //         decrement : ()=>{
// // //             count--
// // //         },
// // //         getcount : ()=>{
// // //             return count
// // //         }

// // //     }
// // // }
// // // const counter =incrementdecrement()
// // // console.log("counter:",counter)
// // // counter.increment()
// // // counter.increment()
// // // console.log("count:",counter.getcount())
// // // //function inside function access from outside is closure


// // //callbacks
// // const sum =(x,y,callback)=>{
// // let temp=x+y
// // callback(temp)
// // }
// // sum=(5,10,(s)=>{
// //     console.log("the sum of the numbers is:",s))
// // })


// //promise
// const newpromise=new Promise((resolve,reject)=>){//resolve ra reject callback 
// let data="data from server"
// if(data){
//     resolve(data)//siddhai data rakhera execute
// }else {
//     reject("no data found ")
// }
// }

// newpromise //unknownword new promise
// .then((result)=>{
//     console.log("result:",result)
// }).catch((error)=>{
//     console.log("error:",error)
// }).finally(()=>{
//     console.log("promisedone")//resolve reject vayeni navayeni run
// })


    

// authenticate garna multiple promise use
// predefine modules and 
