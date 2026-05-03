const employee = {
  name: "Nirab",
  dept: "Engineering",
  age: 22,
  salary: 50000,
};

const generateDynamicId = ({ name, dept }) =>
  `Employee: ${name}, Dept: ${dept}, ID:${name}_${dept}_${Math.floor(Math.random() * 50000)}`;

console.log(generateDynamicId(employee));
