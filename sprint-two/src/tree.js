var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [null, null, null] // fix me 

  return newTree;
};

/*
var node = {
    value: 125,
    left: null,
    right: null
};
*/



var treeMethods = {};

treeMethods.addChild = function(value){
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i] === null) {
      this.children[i] = Tree(value);
      break;
    }
  }
};

treeMethods.contains = function(target){
  var result = false;

  var searchTree = function(branch){
    if(branch.value === target){
      result = true;
    }
    for(var i = 0; i < branch.children.length; i++){
      if(branch.children[i] !== null){
        searchTree(branch.children[i]);
      }
    }
    
  };
  searchTree(this);
  return result;
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
