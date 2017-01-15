import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login from '../Login';
import FriendList from '../FriendList';
import WaitingAnswer from '../WaitingAnswer';
import Tracking from '../Tracking';

const Nav = () =>
  <Router>
    <Scene key="root">
      <Scene key="login" component={Login} title="Login" initial={true} />
      <Scene key="friendList" component={FriendList} title="Friend List" />
      <Scene key="waitingAnswer" component={WaitingAnswer} title="Waiting Answer" />
      <Scene key="tracking" component={Tracking} title="Tracking" />
    </Scene>
  </Router>;

export default Nav;
