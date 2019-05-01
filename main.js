"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Boot_1 = require("@zerooneit/expressive-tea/classes/Boot");
const server_1 = require("@zerooneit/expressive-tea/decorators/server");
let BootLoader = class BootLoader extends Boot_1.default {
};
BootLoader = __decorate([
    server_1.ServerSettings({
        port: 3001
    })
], BootLoader);
exports.default = new BootLoader().start()
    .catch(error => console.log(error.message));
//# sourceMappingURL=main.js.map