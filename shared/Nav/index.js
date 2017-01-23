import React from 'react';
import { Button, Text } from 'react-native';
import Login from '../Login';
import FriendList from '../FriendList';
import WaitingAnswer from '../WaitingAnswer';
import Tracking from '../Tracking';
import { createRouter, NavigationProvider, StackNavigation } from '@exponent/ex-navigation';

const Router = createRouter(() => ({
  login: () => Login,
  friendList: () => FriendList,
  waitingAnswer: () => WaitingAnswer,
  tracking: () => Tracking,
}));

const Nav = () =>
  <NavigationProvider router={Router}>
    <StackNavigation initialRoute={Router.getRoute('login')} />
  </NavigationProvider>;

export { Nav, Router }
