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



$(document).ready(function() {
  $("form#queen-attack").submit(function(event){
    var x1 = parseInt($("input#x1").val());
    var y1 = parseInt($("input#y1").val());
    var x2 = parseInt($("input#x2").val());
    var y2 = parseInt($("input#y2").val());
    var result = queenAttack([x1, y1], [x2, y2]);

    if (result) {
      $(".not").text("");
      $("#result").show();
    } else {
      $(".not").text(" not");
      $("#result").show();
    };
    event.preventDefault();
  });
});
