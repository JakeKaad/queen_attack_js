var queenAttack = function(start, finish) {
  if (start[1] === finish[1]) {
    return true;
  } else if (start[0] === finish[0]) {
    return true;
  } else if (isDiagonalMovement(start, finish)) {
    return true;
  } else {
    return false;
  }
};

var isDiagonalMovement = function(start, finish) {
  var movementArray = [];
  movementArray.push(Math.abs(start[0] - finish[0]));
  movementArray.push(Math.abs(start[1] - finish[1]));
  if (equalArray(movementArray, [1, 1])) {
    return true;
  } else {
    return false;
  }
};

var equalArray = function(arr1, arr2) {
  return (arr1[0] === arr2[0] && arr1[1] === arr2[1]);
};
