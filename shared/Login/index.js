import React from 'react';
import {
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';
import { LoginButton } from 'react-native-fbsdk';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

const Login = () =>
  <View style={styles.container}>
    <LoginButton
      readPermissions={["public_profile", "user_friends"]}
      onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + result.error);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                alert("Login was successful with permissions: " + result.grantedPermissions)
                Actions.friendList({type: 'reset'});
              }
            }
          }
      onLogoutFinished={() => alert("User logged out")}/>
    <MapView style={styles.map}/>
    <Text style={styles.welcome}>Welcome to Caronete</Text>
  </View>;

export default Login;
