import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { Router } from '../Nav';
import styles from './styles';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  async componentWillMount() {
    const isLoggedIn = await Login.isLoggedIn();
    this.setState({ isLoggedIn });
  }

  componentDidUpdate() {
    if(this.state.isLoggedIn) {
      this.props.navigator.immediatelyResetStack([Router.getRoute('friendList')], 0);
    }
  }

  static isExpired(token) {
    return Date.now() > token.getExpires();
  }

  static async isLoggedIn() {
    const token = await AccessToken.getCurrentAccessToken();
    if(token == null || Login.isExpired(token)) {
      return false;
    }

    return true;
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Caronete</Text>
        <LoginButton
          readPermissions={["public_profile", "user_friends"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + result.error);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                this.props.navigator.immediatelyResetStack([Router.getRoute('friendList')], 0);
              }
            }
          }
        />
      </View>
    );
  }
}
