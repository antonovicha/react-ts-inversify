import { injectable } from 'inversify';

@injectable()
class UserService {
  constructor() {
    console.log('I am UserService constructor'); // tslint:disable-line
  }

  public foo(): string {
    return 'foo'; // tslint:disable-line
  }
}

export { UserService };