//二进制1的个数

// function NumberOf1(n)
// {
//     // write code here
//     let count = 0
//     let tmp = 0
//     while(n!=0 ){
//         tmp = n%2
//         if(tmp==1) count++
//         n=Math.floor(n/2)
//     }    
//     return count
// }


function NumberOf1(n){
    let count = 0
    while(n!=0){
        count++
        n=n&(n-1)
    }
    return count
}
console.log(NumberOf1(10));