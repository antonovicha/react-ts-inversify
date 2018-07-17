import container from './inversify.config';
import { injectable } from 'inversify';

@injectable()
class UserService {
  public foo(): string {
    return 'foo'; // tslint:disable-line
  }
}

container.bind<UserService>(UserService).toSelf();

export { UserService };