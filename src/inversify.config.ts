import { Container } from "inversify";

import { UserService } from './userService';

const myContainer = new Container({
  autoBindInjectable: true,
  defaultScope: "Singleton"
});
myContainer.bind<UserService>(UserService).toSelf();

export default myContainer;