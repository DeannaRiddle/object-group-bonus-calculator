const employees = [
  {
    name: "Atticus",
    employeeNumber: "2405",
    annualSalary: "47000",
    reviewRating: 3
  },
  {
    name: "Jem",
    employeeNumber: "62347",
    annualSalary: "63500",
    reviewRating: 4
  },
  {
    name: "Scout",
    employeeNumber: "6243",
    annualSalary: "74750",
    reviewRating: 5
  },
  {
    name: "Robert",
    employeeNumber: "26835",
    annualSalary: "66000",
    reviewRating: 1
  },
  {
    name: "Mayella",
    employeeNumber: "89068",
    annualSalary: "35000",
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);

function ratingBonus(name) {
  let ratingBonus;
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].name === name) {
      if (employees[i].reviewRating <= 2) {
        ratingBonus = 0;
      } else if (employees[i].reviewRating === 3) {
        ratingBonus = (employees[i].annualSalary / 100) * 4;
      } else if (employees[i].reviewRating === 4) {
        ratingBonus = (employees[i].annualSalary / 100) * 6;
      } else if (employees[i].reviewRating === 5) {
        ratingBonus = (employees[i].annualSalary / 100) * 10;
      }
    }
  }
  return ratingBonus;
}

function seniorEmployee(name) {
  let employeeN;
  let seniorBonus;
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].name === name) {
      employeeN = employees[i].employeeNumber;
      if ((employeeN.length = 4)) {
        seniorBonus = (employees[i].annualSalary / 100) * 5;
      }
    }
  }
  return seniorBonus;
}

function finalBonus() {
  console.log("in finalBonus");
  let newEmployeeObject = {
    name: "name",
    bonusPercentage: "",
    totalCompensation: "",
    totalBonus: ""
  };
}
finalBonus();

// function ratingBonus(kittyKat) {
//   for (let i = 0; i < employees.length; i++) {
//     if (employees[i].name === kittyKat) {
//       if (employees.reviewRating < 2) {
//         return true;
//       }
//     }
//   }
// }
