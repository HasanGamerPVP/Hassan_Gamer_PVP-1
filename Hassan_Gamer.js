﻿const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Hassan_Gamer");


client.on("ready", () => {
let channel =     client.channels.get("509476801215594498")
setInterval(function() {
channel.send(`الله اكبر`);
}, 25)
})
 
 
client.login("NTA5NDY5MTM1MjEwNjc2MjM0.DshnPQ.BUQFL_CdCHKpH-RPIefbuxaytPw");