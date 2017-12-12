function produceDrivingRange(blockRange){
  return function(start, end){
  let startBlock = parseInt(start);
  let endBlock = parseInt(end);
  let distance = Math.abs(startBlock - endBlock)

  if (distance > blockRange) {
    return `${distance - blockRange} blocks out of range`
  } else {
    return `within range by ${blockRange - distance}`
  }
}
}





function produceTipCalculator(tenPercentTip){
  return function(rideFare){
    return rideFare * tenPercentTip;
  }
}
function createDriver(){
  let driverId = 0

  return class {
    constructor(name){
      this.name = name
      this.id = ++driverId;
    }
  }
}
