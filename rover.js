const Command= require('./command.js');

const Message= require('./message.js');



class Rover {
   constructor(position, mode= "NORMAL", generatorWatts = 110){
      this.position = position,
      this.mode= mode,
      this.generatorWatts= generatorWatts
   }
   // Write code here!
   receiveMessage(){
      let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
      console.log(commands.value)
      let message= new Message('Test message with two commands', commands)
      let results =[];
      for(let commands of message.commands){
         if(commands.commandType === 'MOVE'){
            results.push({commandType: commands.commandType, value: commands.value});
      } if(commands.commandType ==='MODE_CHANGE'){
            results.push({commandType: commands.commandType, value: commands.value});
         }else if(commands.commandType === 'STATUS_CHECK'){
            results.push({completed: true, roverStatus: {mode: 'NORMAL', generatorWatts: 110, position: 87382098}})
            // results.push({commandType: commands.commandType})
         };
      };
       let response={
          message: message.name,  //name of original Message object
          results: results
       };
       return response;
      }; 
};

module.exports = Rover;