//旋转数组的最小数字
function minNumberInRotateArray(rotateArray)
{
    if(rotateArray.length ==0) return 0
    // write code here
    let i =0
    let j = rotateArray.length-1
    let mid
    
    while(i<j){
        if(i+1==j){
            return rotateArray[j];
        }
        debugger
        let target = rotateArray[j]
        mid = Math.floor((i+j)/2)
        if(rotateArray[mid]>target) 
            i=mid
        else if(rotateArray[mid]<target)
            j=mid
        else if(rotateArray[mid] == target)
            target = rotateArray[j-1]
        else i = mid

    }
return rotateArray[mid]
}

console.log(minNumberInRotateArray([4,5,6,7,8,9,100,1,2,3]));