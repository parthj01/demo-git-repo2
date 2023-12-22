const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/firstText.txt", "utf8");
const second = readFileSync("./content/secondTxt.txt", "utf8");

// console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result:${first}, ${second}`,
  { flag: "a" }
);
console.log("done with the task");
console.log("starting the next one");
