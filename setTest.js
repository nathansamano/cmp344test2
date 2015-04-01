/* Nathan Samano
 * CMP 344
 * 1. Sets C
 * Union & Difference
 */

load("set.js");

var A = new Set();
var B = new Set();

A.dataStore = [12,72,9,41,13,41];
B.dataStore = [19,32,12,11,70,72];

print(A.union(B).dataStore);
print(A.difference(B).dataStore);
