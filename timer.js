
function countdown(seconds) {
  return new Promise((resolve, reject) => {

    if (typeof seconds !== "number" || seconds < 0) {
      reject(" Invalid input! Please enter a positive number.");
      return;
    }

    if (seconds === 0) {
      console.log(" Countdown finished instantly!");
      resolve();
      return;
    }

    let timeLeft = seconds;

    console.log(` Starting countdown from ${seconds} seconds...`);

    function tick() {
      console.log(` ${timeLeft} seconds remaining...`);
      timeLeft--;

      if (timeLeft < 0) {
        resolve(" Countdown completed!");
        return;
      }

      setTimeout(tick, 1000);
    }

    tick(); 
  });
}
countdown(10)
  .then(message => console.log(message))
  .catch(err => console.log(err));
