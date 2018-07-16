import { Container } from "inversify";

import { UserService } from './userService';

const myContainer = new Container();
myContainer.bind<UserService>(UserService).to(UserService);

export { myContainer };