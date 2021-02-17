const findBestEmployee = function(employees) {
    const allEmployees = Object.keys(employees);
    const allCountTasks = Object.values(employees);
    const bestCountTasks = Math.max(...allCountTasks);
    const indexBestCountTasks = allCountTasks.indexOf(bestCountTasks);
    
    return allEmployees[indexBestCountTasks];
};
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); // lorence
  
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango
  
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); // lux