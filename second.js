const investors = [
  { name: "Elon", budget: 100000 },
  { name: "Mark", budget: 40000 },
  { name: "Jeff", budget: 80000 },
  { name: "Bill", budget: 30000 },
  { name: "Jensen", budget: 150000 },
];

const minRequired = 50000;

const vips = investors.filter((investor) => investor.budget >= minRequired);

for (let vip of vips) {
  vip.name = `VIP: ${vip.name}`;
}

console.log(vips);
