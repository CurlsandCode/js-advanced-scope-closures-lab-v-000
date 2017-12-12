



function produceTipCalculator(tenPercentTip){
  return function(rideFare){
    return rideFare * tenPercentTip;
  }
}