var first_num = 0,
  secon_num = 1,
  last_num = 4000000,
  next_num = 0,
  sum = 0;

while ((first_num + sum) <= last_num) {
  next_num = first_num + second_num;
  first_num = second_num;
  second_num = next_num;
  if (first_num % 2 == 0) {
    sum += first_num;
  }
}
console.log(sum);
