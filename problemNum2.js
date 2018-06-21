var firstNum = 0,
    secondNum = 1,
    lastNum = 4000000,
    nextNum = 0,
    sum = 0;
  while ( (firstNum + sum) <= lastNum) {
    nextNum = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = nextNum;
  if (firstNum % 2 == 0) {
    sum += firstNum;
  }
}
    console.log(sum);
