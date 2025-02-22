// test.js
const { exec } = require("child_process");

exec("node app.js", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    process.exit(1);
  }
  const day = new Date().getDate();
  const expectedOutput = day % 2 === 0 ? "Чётное число" : "Нечётное число";
  if (stdout.trim() === expectedOutput) {
    console.log("Test passed!");
  } else {
    console.error(`Test failed! Expected "${expectedOutput}", got "${stdout.trim()}"`);
    process.exit(1);
  }
});