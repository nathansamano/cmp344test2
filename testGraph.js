/* Nathan Samano
 * CMP 344
 * Practicum 2 Graphs
 */

load("myGraph.js");

// create graph and make edges
g = new Graph(6);
g.addEdge(0,1);
g.addEdge(0,5);
g.addEdge(1,2);
g.addEdge(1,4);
g.addEdge(2,5);
g.addEdge(3,4);
g.showGraph();

/* two paths to note from 0 to 5 are
 * 0-5 and 0-1-2-5
 */

// Run breath-first for SPF
g.bfs(0);
var vertex = 5;  // destination
var source = 0;  // start point
var paths = g.pathTo(source, vertex);
g.showPath(paths);
print(" ");
