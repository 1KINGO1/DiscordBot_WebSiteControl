import { Injectable } from '@nestjs/common';
const { Client, Intents } = require('discord.js');
require('dotenv').config()

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.BOT_TOKEN);


@Injectable()
export class DiscordService {

    async sendMessage(serverId: string, channelId: string, content: string){
        try{
            await client.guilds.cache.get(serverId).channels.cache.get(channelId).send(content);
            return true
        }
        catch (e){
            return false
        }
    }

    async readMessages(serverId: string, channelId: string, limit: number){

        let messages = await client.guilds.cache.get(serverId).channels.cache.get(channelId).messages.fetch({ limit: limit })


        return {
            messages: messages.map(ch => {
                return {
                    tag: ch.author.tag,
                    content: ch.content,
                    avatar: ch.author.avatarURL(),
                    isBot: ch.author.bot
                }
            })
        }
    }

    async getCurrentBot(){
        return {
            tag: client.user.tag,
            avatar: client.user.avatarURL(),
        };
    }

    async getServers(){
        return {
            servers: client.guilds.cache.map((guild) => {
                return {
                    id: guild.id,
                    avatar: guild.iconURL()
                }
            })
        }
    }

    async getChannels(serverId: string){
        return {
            channels: client.guilds.cache.get(serverId).channels.cache.map(ch => {
                return {
                    id: ch.id,
                    title: ch.name,
                    type: ch.type,
                }
            })
        }
    }

}
