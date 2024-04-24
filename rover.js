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
      let results =[];
      for(let commands of message.commands){
         if(commands.commandType === 'MOVE'){
            if(commands.value === 'LOW_POWER'){
               results.push({commandType:'MOVE', completed: false});
            }else{
            this.position = commands.value;
            results.push({commandType: 'MOVE', completed: true})};
         }else if(commands.commandType ==='MODE_CHANGE'){
            this.mode= commands.value;
            results.push({commandType: commands.commandType, value: commands.value});
         }else if(commands.commandType === 'STATUS_CHECK'){
            results.push({commandType: commands.commandType, completed: true, roverStatus: {mode: 'NORMAL', generatorWatts: 110, position: 87382098}})
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