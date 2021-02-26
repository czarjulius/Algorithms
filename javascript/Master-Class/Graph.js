class Graph{
  constructor(){
    this.adjacencyList = {}
  }
  
  addVertex(vertex){
    if(!this.adjacencyList[vertex]){
        this.adjacencyList[vertex] = []
    }
  }
  
  addEdge(vertex1, vertex2){
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }
  
  removeEdge(vertex1, vertex2){
    const vertex1Array = this.adjacencyList[vertex1]
    vertex1Array.splice(vertex2, 1)
    const vertex2Array = this.adjacencyList[vertex2]
    vertex2Array.splice(vertex1, 1)
  }
  
  removeVertex(vertex){
    while(this.adjacencyList[vertex].length){
      const adjacentVertex = this.adjacencyList[vertex].pop()
      this.removeEdge(vertex, adjacentVertex)
    }
    delete this.adjacencyList[vertex]
  }

  depthFirstRecursive(start){
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex){
        if(!vertex) return null;
        visited[vertex] = true;
        result.push(vertex);
        adjacencyList[vertex].forEach(neighbor => {
            if(!visited[neighbor]){
                return dfs(neighbor)
            }
        });
    })(start);

    return result;
}
depthFirstIterative(start){
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while(stack.length){
        currentVertex = stack.pop();
        result.push(currentVertex);

        this.adjacencyList[currentVertex].forEach(neighbor => {
           if(!visited[neighbor]){
               visited[neighbor] = true;
               stack.push(neighbor)
           } 
        });
    }
    return result;
}
breadthFirst(start){
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;

    while(queue.length){
        currentVertex = queue.shift();
        result.push(currentVertex);
       

        this.adjacencyList[currentVertex].forEach(neighbor => {
            if(!visited[neighbor]){
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        });
    }
    return result;
}
} 

// let g = new Graph()
// g.addVertex('Enugu')
// g.addVertex('Imo')
// g.addVertex('Lagos')
// g.addEdge("Imo", "Enugu")
// g.addEdge("Lagos", "Enugu")
// g.removeEdge("Imo", "Enugu")
// g.removeVertex("Imo")
// console.log(g)