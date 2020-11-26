//构建乘积数组
function multiply(array)
{
    // write code here
    let res =Array.from({length:array.length},()=>1)
    for(let i =0;i<array.length;i++){
        for(let j=0;j<array.length;j++){
            if(j!=i) res[i] =arr[j]*res[i]
        }

    }
    return res
}