"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordService = void 0;
const common_1 = require("@nestjs/common");
const { Client, Intents } = require('discord.js');
require('dotenv').config();
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.login(process.env.BOT_TOKEN);
let DiscordService = class DiscordService {
    async sendMessage(serverId, channelId, content) {
        try {
            await client.guilds.cache.get(serverId).channels.cache.get(channelId).send(content);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    async readMessages(serverId, channelId, limit) {
        let messages = await client.guilds.cache.get(serverId).channels.cache.get(channelId).messages.fetch({ limit: limit });
        return {
            messages: messages.map(ch => {
                return {
                    tag: ch.author.tag,
                    content: ch.content,
                    avatar: ch.author.avatarURL(),
                    isBot: ch.author.bot
                };
            })
        };
    }
    async getCurrentBot() {
        return {
            tag: client.user.tag,
            avatar: client.user.avatarURL(),
        };
    }
    async getServers() {
        return {
            servers: client.guilds.cache.map((guild) => {
                return {
                    id: guild.id,
                    avatar: guild.iconURL()
                };
            })
        };
    }
    async getChannels(serverId) {
        return {
            channels: client.guilds.cache.get(serverId).channels.cache.map(ch => {
                return {
                    id: ch.id,
                    title: ch.name,
                    type: ch.type,
                };
            })
        };
    }
};
DiscordService = __decorate([
    (0, common_1.Injectable)()
], DiscordService);
exports.DiscordService = DiscordService;
//# sourceMappingURL=discord.service.js.map