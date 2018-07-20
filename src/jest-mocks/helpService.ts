class HelpService {
  constructor() {
    console.log('I am HelpService constructor'); // tslint:disable-line
  }

  public helpMe(): string {
    return 'HelpService: help me'; // tslint:disable-line
  }
}

export { HelpService };
