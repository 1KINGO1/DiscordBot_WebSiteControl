import { Module } from '@nestjs/common';
import { DiscordModule } from './discord/discord.module';
import { MainModule } from './main/main.module';

@Module({
  imports: [DiscordModule, MainModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
