// Write your solution in this file!
const employee = {
    name: "Joe",
    streetAddress: "East 14th"
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
 const newEmployee = {...employee};
 newEmployee[key] = value
 return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const newObject = Object.assign({}, employee)
    delete newObject[key]
    return newObject
}
function destructivelyDeleteFromEmployeeByKey(newEmployee, key){
delete newEmployee[key]
return newEmployee
}
