//refactored Spinner 1
const spinDirection = ['|', '/', '-', '\\'];
const delay = [100, 300, 500, 700];
let totalTime = 0;

for (let i = 0; i < 4; i++) {
  for (const direction of spinDirection) {
    setTimeout(() => {
      process.stdout.write(`\r ${direction} `)
    }, totalTime += delay[i]);
    totalTime += 200;
  }
}

setTimeout(() => {
  process.stdout.write('\n'); // Adding a newline character to end the animation
}, totalTime + delay[3] + 200);