import { Message, MessageEmbed } from "discord.js";
import {ICommand} from "wokcommands";

export default {
    category:'Commands',
    description:'Confines an user!',
    permissions:['MUTE_MEMBERS'],
    slash:'both',
    testOnly:false,
    callback: ({args,guild,message}) => {
        const targetUser = message.mentions.users.first()
        if(!targetUser)
            return "Oops! You forgot to specify who you want to confine!"
        args.shift()
        const roleName = args.join(' ')
        //const role = guild?.roles.cache.find((role)=>{
        //    return role.name === roleName
        //})
        let role = "984916497585561611"
        let verifiedRole = "840990428102262814"
        let permsRole = "841613824536870923"
        if(!role) return "Oops! The Confined Member role has changed. Please message Astro so he can fix me!"
        const dude = guild?.members.cache.get(targetUser.id)
        if(role && targetUser){
            dude?.roles.add(role)
            dude?.roles.remove(verifiedRole)

            return `User ${targetUser} has been confined for a short period of time.`
        }
    },
} as ICommand