const Command= require('./command.js');

const Message= require('./message.js');


class Rover {
   constructor(position, mode= "NORMAL", generatorWatts = 110){
      this.position = position,
      this.mode= mode,
      this.generatorWatts= generatorWatts
   }
   // Write code here!
   receiveMessage(message){
      let commands= [new Command('MODE_CHANGE', 'LOW_POWER')];
      let newMessage= new Message('Test message with two commands', commands)
      let response={
         message: newMessage.name,  //name of original Message object
      };
      return response.message;
      };
};

module.exports = Rover;