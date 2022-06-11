import { Message, MessageEmbed } from "discord.js";
import {ICommand} from "wokcommands";
import perms from "./perms";

export default {
    category:'Commands',
    description:'Unconfines an user!',
    permissions:['MUTE_MEMBERS'],
    slash:'both',
    testOnly:false,
    callback: ({args,guild,message}) => {
        const targetUser = message.mentions.users.first()
        if(!targetUser)
            return "Oops! You forgot to specify who you want to take out of confinement!"
        args.shift()
        const roleName = args.join(' ')
        //const role = guild?.roles.cache.find((role)=>{
        //    return role.name === roleName
        //})
        let role = "984916497585561611"
        let permsRole = "841613824536870923"
        let verifiedRole = "840990428102262814"
        if(!role) return "Oops! The Confined Member role has changed. Please message Astro so he can fix me!"
        const dude = guild?.members.cache.get(targetUser.id)
        if(role && targetUser){
            dude?.roles.remove(role)

            dude?.roles.add(verifiedRole)
            return `User ${targetUser} is now free! Hooray!`
        }
    },
} as ICommand