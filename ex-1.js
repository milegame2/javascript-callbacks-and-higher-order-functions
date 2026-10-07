// Exercise #1: For Each Function
const employeeSalaries = [20005, 40000, 32000, 14500, 344000];

function addSalary5000(previousSalary) {
  // Start coding here
    return previousSalary + 5000;
    
}
console.log(addSalary5000(employeeSalaries[0]))


// Using `forEach` function here

function forEach(array, operation) 
{
  // Start coding here
  let result = [];
  for(let i = 0; i< array.length; i++)
  {
     result.push(operation(array[i]));
  }
   return result;
}

function forEach2(array, operation)
{
  const result2 = [];
   for(let i = 0; i< array.length; i++)
  {
    result2[i] = operation(array[i])
   }
  return result2
}

console.log(forEach(employeeSalaries, addSalary5000))
console.log(forEach2(employeeSalaries, addSalary5000))

const newEmployeeSalaries = forEach(employeeSalaries, addSalary5000)
console.log(newEmployeeSalaries)
/*
====================================

1. ใน Exercise นี้ ฟังก์ชันใดเป็น Callback Function?
addSalary5000
2. ใน Exercise นี้ ฟังก์ชันใดเป็น Higher Order Function?
forEach
====================================
*/
