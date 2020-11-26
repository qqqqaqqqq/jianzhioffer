//镜像二叉树

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root)
{
    // write code here
    if(!root) return null
    
    Mirror(root.left)
   
    Mirror(root.right)
    [root.left,root.right] = [root.right,root.left]
    return root
}