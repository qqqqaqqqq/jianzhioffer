//寻找1-n中的1
function NumberOf1Between1AndN_Solution(n)
{
    // write code here
    if(n<9) return 1
    let str = n+''
    let digit = 1
    let high 
    let low  
    let cur  = 0
    let count = 0
    for(let i =str.length;i>0;i--){
        debugger
        cur =str[i-1]
        high = +str.slice(0,i-1)
        low = +str.slice(i)

        if(cur ==0){
            count += high*digit
        }
        else if(cur ==1){
            count += high*digit +low +1
        }
        else{
            count += high*digit +digit

        }
        digit *= 10
    }
    return count
}

console.log(NumberOf1Between1AndN_Solution(10));