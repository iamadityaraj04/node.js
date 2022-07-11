//requiring events module
var events=require("events");

var eventEmitter=new events.EventEmitter();//creating new obj of eventEmitter class

//event definition
eventEmitter.on('firstEvent',(a,b)=>{ //making custom event with name firstEvent
    console.log("This is a custom event." +a+b);
});
//calling event
eventEmitter.emit('firstEvent',10,30);