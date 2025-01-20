
// // const temp=[1,2,3,4]
// // for(let x in temp){
// // console.log("x:",x)
// // }
// // for (let x of temp){
// //     console.log("x:",x)
// // }
// //largest no
// // function getlargest(arrx){
// //     let max=arrx(0)
// //     for (let i of arrx){
// //         if (imax){
// //             max=i
// //         }
// //     }
// //     return max
// // }
// // console.log(getlargest([1,2,3,4,55]))


// const getsquare=(x) => {
//     return x*x
// }
// console.log(getsquare(3))

let numbers=[1,2,3,4]
let squares =numbers.filter((x)=>{
    return x%3===0
})
console.log("squares:",squares)

