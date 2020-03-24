"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var common_1 = require("@nestjs/common");
var uuid_1 = require("uuid");
var UsersService = /** @class */ (function () {
    function UsersService() {
        this.users = [];
    }
    UsersService.prototype.getAllUsers = function () {
        return this.users;
    };
    UsersService.prototype.getUserById = function (id) {
        var userFound = this.users.find(function (user) { return user.id === id; });
        if (!userFound) {
            throw new common_1.NotFoundException("User with ID " + id + " not found");
        }
        return userFound;
    };
    UsersService.prototype.deleteUserById = function (id) {
        var userFound = this.getUserById(id);
        this.users = this.users.filter(function (user) { return user.id !== userFound.id; });
    };
    UsersService.prototype.createUser = function (createUserDto) {
        var firstname = createUserDto.firstname, lastname = createUserDto.lastname, email = createUserDto.email, gender = createUserDto.gender;
        var user = {
            id: uuid_1.v1(),
            firstname: firstname,
            lastname: lastname,
            email: email,
            gender: gender
        };
        this.users.push(user);
        return user;
    };
    UsersService = __decorate([
        common_1.Injectable()
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
