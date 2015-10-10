var BinarySearchTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  _.extend(newTree, BinarySearchTreeMethods)

  return newTree;
};

var BinarySearchTreeMethods = {};

BinarySearchTreeMethods.insert = function(value) {
  //if there is no value insert a node
  if(this.value === undefined){
    this.value = value;
  }else{
  var searchTree = function(branch){
    if (branch.value > value){
    if(branch.left === null){
      branch.left = BinarySearchTree(value);
    }
    else {
      searchTree(branch.left);
    }
  }else if (branch.value < value){ 

    if(branch.right === null){
      branch.right = BinarySearchTree(value);
    }
    else {
      searchTree(branch.right);
    } 
   }
  };
  searchTree(this);
  }
};

BinarySearchTreeMethods.contains = function(value) {
  var result = false;
  var searchTree = function(branch) {
   if (branch.value === value) {
      result = true;
      return;
    }
   if (branch.value > value){
    if(branch.left === null){
      return;
    }
    else {
      searchTree(branch.left)
    }
  }
   if (branch.value < value){
    if(branch.right === null){
      return;
    }
    else {
      searchTree(branch.right)
    }
  }
 };
 searchTree(this);
 return result;
};

BinarySearchTreeMethods.depthFirstLog = function(cb) {
  var searchTree = function(branch) {
    cb(branch.value);
    for (var key in branch) {
      if (typeof branch[key] === 'object' && branch[key] !== null) {
        searchTree(branch[key]);
      }
    }
  };
  searchTree(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
