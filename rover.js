const Command= require('./command.js');

const Message= require('./message.js');



class Rover {
   constructor(position, mode = 'NORMAL', generatorWatts = 110){
      this.position = position,
      this.mode= mode,
      this.generatorWatts= generatorWatts
   }
   // Write code here!
   receiveMessage(message){
      let results =[];
      for(let command of message.commands){
         if(command.commandType === 'MOVE'){
            if(this.mode === 'LOW_POWER'){
               results.push({completed: false});
            }else{
            this.position = command.value;
            results.push({completed: true})};
         }else if(command.commandType ==='MODE_CHANGE'){
            this.mode= command.value;
             results.push({completed: true});
            
         }else if(command.commandType === 'STATUS_CHECK'){
            results.push({completed: true, roverStatus: {mode: this.mode, generatorWatts: this.generatorWatts, position: this.position}})
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