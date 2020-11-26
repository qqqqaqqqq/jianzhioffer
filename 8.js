function jumpFloorII(number)
{
    // write code here
    if(number==1||0) return 1
    while(number>0){
        number--
        return jumpFloorII(number)*2
        
    }
}
console.log(jumpFloorII(4));