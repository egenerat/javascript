// Reduce array
console.log("Reduce array: sum elements");

sum = [1, 2, 3].reduce( (acc, curr) => acc + curr, 0);
console.log(sum);

// Reduce array of arrays
sum_second_elements = [ [1, 2], [3, 4], [5, 6] ].reduce( (acc, [first, second]) => acc + second, 0);
console.log(sum_second_elements);
