class Message {
   constructor(name, commands){
      this.name=name;
      this.commands= commands;
      if (!name) {
         throw Error("Name of message required.");
       }
   }

}

module.exports = Message;