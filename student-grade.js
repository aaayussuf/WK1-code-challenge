function getGrade(marks) {
    if (marks > 79) {
      return 'A';
    } else if (marks >= 60) {
      return 'B';
    } else if (marks >= 50) {
      return 'C';
    } else if (marks >= 40) {
      return 'D';
    } else {
      return 'E';
    }
  }
  
  // Prompt the user for input
  let marks = parseInt(prompt('Enter student marks (0-100):'), 10);
  if (marks >= 0 && marks <= 100) {
    console.log(`Grade: ${getGrade(marks)}`);
  } else {
    console.log('Invalid input. Please enter marks between 0 and 100.');
  }