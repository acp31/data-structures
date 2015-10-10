var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [[k, v]]
  var check = false;
  //if (!this._storage.get()) {
  if(this._storage.get(i)){
    var temp = this._storage.get(i)
    for (var x = 0; x < temp.length; x++) {
      if (temp[x][0] === k) {
        this._storage.set(i, tuple);
        check = true;
      }
    }
    if (!check) {
      temp.push(tuple);
      this._storage.set(i, temp);
    } 
  } 
  else {
    this._storage.set(i, tuple);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(i);
  for (var x = 0; x < temp.length; x++) {
    if (temp[x] !== null && temp[x][0] === k) {
    return temp[x][1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(i);
  for (var x = 0; x < temp.length; x++) {
    if (temp[x] !== null && temp[x][0] === k) {
      temp[x] = [null, null];
    }
  }
  this._storage.set(i, temp);  
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
