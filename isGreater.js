/* Nathan Samano
 * CMP 344
 * JavaScript 101
 * Problem 2
 */

// prints whichever parameter string is lexicographically greater
function isGreater(str1, str2) {
  // make both strings entirely lowercase
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  // determine lexicographical values
  if (str1 > str2)
    print(str1 + " is lexicographically greater than " + str2);
  else if (str2 > str1)
    print(str2 + " is lexicographically greater than " + str1);
  else
    print(str1 + " and " + str2 + " are the same");
}
// test all cases
isGreater("apple", "pear");
isGreater("ChErRy", "bAnanA");
isGreater("Peach", "peach");
