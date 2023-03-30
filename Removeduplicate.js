// 2. Only unique items are allowed.
// You are building a program that takes an array of numbers as input and you need to remove all the duplicates
// from the array. You want to write a function that can accomplish this task efficiently and returns a new set that
// contains only the unique elements.




function removeDuplicates(array) {
    return new Set(array);
  }

  const numbers = [1, 2, 3, 2, 4, 5, 1, 6];
  const uniqueNumbers = removeDuplicates(numbers);
  console.log(uniqueNumbers);
  