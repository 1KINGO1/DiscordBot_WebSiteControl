import { Module } from '@nestjs/common';
import { MainController } from './main.controller';
import {DiscordModule} from "../discord/discord.module";

@Module({
  imports: [DiscordModule],
  controllers: [MainController]
})
export class MainModule {}
