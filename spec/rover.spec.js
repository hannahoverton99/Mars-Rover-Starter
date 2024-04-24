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
test("response returned by receiveMessage contains the name of the message", function(){
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER')];
  let message = new Message('Test message with two commands', commands);
// console.log(message);
  let rover= new Rover();
  let response = rover.receiveMessage();
  expect(response.message).toBe('Test message with two commands');
});

//TEST 9
test("response returned by receiveMessage includes two results if two commands are sent in the message", function(){
  let rover= new Rover();
  let response = rover.receiveMessage();
  expect(response.results).toEqual([
    {commandType: 'MODE_CHANGE', value: 'LOW_POWER'},
    {commandType: 'STATUS_CHECK', completed: true, roverStatus: {mode: 'NORMAL', generatorWatts: 110, position: 87382098}}
  ]);
});

//TEST 10
test("responds correctly to the status check command", function(){
  let commands =[new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
  let message=new Message('Test message for status check', commands);
  let rover = new Rover(message)
  let response=rover.receiveMessage();
  expect(response.results).toEqual([
      {commandType:'MODE_CHANGE', value: 'LOW_POWER'},
      {commandType: 'STATUS_CHECK', completed: true, roverStatus: {mode: 'NORMAL', generatorWatts: 110, position: 87382098}}
]);
});

//TEST 11
test("responds correctly to the mode change command", function(){
  let commands =new Command('MODE_CHANGE', 'LOW_POWER');
  // console.log(commands.value)
  expect(commands.value).toBe('LOW_POWER' || 'NORMAL');
});

//TEST 12
test("responds with a false completed value when attempting to move in LOW_POWER mode", function(){
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MOVE')];
  for(let i = 0; i< commands.length; i++){
    return commands.completed;
  };
expect(commands.completed).toBe(false);
});
});
