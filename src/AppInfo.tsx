import 'reflect-metadata';

import * as React from "react";

import './inversify.config.ts';

import { UserService } from './userService';

import { inject } from './myInjector';

class AppInfo extends React.Component {
  @inject(UserService)
  public service: UserService;

  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  public handleClick(): void {
    console.info('clicked'); // tslint:disable-line
    console.info(this.service); // tslint:disable-line
  }

  public render(): React.ReactNode {
    return <div onClick={this.handleClick}>Some App info</div>;
  } 
}

export default AppInfo
