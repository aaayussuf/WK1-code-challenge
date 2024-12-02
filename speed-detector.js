function checkSpeed(speed) {
    const speedLimit = 70;
    if (speed < speedLimit) {
      console.log('Ok');
    } else {
      let demeritPoints = Math.floor((speed - speedLimit) / 5);
      if (demeritPoints > 12) {
        console.log('License suspended');
      } else {
        console.log(`Points: ${demeritPoints}`);
      }
    }
  }
  
  // Prompt the user for input
  let speed = parseInt(prompt('Enter car speed:'));
  checkSpeed(speed);
  