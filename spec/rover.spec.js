const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {
//TEST 7
test("constructor sets position and default values for mode and generatorWatts", function(){
  let position= 1500;
  let mode= "LOW_POWER";
  let generatorWatts= 200;
  let attempt= new Rover(position, mode, generatorWatts);
  expect(attempt);
});

//TEST 8


});
