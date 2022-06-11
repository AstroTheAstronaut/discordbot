import {ICommand} from "wokcommands";

export default {
    category:'Testing',
    description:'Replies with pong!',
    slash: 'both',
    testOnly:false,
    callback: ({}) => {
        return 'Pong!'
    },
} as ICommand