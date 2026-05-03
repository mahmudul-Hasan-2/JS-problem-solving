const myTasks = [
  { title: "Fix Mic Issue", priority: "High", completed: false },
  { title: "Update GitHub Readme", priority: "High", completed: true },
  { title: "Learn TypeScript", priority: "Low", completed: false },
  { title: "Complete JS Challenge", priority: "High", completed: false },
  { title: "Buy New Earphones", priority: "Medium", completed: true },
];

const newArr1 = [];

for (let myTask of myTasks) {
  if (myTask.priority === "High" && !myTask.completed) {
    newArr1.push(myTask);
  } else if (myTask.completed) {
    myTask.title = `${myTask.title}!`
  }
}

console.log(newArr1);
console.log(myTasks);
