// A company has n employees with a unique ID for each employee from 0 to n - 1. The head of the company is the one with headID.

// Each employee has one direct manager given in the manager array where manager[i] is the direct manager of the i-th employee, manager[headID] = -1. Also, it is guaranteed that the subordination relationships have a tree structure.

// The head of the company wants to inform all the company employees of an urgent piece of news. He will inform his direct subordinates, and they will inform their subordinates, and so on until all employees know about the urgent news.

// The i-th employee needs informTime[i] minutes to inform all of his direct subordinates (i.e., After informTime[i] minutes, all his direct subordinates can start spreading the news).

// Return the number of minutes needed to inform all the employees about the urgent news.

const managersArray = [2, 2, 4, 6, -1, 4, 4, 5];
const informTimeArray = [0, 0, 4, 0, 7, 3, 6, 0];

const numOfMinutes = function (n, headID, managers, informTime) {
  const adjList = managers.map(() => []);

  for (let employee = 0; employee < n; employee++) {
    const manager = managers[employee];
    if (manager === -1) continue;

    adjList[manager].push(employee);
  }

  return dfs(headID, adjList, informTime);
};

const dfs = function (currentId, adjList, informTime) {
  if (adjList[currentId].length === 0) {
    return 0;
  }

  let max = 0;
  const subordinates = adjList[currentId];
  // for (let i = 0; i < subordinates.length; i++) {
  //   max = Math.max(max, dfs(subordinates[i], adjList, informTime));
  // }

  return max + informTime[currentId];
};

console.log(numOfMinutes(8, 4, managersArray, informTimeArray));
