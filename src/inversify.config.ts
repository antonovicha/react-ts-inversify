import 'reflect-metadata';

import { Container } from "inversify";

const myContainer = new Container({
  autoBindInjectable: true,
  defaultScope: "Singleton"
});

export default myContainer;