import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';
import { withNavigation } from '@exponent/ex-navigation';
import { LoginManager } from 'react-native-fbsdk';
import { Router } from '../Nav';
import styles from './styles';

@withNavigation
export default class LogOut extends Component {
  constructor(props) {
    super(props);
    this.confirmLogOut = this.confirmLogOut.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  confirmLogOut() {
    Alert.alert(
      'Caronete', 'Do you wish do logout?',
      [
        {text: 'Ok', onPress: this.logOut},
        {text: 'Cancel'}
      ]
    );
  }

  logOut() {
    LoginManager.logOut();
    this.props.navigator.immediatelyResetStack([Router.getRoute('login')], 0);
  }

  render() {
    return (
      <View style={styles.logOutContainer}>
        <Text onPress={this.confirmLogOut} style={styles.logOut}>Log out</Text>
      </View>
    );
  }
}
