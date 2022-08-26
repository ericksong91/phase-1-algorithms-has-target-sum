// function hasTargetSum(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     //until i is no longer true, keep iterating through the array
//     console.log(`Index # ${i}`)
//     //define j as a skeleton variable for the later loops
//     let j = array.length - 1

//     for (let k = 0; array[i] != array[j]; k++) {
//       //this 2nd for loop keeps going until the array[i] is equal to array[j]
//       console.log(`Index lower # ${k}`)
//       //j is now used to move in backwards from the end of the array
//       j = array.length - 1 - k
//       if (i === j) {
//       //this first if statement is purely to check to make sure that i and j aren't looking at the same position
//       } else {
//         if (array[i] + array[j] === target) {
//           //this final conditional sees if the sum is equal to the target
//           console.log(array[i])
//           console.log(array[j])
//           return true
//         }
//       }
//     }
//   }
//   return false
// }

//Alternate solution above that walks j from the other end of the array instead of from where i begins

function hasTargetSum(array, target) {
  for (let i = 0; i < array.length - 1; i++) {
    //i targets const position in array while second loop runs
    //i will mutate until it is no longer a value less than the length of the array
    console.log(`Index # ${i}`)
    //defining j here so i can use it in the next for loop
    let j = i
    for (let k = 1; j < array.length - 1; k++) {
      console.log(`Index lower # ${k - 1}`)
      //j will increase by whatever i is + 1, etc until it reaches the end of the array
      j = i + k
        if (array[i] + array[j] === target) {
          //conditional that checks whether the sum is equal to the target, returns to the loop if not true
          console.log(array[i])
          console.log(array[j])
          return true
        }
      }
    }
    //if all conditions are checked and it does not find the solution, returns false
    return false
  }

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  
function load array
  passes array and target to a loop function

function loop array
  loops the array so that every element adds to every other element

  for let i = 0, i < array.length , i++ (i will target array position)
    let j = array.length - 1 (sets its to the end)
     (for let k = 0, j !== i (loop until these are equal), k++
      j = array.length - 1 - k
      if i === j do nothing, else
        if array[i] + array[j] === target
         return true, else loop back)

Essentially a really big nested loop

*/

/*
  Add written explanation of your solution here

  Need to make it so that it checks any combination of two numbers and returns true or false if it equals the second argument (target).

  Using 3 different variables for the two loops that I need. The first loop chooses the first number in the array (going from left to right)
  by maintaining i as a constant during the other loop. The second loop mutates j so that it runs through every other number in the array,
  adding it to i until a solution is found. In the second loop as well, there is a conditional to check for the sum of the arrays at position
  i and j to see if it equals the target. If not found in the second loop, it returns to the first loop and increase i by 1, moving towards
  the next number in the array. 

  An alternate solution i found that is lengthier, is having the variable j move in from the end of the array towards i instead of
  mutating from i onwards. 



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
}

module.exports = hasTargetSum;
