import * as React from "react";

import { HelpService } from './helpService';

class AppHelp extends React.Component {
  private helpService = new HelpService();

  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  public handleClick(): string {
    return 'HELP wanted ' + this.helpService.helpMe(); // tslint:disable-line
  }

  public render(): React.ReactNode {
    return <div onClick={this.handleClick}>Some App HELP F1</div>;
  }
}

export default AppHelp
