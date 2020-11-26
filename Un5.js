//数组中的逆序对

// function InversePairs(data)
// {
//     let sum =0
//     for(let i=0;i<data.length;i++){
//         for(let j=i;j<data.length;j++){
//             if(data[i]>data[j]) sum++
//         }
//     }
//     return sum
// }
// console.log(InversePairs([1,2,3,4,5,6,7,0]));

// function InversePairs(data)
// {
//     let sum =[]
//     for(let i=0;i<data.length;i++){
//         if(i!=0 && data[i]>=data[i-1]){
//             sum[i] = sum[i-1]
//         }else{
//             for(let j=i;j<data.length;j++){
//                 sum[i]=0
//                 if(data[i]>data[j]) sum[i]++
//             }

//         }

//     }
//     return sum.reduce((x,y)=>{
//         return x+y
//     })
// }
// console.log(InversePairs([1,2,3,4,5,6,7,0]));


function InversePairs(data)
{
    // write code here
  if (!data || data.length < 2) return 0;
  let copy = data.slice(0);
  return countInverse(data, copy, 0, data.length - 1) % 1000000007
}
 
function countInverse(data, copy, left, right) {
  if (left == right) return 0;
  let mid = left + ((right - left) >> 2);
  let c1 = countInverse(copy, data, left, mid);
  let c2 = countInverse(copy, data, mid + 1, right);
  let c3 = merge(data, copy, left, mid, right);
  return c1 + c2 + c3;
}
function merge(data, copy, left, mid, right) {
  let i = left,
      j = mid,
      k = right,
      m = right,
      count = 0;
   
  while (j >= left && k >= mid + 1) {
    if (data[j] > data[k]) {
      copy[m--] = data[j--];
      count = count + k - mid;
    } else {
      copy[m--] = data[k--];
    }
  }
  while (j >= left) {
    copy[m--] = data[j--];
  }
  while (k >= mid + 1) {
    copy[m--] = data[k--];
  }
  return count;
}