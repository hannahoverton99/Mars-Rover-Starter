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
let newMessage = new Message('Test message with two commands', commands);
console.log(newMessage);
let rover= new Rover();
  expect(rover.receiveMessage(newMessage.name)).toEqual('Test message with two commands');
});

//TEST 9
test("response returned by receiveMessage includes two results if two commands are sent in the message", function(){
let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
let message = new Message('Test message with two commands', commands);
let rover= new Rover(98382);
expect(rover.receiveMessage(message.commands)).toEqual([('MODE_CHANGE', 'LOW_POWER'), ('STATUS_CHECK')]);
})

});
