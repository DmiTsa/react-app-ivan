function amountOfPages(summary) {
  // 1 2 3 4 5 6 7 8 9 10 11 12
  let countPages = 0;

  //countPages 1-9 str  => summary -  needSummary +=1 9*1 max 9 did
  if (summary <= 9) {
    countPages = summary;
    return countPages;
  } else {
    countPages += 9;
    summary -= 9;
  }
  //countPages 10-99 str  => summary - needSummary +=2 90*2 max 180 did
  if (summary < 180) {
    countPages += summary / 2;
    return countPages;
  } else {
    countPages += 90;
    summary -= 180;
  }
  //countPages 100-999 str  => summary - needSummary +=3 900*3 max 2700 did
  if (summary < 2700) {
    countPages += summary / 3;
    return countPages;
  } else {
    // countPages +=90;
    // summary -= 180;
  }

  return countPages;
}

console.log(amountOfPages(5)); //5
console.log(amountOfPages(25)); //17
console.log(amountOfPages(1095)); //401
console.log(amountOfPages(185)); //97
