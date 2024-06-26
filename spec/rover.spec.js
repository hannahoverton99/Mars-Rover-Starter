const Command = require('../command.js');
const Message = require('../message.js');
const Rover = require('../rover.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {
//TEST 7
test("constructor sets position and default values for mode and generatorWatts", function(){
  let position= 1500;
  let mode= "LOW_POWER";
  let generatorWatts= 200;
  let attempt= new Rover(position, mode, generatorWatts);
  expect(attempt.position).toBe(1500);
  expect(attempt.mode).toBe("LOW_POWER");
  expect(attempt.generatorWatts).toBe(200);
});

//TEST 8
test("response returned by receiveMessage contains the name of the message", function(){
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER')];
  let message = new Message('Test message with two commands', commands);
// console.log(message);
  let rover= new Rover(200);
  let response = rover.receiveMessage(message);
  expect(response.message).toBe('Test message with two commands');
});

//TEST 9
test("response returned by receiveMessage includes two results if two commands are sent in the message", function(){
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
  let message = new Message('Test message with two commands', commands);
  let rover= new Rover(200);
  let response = rover.receiveMessage(message);
  expect(response.results.length).toEqual(commands.length);
});

//TEST 10
test("responds correctly to the status check command", function(){
  let commands =[new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
  let message=new Message('Test message for status check', commands);
  let rover = new Rover(200)
  let response=rover.receiveMessage(message);
  expect(response.results[1]).toEqual(
      {completed: true, roverStatus: {mode:rover.mode, generatorWatts: rover.generatorWatts, position: rover.position}}
);
});

//TEST 11
test("responds correctly to the mode change command", function(){
  let commands =[new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
  let message=new Message('Test message for mode change', commands);
  let rover = new Rover(200)
  let response=rover.receiveMessage(message);
  expect(response.results[0]).toEqual({completed: true});
  // console.log(commands.value)
  expect(rover.mode).toBe('LOW_POWER');
});

//TEST 12
test("responds with a false completed value when attempting to move in LOW_POWER mode", function(){
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MOVE')];
  let position= 1000;
  let message=new Message('Test message for MOVE command', commands);
  let rover = new Rover(position);
  let response=rover.receiveMessage(message);
  expect(rover.position).toEqual(1000);
  expect(response.results[1]).toEqual({completed: false});
});



//TEST 13
test("responds with the position for the move command", function(){
  let position= 0
  let commands = [new Command('MOVE', 1000)];
  let message=new Message('Test message for MOVE command', commands);
  let rover = new Rover(position);
  let response=rover.receiveMessage(message);
  expect(rover.position).toEqual(1000);
  expect(response.results).toEqual([{completed: true}]);
});
});
