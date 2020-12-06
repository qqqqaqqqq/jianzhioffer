//中位数
function Insert(num)
{
    // write code here
    let arr =[]
    arr.push(num)
}
function GetMedian(arr){
	// write code here
    arr.sort()
    if(arr.length%2==0) 
        return (arr[arr.length/2] + arr[arr.length/2-1])/2
    else 
        return arr[Math.ceil(arr.length/2)-1]
}
console.log(GetMedian([1,3,6,8,5,7]));