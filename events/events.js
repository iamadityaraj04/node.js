//requiring events module
var event=require("events");

//creating new obj of eventEmitter class
var eventEmitter=new event.EventEmitter();

//event definition
eventEmitter.on('firstEvent',(a,b)=>{ //making custom event with name firstEvent
    console.log("This is a custom event." + (a+b));
})
eventEmitter.on('thirdEvent',()=>{
    console.log("This is third event.");
})
eventEmitter.on('secEvent',()=>{
    console.log("Hi Aditya!");
})

//calling event

//removes all the event
//eventEmitter.removeAllListeners();

eventEmitter.emit('secEvent');
eventEmitter.emit('thirdEvent');
eventEmitter.emit('firstEvent',10,30);