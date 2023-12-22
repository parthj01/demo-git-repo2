const { readFile, writeFile } = require("fs");
console.log("start");
readFile("./content/firstText.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
  }
  //   console.log(result);
  const first = result;
  readFile("./content/secondTxt.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result
    : ${first},${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with the task");
      }
    );
  });
});
console.log("starting the next one");
