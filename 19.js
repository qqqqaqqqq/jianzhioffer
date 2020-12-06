//剪绳子

function cutRope(n)
{
    if (n ==2) return 1
    let res = -1
    for(let i=0;i<n;i++){
        res = Math.max(res,Math.max(i*cutRope(n-i),i*(n-i)))

    }
    return res
}
console.log(cutRope(8));