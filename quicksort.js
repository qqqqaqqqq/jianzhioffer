// function quickSort(arr,l,r){
//     if(l<r){
//         let i = l
//         let j =r
//         x = arr[l]
//         while(i<j){
//             while(i<j && arr[j]>=x) j--
//             if(i<j) arr[i++] =arr[j]
//             while(i<j && arr[i]<x) i++
//             if(i<j) arr[j--] = arr[i]
//         }
//         arr[i] = x
//         quickSort(arr,l,i-1)
//         quickSort(arr,i+1,r)
        
//     }
//     return arr
// }
// var res = quickSort([9,8,7,6,5,3,4,2],0,7)
// console.log(res);

function quickSort2(arr){
    let index
    let pivot
    let left=[]
    let right=[]
    if(arr.length<2) 
        return arr
    index = Math.floor(arr.length/2)
    pivot = arr[0]
   

    for(let i=1;i<arr.length;i++){
        if(pivot>arr[i]){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return quickSort2(left).concat(pivot,quickSort2(right))
}

var res = quickSort2([9,8,8,6,6,6,4,6,5,3,4,2],0,7)
console.log(res);
