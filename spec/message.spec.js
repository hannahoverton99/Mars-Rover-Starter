const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {
  //TEST 4
    test("throws error if name is NOT passed into constructor as the first parameter", function() {
        expect( function() { new Message();}).toThrow(new Error('Name of message required.'));
      });

  //TEST 5
    test("constructor sets name", function(){
      const obj= {name:"test message with two commands",
                  commands:['MODE_CHANGE', 'LOW_POWER']};  
     let newMessage= new Message(obj.name, obj.commands);
      expect(newMessage).toBeInstanceOf(Message);
      expect(new Message(obj.name)).toEqual(new Message(obj.name));      
      expect(obj["name"]).toEqual(obj["name"]);
    });

  //TEST 6
    test("contains a commands array passed into the constructor as the 2nd argument", function(){
      const obj={name: "test message with two commands",
                commands: ['MODE_CHANGE', 'LOW_POWER']};
      for(let i=0; i< obj.commands.length; i++){
          let newMessage= new Message(obj.name, obj.commands[i]);
          expect(newMessage).toBeInstanceOf(Message);
            expect(obj["commands"]).toEqual(obj["commands"])};
    });
});

