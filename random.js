/* Nathan Samano
 * CMP 34
 * JavaScript 101
 * Problem 1
 */

// create array
var arr = [];

// populate array with 20 random numbers between 10 and 200
for (var i = 0; i < 20; i++) {
  arr[i] = Math.floor((Math.random() * 200) + 10);
}

print(arr);
