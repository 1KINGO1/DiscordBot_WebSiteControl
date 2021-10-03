import { DiscordService } from "../discord/discord.service";
export declare class MainController {
    private discordService;
    constructor(discordService: DiscordService);
    sendMessage(res: any, sr: any, ch: any, ct: any): Promise<void>;
    readMessage(res: any, sr: any, ch: any, lm: any): Promise<void>;
    currentBot(res: any): Promise<void>;
    getBotGuilds(res: any): Promise<void>;
    getGuildChannels(res: any, sr: any): Promise<void>;
}
