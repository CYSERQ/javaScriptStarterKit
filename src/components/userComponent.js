import { userService } from "../services/userService.js"

console.log("user component yüklendi")

let userService = new userService

userService.add()
userService.getById(1)
userService.list