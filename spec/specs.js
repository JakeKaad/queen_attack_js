describe('queenAttack', function() {
  it('is false if the coordinates are not horizontally, vertically, or diagonally in line', function() {
    expect(queenAttack([1, 1], [2, 3])).to.equal(false);
  });

  it('is true if the coordinates are horizontally aligned', function() {
    expect(queenAttack([1, 1], [2, 1])).to.equal(true);
  });

  it('is true if the coordinates are vertically aligned', function() {
    expect(queenAttack([1, 1], [1, 2])).to.equal(true);
  });

  it('is true if the coordinates are diagonally aligned up and right and down left', function(){
    expect(queenAttack([1, 1], [2, 2])).to.equal(true);
  });

  it('is true if the coordinates are diagonally alligned up and left or down and right', function (){
    expect(queenAttack([2,1], [1,2])).to.equal(true);
  });
});
