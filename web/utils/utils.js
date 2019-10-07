var demoLog = function(message, param) {
  // Custom logger for color coded demo logs
  console.log(`%cMP Demo: ${message}`, 'color: green; font-size: bold', param);
};

var mediaLog = function(message, param) {
  // Custom logger for color coded demo logs
  console.log(
    `%cMP Media: ${message}`,
    'color: purple; font-size: bold',
    param
  );
};

var adLog = function(message, param) {
  console.log(
    `%cMP Ad Log: ${message}`,
    'color: sienna; font-size: bold',
    param
  );
};
