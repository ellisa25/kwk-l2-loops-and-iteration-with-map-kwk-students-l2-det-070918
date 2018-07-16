// Code your solution in this file.
function lowerCaseStudentDrivers (list){
  return list.map(function(driver){
    return driver.toLowerCase();
  });
}
function nameToAttributes (list){
  return list.map(function(driver){
    const driverFirst = driver.split('')[0];
    const driverLast = driver.split('')[1];
  
}