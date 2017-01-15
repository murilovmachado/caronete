import React from 'react';
import {
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

const Home = () =>
  <View style={styles.container}>
    <Text onPress={Actions.friendList} style={styles.welcome}>Got in the car</Text>
    <MapView style={styles.map}/>
  </View>;

export default Home;
