"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainController = void 0;
const common_1 = require("@nestjs/common");
const discord_service_1 = require("../discord/discord.service");
let MainController = class MainController {
    constructor(discordService) {
        this.discordService = discordService;
    }
    async sendMessage(res, sr, ch, ct) {
        if (!sr || !ch || !ct) {
            res.send({ err: true, message: "Запрос должен состоять из 'server', 'channel', 'content'" });
            return;
        }
        let result = await this.discordService.sendMessage(sr, ch, ct);
        res.send(result);
    }
    async readMessage(res, sr, ch, lm) {
        if (!sr || !ch || !lm) {
            res.send({ err: true, message: "Запрос должен состоять из 'server', 'channel', 'limit'" });
            return;
        }
        let result = await this.discordService.readMessages(sr, ch, lm);
        res.send(result);
    }
    async currentBot(res) {
        res.send(await this.discordService.getCurrentBot());
    }
    async getBotGuilds(res) {
        res.send(await this.discordService.getServers());
    }
    async getGuildChannels(res, sr) {
        if (!sr) {
            res.send({ err: true, message: "Запрос должен состоять из 'server'" });
            return;
        }
        res.send(await this.discordService.getChannels(sr));
    }
};
__decorate([
    (0, common_1.Post)('/api/sendMessage'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)('server')),
    __param(2, (0, common_1.Body)('channel')),
    __param(3, (0, common_1.Body)("content")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], MainController.prototype, "sendMessage", null);
__decorate([
    (0, common_1.Get)("/api/messages"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('server')),
    __param(2, (0, common_1.Query)('channel')),
    __param(3, (0, common_1.Query)("limit")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], MainController.prototype, "readMessage", null);
__decorate([
    (0, common_1.Get)("/api/current"),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MainController.prototype, "currentBot", null);
__decorate([
    (0, common_1.Get)("/api/guilds"),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MainController.prototype, "getBotGuilds", null);
__decorate([
    (0, common_1.Get)("/api/channels"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('server')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MainController.prototype, "getGuildChannels", null);
MainController = __decorate([
    (0, common_1.Controller)('main'),
    __metadata("design:paramtypes", [discord_service_1.DiscordService])
], MainController);
exports.MainController = MainController;
//# sourceMappingURL=main.controller.js.map