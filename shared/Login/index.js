import React from 'react';
import {
  Text,
  View
} from 'react-native';
import { LoginButton } from 'react-native-fbsdk';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

const Login = () =>
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
                Actions.friendList({type: 'reset'});
              }
            }
          }
      onLogoutFinished={() => alert("User logged out")}/>
  </View>;

export default Login;
