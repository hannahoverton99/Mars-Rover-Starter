class Message {
   constructor(name, commandsArr){
      this.name=name;
      this.commandsArr= commandsArr;
      if (!name) {
         throw Error("Name of message required.");
       }
   }
   // Write code here!
}

module.exports = Message;