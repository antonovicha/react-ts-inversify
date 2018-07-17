// Must be imported before any @injected or @inject calls
// Therefore it is imported in App.tsx
// So it is loaded before React app, and also in each test.
import 'reflect-metadata';

import { Container } from "inversify";

const myContainer = new Container({
  // autoBindInjectable: true,
  defaultScope: "Singleton"
});

export default myContainer;