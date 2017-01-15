import React from 'react';
import {
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

const WaitingAnswer = () =>
  <View style={styles.container}>
    <Text onPress={() => Actions.tracking({type: 'reset'})} style={styles.welcome}>Friend Accepted</Text>
    <Text onPress={() => Actions.friendList({type: 'reset'})} style={styles.welcome}>Cancel</Text>
  </View>;

export default WaitingAnswer;
