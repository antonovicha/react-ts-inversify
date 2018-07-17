import { injectable } from 'inversify';

@injectable()
class UserService {
  public foo(): string {
    return 'foo'; // tslint:disable-line
  }
}

export { UserService };