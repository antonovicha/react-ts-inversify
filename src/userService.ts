import { injectable } from 'inversify';

@injectable()
class UserService {
  public foo(): any {
    console.info('foo'); // tslint:disable-line
  }
}

export { UserService };