const EventEmiter = require('events')


const myEmitter = new EventEmiter()


//listener

myEmitter.on('birthday', () => {
    console.log("H B D to you");
})


myEmitter.on('birthday', (gift) => {
    console.log(`I'll send a ${gift} as gift`)
})

myEmitter.emit('birthday','watch')