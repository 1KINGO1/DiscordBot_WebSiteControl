import {Body, Controller, Get, Param, Post, Query, Res} from '@nestjs/common';
import {DiscordService} from "../discord/discord.service";

@Controller('main')
export class MainController {
    constructor(private discordService: DiscordService) {}

    @Post('/api/sendMessage')
    async sendMessage(@Res() res,
                      @Body('server') sr,
                      @Body('channel') ch,
                      @Body("content") ct){
        if (!sr || !ch || !ct){
            res.send({err: true, message: "Запрос должен состоять из 'server', 'channel', 'content'"})
            return
        }

        let result = await this.discordService.sendMessage(sr, ch, ct);

        res.send(result)

    }
    @Get("/api/messages")
    async readMessage(@Res() res,
                      @Query('server') sr,
                      @Query('channel') ch,
                      @Query("limit") lm){
        if (!sr || !ch || !lm){
            res.send({err: true, message: "Запрос должен состоять из 'server', 'channel', 'limit'"})
            return
        }

        let result = await this.discordService.readMessages(sr, ch, lm);

        res.send(result)

    }
    @Get("/api/current")
    async currentBot(@Res() res){
        res.send(await this.discordService.getCurrentBot());
    }
    @Get("/api/guilds")
    async getBotGuilds(@Res() res){
        res.send(await this.discordService.getServers());
    }
    @Get("/api/channels")
    async getGuildChannels(@Res() res,
                           @Query('server') sr){
        if (!sr){
            res.send({err: true, message: "Запрос должен состоять из 'server'"})
            return
        }
        res.send(await this.discordService.getChannels(sr));
    }

}
