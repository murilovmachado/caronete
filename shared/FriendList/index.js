import React from 'react';
import {
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

const FriendList = () =>
  <View style={styles.container}>
    <Text onPress={Actions.waitingAnswer} style={styles.welcome}>Kamila</Text>
    <Text onPress={Actions.waitingAnswer} style={styles.welcome}>Cecilia</Text>
  </View>;

export default FriendList;
