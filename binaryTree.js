class TreeNode{
    constructor(value, left, right) {
        this.value = value;
        this.left = left || 0;
        this.right = right || 0;
    }
    setLeft(left){
        this.left = left;
    }
    setRight(right){
        this.right = right;
    }
}
function makeTree(arr){
    let tree = [undefined];
    for(let i = 1; i < arr.length; ++i){
        tree.push(new TreeNode(arr[i]));
    }
 
    for(let i = 1; i < tree.length/2; ++i){
        tree[i].setLeft(tree[2*i]);
        tree[i].setRight(tree[2*i+1]);
    }

    return tree[1];
}

function dfs(curr){
    if(!curr &&!curr.value)return;
    console.log('dfs',curr.value);
    dfs(curr.left);
    dfs(curr.right);
}

function bfs(head){
    let queue = [];
    queue.push(head);
    let curr = head;
    while(queue.length!==0){
        if(curr.left)queue.push(curr.left);
        if(curr.right)queue.push(curr.right);
        console.log(queue.shift().value);
        curr = queue[0];
    }

}

let array = [undefined,1, 2, 3, 4 ,5 ,6, 7, 8,9]
let head  = makeTree(array);
// console.log(head);
// bfs(head);