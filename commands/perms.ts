import { Message, MessageEmbed } from "discord.js";
import {ICommand} from "wokcommands";

export default {
    category:'Verify',
    description:'Verify an user!',
    permissions:['KICK_MEMBERS'],
    slash:false,
    testOnly:false,
    callback: ({args,guild,message}) => {
        const targetUser = message.mentions.users.first()
        if(!targetUser)
            return "Oops! You forgot to specify who you want to give the Perms role to!"
        args.shift()
        const roleName = args.join(' ')
        //const role = guild?.roles.cache.find((role)=>{
        //    return role.name === roleName
        //})
        let role = "841613824536870923"
        let unverifiedRole="851219408901636148"
        if(!role) return "Oops! The Perms role has changed. Please message Astro so he can fix me!"
        const dude = guild?.members.cache.get(targetUser.id)
        if(role && targetUser){
            dude?.roles.add(role)
            return `User ${targetUser} can now send images and links! Hooray!`
        }
    },
} as ICommand