//二叉树深度
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function TreeDepth(pRoot)
{
    // write code here
    if(!root) return 0
    let left = TreeDepth(pRoot.left)
    let right = TreeDepth(pRoot.right)
    return Math.max(left,right)+1
}