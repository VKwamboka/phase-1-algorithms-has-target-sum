function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i < array.length; i++){
    let compNUm = target - array[i];
    for(let j = i + 1; j < array.length; j++){
      if(array[j] === compNUm){
        return true
      }
    }
  }
  return false
}
console.log(hasTargetSum([22, 19, 4, 6, 30], 25))

/* 
  Write the Big O time complexity of your function here
  1st loop = o(n)
  2nd loop = o(n)
  total time complexity = o(n^2)
*/

/* 
  Add your pseudocode here
  1. Write a function
  2. loop 1st round to find a number
  3. Loop 2nd round to find another number that can be added to the number to equal to target
  4. Return true if number is found 
  5. else return false
*/

/*
  Add written explanation of your solution here
  A function to take array of numbers, a target and within the array, 
  find the two numbers thad add up to the target. Return the indexes of the numbers.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 9, 4, 16, 3], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([11, 2, 5], 14));
}

module.exports = hasTargetSum;
