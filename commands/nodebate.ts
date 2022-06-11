import { Channel, Message, MessageEmbed } from "discord.js";
import {ICommand} from "wokcommands";

export default {
    category:'Nodebate',
    description:'Do not debate here!',
    slash:false,
    testOnly:false,
    callback: ({args,guild,message,channel}) => {
        const embed = new MessageEmbed()
        .setTitle("Please don't debate!")
        //.setDescription(`Please do not debate in this channel! Feel free to take this interesting conversation to a channel meant for debating, such as <#841255395598663730>.`)
        .setDescription(`Please keep all debates in <#841255395598663730>! Refusal to do so may lead to a warning!`)
        .setFooter({text:"Made with ❤️ by Astro for CHRISTLIKE"})
        .setColor('#BCCEF1')
        channel.send({ embeds: [embed] });

    },
} as ICommand