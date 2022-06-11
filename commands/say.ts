import { Message, MessageEmbed } from "discord.js";
import {ICommand} from "wokcommands";

export default {
    category:'Verify',
    description:'Verify an user!',
    permissions:['KICK_MEMBERS'],
    slash:false,
    testOnly:false,
    callback: ({args,guild,message}) => {
        if (message.author.bot) return;
                const SayMessage = message.content.slice(4).trim();
                message.delete();
                message.channel.send(SayMessage)
        
        
    },
} as ICommand