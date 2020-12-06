//dp题
//746 min climbing stairs
// var minCostClimbingStairs = function(cost) {
//     debugger
//     let dp=new Array(cost.length)
//     dp[0] = cost[0]
//     dp[1] = cost[1]
//     for(let i=2;i<cost.length;i++){
//         dp[i] = Math.min(dp[i-1],dp[i-2])+cost[i]
//     }
//     return Math.min(dp[cost.length-1],dp[cost.length-2])

// };
// var minCostClimbingStairs = function(cost) {
//     debugger
//     let a = cost[0]
//     let b = cost[1]
//     let t 
//     let res 
//     for(let i=2;i<cost.length;i++){
//         t = cost[i] +Math.min(a,b)
//         a = b
//         b = t
//     }
//     return Math.min(a,b)

// }

//53 最大子序和
// var maxSubArray = function(nums) {
//     debugger
//     let dp= new Array(nums.length)
//     let tmp = nums[0]
//     dp[0] = nums[0]
    
     
//     for(let i =1;i<nums.length;i++){
//         // dp[i] = Math.max(dp[i-1],
//         // Math.max(dp[i-1]+nums[i],nums[i]))
//         dp[i] = Math.max(nums[i] ,dp[i-1]+nums[i])
//         tmp = Math.max(dp[i],tmp)
//     }
//     return tmp

// };
//199 打家劫舍
// var rob = function(nums) {
//     debugger
//     let dp = new Array(nums.length)
//     dp[0] = nums[0]
//     dp[1] = Math.max(nums[0],nums[1])
//     for(let i=2;i<nums.length;i++){
//         dp[i] = Math.max(dp[i-2]+nums[i],dp[i-1])

//     }
//     return dp[nums.length-1]

// };
//647 回文字符串
// var countSubstrings = function(s) {
//     let dp = new Array()
//     let count =0
//     for (let i=0;i<s.length;i++){
//         dp[i] = new Array(s.length)
//     }
//     //console.log(dp);
    
//     debugger
//     for(let i=s.length-1;i>=0;i--){
//         for(let j=s.length-1;j>i-1;j--){
//             if(i==j){
//                 dp[i][j] = 1 
//                 count++
//             }
//             else if(j-i ==1 && s[i]==s[j]){
//                 dp[i][j] =1
//                 count++
                
//             }
//             else if(j-i>1&& s[i]==s[j] && dp[i+1][j-1]==1){
//                 dp[i][j] =1
//                 count++
                
//             }
//         }
//     }
//     return count
// };
// var countSubstrings = function(s){
//     debugger
    
//     let count =0
//     for(let i = 0; i < s.length;i++) {
//         count+=helper(s,i,i );
//         count+=helper(s,i,i+1 );
//     }
//     return count
    
    
// }
// var helper = function(s,i,j ){
//     debugger
//     let res =0
//     while(i>=0 && j<s.length){
//         if(s[i]==s[j]){
//             i--
//             j++
//             res++
//         }
//         else break
//     }
//     return res
     
// }
// console.log(countSubstrings('aaa'));
// console.log(helper('aaa',0,0,0));
//413等差数列划分
// var numberOfArithmeticSlices = function(arr) {
//     debugger
//     let count =0
//     let dp = Array.from({length:arr.length},()=>0)
    
//     for(let i=2;i<arr.length;i++){
//         if(arr[i]+arr[i-2]==2*arr[i-1]){
//             dp[i]= dp[i-1] +1
//             count+=dp[i]
//         }
//     }
//     return count

// };
// console.log(numberOfArithmeticSlices([1,2,3,4]));
//还可以用两个常数保存
//连续子数组最大值
// var maxSubArray = function(nums) {
//     let dp=new Array(nums.length)
//     dp[0] = nums[0]
//     let res = nums[0]
//     for(let i=0;i<nums.length;i++){
//         dp[i] = dp[i-1] +nums[i]
//         res = Math.max(res,dp[i])
//     }
//     return res
// };
//三步问题
// var waysToStep = function(n) {
//     let dp =new Array(n)
//     dp[0] = 1
//     dp[1] = 2
//     dp[2] = 4
//     for(let i=3;i<n;i++){
//         dp[i] = dp[i-1] +dp[i-2]+dp[i-3]
//     } 
//     return dp[n-1]
// };

//礼物的最大价值(不新建空间 直接在grid上操作，提高效率)
// var maxValue = function(grid) {
//     debugger
//     let m = grid.length
//     let n = grid[0].length
//     let dp = new Array(m)
//     for(let i=0;i<m;i++){
//         dp[i] = new Array(n)
//     }
//     dp[0][0] = grid[0][0]
//     for(let i=0;i<m;i++){
//         for(let j=0;j<n;j++){
//             if(i==0 &&j!=0) {dp[i][j] = dp[i][j-1]+grid[i][j]}
//             else if(j==0 &&i!=0) {dp[i][j] = dp[i-1][j]+grid[i][j]}
//             else if(i>0 && j>0)
//                 {dp[i][j] = Math.max(dp[i][j-1],dp[i-1][j])
//                 +grid[i][j]}

//           }
//     }
//     return dp[m-1][n-1]
// };

// console.log(maxValue([
//     [1,3,1],
//     [1,5,1],
//     [4,2,1]
//   ]));
//516. 最长回文子序列
// var longestPalindromeSubseq = function(s) {
//     debugger
//     let helper = function(l,r,s){       
//         while(l>0 && r<s.length-1){
//             if(s[l]!=s[r]){
//                 break
//             }
//             l--
//             r++
            
//         }
//         return r-l+1
//     }
//     let max = 0
//     for(let i=0;i<s.length;i++){
//         s1= helper(i,i,s)
//         s2= helper(i,i+1,s)
//         max = Math.max(Math.max(s1,s2),max)
//     }
//     return max

// };
// console.log(longestPalindromeSubseq("bbbab"));
// //以上只能求子串  不能求子序列
var longestPalindromeSubseq = function(s){
    debugger
    let dp = new Array(s.length)
    for(let i=0;i<s.length;i++){
        dp[i] = new Array(s.length)
    }
    
    for(let i=s.length-1;i>0;i--){
        dp[i][i] = 1
        for(let j=i+1;j<s.length-1;j++){
            if(s[i] ==s[j]){
                dp[i][j] = dp[i+1][j-1] +2
            }

            else{
                dp[i][j] ==Math.max(dp[i+1][j],dp[i][j-1])
            }
        }

    }
    return dp[0][s.length-1]
}
console.log(longestPalindromeSubseq("bbbab"));