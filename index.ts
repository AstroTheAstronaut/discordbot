import DiscordJS from 'discord.js'
import WOKCommands from 'wokcommands';
import dotenv from 'dotenv'
import path from 'path'
import mongoose from 'mongoose'
import 'dotenv/config'
import testSchema from './test-schema'
//dotenv.config()


const client = new DiscordJS.Client({ intents: [ 'DIRECT_MESSAGES', 'GUILD_MESSAGES','GUILDS','GUILD_MESSAGE_REACTIONS' ] });


client.on('ready',async()=>{
    console.log('Bot is ready!!');
    new WOKCommands(client, {
    // The name of the local folder for your command files
    mongoUri: process.env.MONGO_URI,
    commandsDir: path.join(__dirname, 'commands'),
    featuresDir: path.join(__dirname, "features"),
    typeScript:true,
    botOwners:['315364768569622528','973870568468258876']

  })

  setTimeout(async()=>{
    await new testSchema({
        message:"Hello world!"
    }).save()
  },1000)

})

client.login(process.env.TOKEN)