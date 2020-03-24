"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
var common_1 = require("@nestjs/common");
var UsersController = /** @class */ (function () {
    function UsersController(usersServices) {
        this.usersServices = usersServices;
    }
    UsersController.prototype.getAllUsers = function () {
        return this.usersServices.getAllUsers();
    };
    UsersController.prototype.getUserById = function (id) {
        return this.usersServices.getUserById(id);
    };
    UsersController.prototype.deleteUserById = function (id) {
        return this.usersServices.deleteUserById(id);
    };
    UsersController.prototype.createUser = function (createUserDto) {
        return this.usersServices.createUser(createUserDto);
    };
    __decorate([
        common_1.Get()
    ], UsersController.prototype, "getAllUsers");
    __decorate([
        common_1.Get('/:id'),
        __param(0, common_1.Param('id'))
    ], UsersController.prototype, "getUserById");
    __decorate([
        common_1.Delete('/:id'),
        __param(0, common_1.Param('id'))
    ], UsersController.prototype, "deleteUserById");
    __decorate([
        common_1.Post(),
        common_1.UsePipes(common_1.ValidationPipe),
        __param(0, common_1.Body())
    ], UsersController.prototype, "createUser");
    UsersController = __decorate([
        common_1.Controller('users')
    ], UsersController);
    return UsersController;
}());
exports.UsersController = UsersController;
