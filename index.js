const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
  };
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employeeCopy = {...employee};
    employeeCopy[key] = value;
    return employeeCopy;
  };

  function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
  }

  function deleteFromEmployeeByKey(employee,key) {
    const employeeCopy = {...employee};
    console.log (key);
    delete employeeCopy[key];
    return employeeCopy;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
  }