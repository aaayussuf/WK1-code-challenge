function calculateNetSalary(basicSalary, benefits) {
    const taxRate = 0.3; // 30% tax rate
    const nhifRate = 0.015; // 1.5% NHIF deduction
    const nssfRate = 0.06; // 6% NSSF deduction
  
    let grossSalary = basicSalary + benefits;
    let tax = grossSalary * taxRate;
    let nhifDeduction = grossSalary * nhifRate;
    let nssfDeduction = grossSalary * nssfRate;
  
    let netSalary = grossSalary - (tax + nhifDeduction + nssfDeduction);
  
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`Tax: ${tax}`);
    console.log(`NHIF Deduction: ${nhifDeduction}`);
    console.log(`NSSF Deduction: ${nssfDeduction}`);
    console.log(`Net Salary: ${netSalary}`);
  }
  
  // Prompt the user for input
  let basicSalary = parseFloat(prompt('Enter basic salary:'));
  let benefits = parseFloat(prompt('Enter benefits:'));
  calculateNetSalary(basicSalary, benefits);
  