//矩形覆盖
function rectCover(number)
{
    // write code here
    if(number<3) return number
  
    let a =1 
    let b =2
    while(number>2){
        b = a+b
        a = b-a
        number--
    }
    return b
} 