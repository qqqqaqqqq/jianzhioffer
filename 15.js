//和为S的连续正数序列
// function FindContinuousSequence(sum)
// {
//     let tmp =[]
//     let res =[]
  
//     // write code here
//     for(let i =1;i<200;i++){
//         for(let j=1;j<200;j++){
//             if( i**2+i+2*i*j+2*j==2*sum){
//                 tmp.push([i,j])
//             }
//         }
//     }
    

//     tmp.forEach((el,n)=>{
//         for(let i=0;i<=el[0];i++){
//             res.push(el[1]+i)
//         }
         
//     })

//     return res
// }

function  FindContinuousSequence(sum){
    let l=1
    let r=1
    let tmp = 0
    let res =[]
    while(l<Math.ceil(sum/2)){
        debugger
  
        if(tmp<sum){ 
            tmp+=r
            r++
        }
        else if(tmp>sum){
            tmp-= l
            l++
            
        }
        else{
            let seq=[]
            for(let i=l;i<r;i++) seq.push(i)
            //console.log(l,r);
            res.push(seq)
            tmp-=l
            l++

        }
    }
    return res
    
    
}
console.log(FindContinuousSequence(9));
