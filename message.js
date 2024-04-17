class Message {
   constructor(name, commands){
      this.name=name;
      this.commands= commands;
      if (!name) {
         throw Error("Name of message required.");
       }
   }
   // Write code here!
}

module.exports = Message;