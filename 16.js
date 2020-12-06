//扑克牌顺子
function IsContinuous(numbers)
{
    debugger
    // write code here
    if(numbers.length==0) return false
    let flag=0
    let seq = []
    let count = 0
    let arr = numbers.sort()
 
    
    arr.forEach(el=>{
        if(el!=0 && seq.indexOf(el)==-1){
            seq.push(el)
            
        }
        else if(el==0) flag++
    })
    
   
    if(flag+seq.length!=arr.length) return false
    // for(let i=1;i<seq.length;i++){
    //     if(seq[i]!=head+i && flag==0) return false
    //     else if(seq[i]!=head+i && flag>0){
    //         flag--
    //         continue
    //     }
        
    // }
    // return true
    minus = seq[seq.length-1] - seq[0]
    if(minus>=flag+seq.length) return false
    return true
}

console.log(IsContinuous([1,1,0,0,0]));