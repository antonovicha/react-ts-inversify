import * as React from "react";

class AppInfo extends React.Component {
  public handleClick(): void {
    console.info('clicked'); // tslint:disable-line
  }

  public render(): React.ReactNode {
    return <div onClick={this.handleClick}>Some App info</div>;
  } 
}

export default AppInfo
