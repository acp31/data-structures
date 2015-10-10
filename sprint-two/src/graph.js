

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  var someInstance = Object.create(Graph.prototype);
  someInstance.storage = {};
  return someInstance;
};


// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this.storage[node] = {};
  this.storage[node].value = node;
  this.storage[node].edge = [];
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  return !!this.storage[node];
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  delete this.storage[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  for (var i = 0; i < this.storage[fromNode].edge.length; i++) {
    if (this.storage[fromNode].edge[i] === toNode) {
      return true;
    }
  }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  this.storage[fromNode].edge.push(toNode);
  this.storage[toNode].edge.push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
 for (var i = 0; i < this.storage[fromNode].edge.length; i++) {
    if (this.storage[fromNode].edge[i] === toNode) {
      delete this.storage[fromNode].edge[i];
    }
  }

   for (var i = 0; i < this.storage[toNode].edge.length; i++) {
    if (this.storage[toNode].edge[i] === fromNode) {
      delete this.storage[toNode].edge[i];
    }
  }
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  for (var key in this.storage) {
    cb(this.storage[key].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



