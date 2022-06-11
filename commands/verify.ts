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
            return "Oops! You forgot to specify who you want to verify!"
        args.shift()
        const roleName = args.join(' ')
        //const role = guild?.roles.cache.find((role)=>{
        //    return role.name === roleName
        //})
        let role = "840990428102262814"
        let unverifiedRole="851219408901636148"
        if(!role) return "Oops! The Verified role has changed. Please message Astro so he can fix me!"
        const dude = guild?.members.cache.get(targetUser.id)
        if(role && targetUser){
            dude?.roles.add(role)
            dude?.roles.remove(unverifiedRole)
            return `User ${targetUser} was successfuly verified! Hooray!`
        }
    },
} as ICommand