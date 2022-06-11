import { Message, MessageEmbed } from "discord.js";
import {ICommand} from "wokcommands";

export default {
    category:'Configuration',
    description:'bot status',
    slash:'both',
    minArgs:1,
    expectedArgs:'<status>',
    ownerOnly:false,
    testOnly:false,
    callback: ({client,text}) => {
        client.user?.setPresence({
            status:'online',
            activities:[
                {
                    name:text,
                },
            ],
        })
        return 'Status updated!'
    },
} as ICommand