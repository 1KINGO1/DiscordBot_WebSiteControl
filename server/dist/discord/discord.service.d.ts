export declare class DiscordService {
    sendMessage(serverId: string, channelId: string, content: string): Promise<boolean>;
    readMessages(serverId: string, channelId: string, limit: number): Promise<{
        messages: any;
    }>;
    getCurrentBot(): Promise<{
        tag: any;
        avatar: any;
    }>;
    getServers(): Promise<{
        servers: any;
    }>;
    getChannels(serverId: string): Promise<{
        channels: any;
    }>;
}
