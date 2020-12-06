//数组重复数字
let duplication = []
// function duplicate(numbers, duplication)
// {
//     // write code here
//     //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
//     //函数返回True/False
//     let map ={}
//     debugger
//     // numbers.forEach(el=>{
//     //     if(map[el]){
//     //         duplication[0] = el
//     //         console.log(duplication[0]);
//     //         return true
//     //     }
//     //     else
//     //         map[el] = 1
//     // })
//     for(let i=0;i<numbers.length;i++){
//         if(map[numbers[i]]){
//             duplication[0] = numbers[i]
//            console.log(numbers[i]);
//             return true 
//         }
//         else map[numbers[i]] = 1
//     }
//     return false
// }
function duplicate(numbers,duplication){
    for(let i =0;i<numbers.length;i++){
        while(i!=numbers[i]){
            if(numbers[i]!=numbers[numbers[i]]){
               [ numbers[i],numbers[numbers[i]]]=[numbers[numbers[i]],numbers[i]]
            }else{
                duplication = numbers[i]

                return true
            
            }
        }
    }
}

console.log(duplicate([6,3,2,0,2,5,0],duplication));