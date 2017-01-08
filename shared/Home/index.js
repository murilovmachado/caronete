import React from 'react';
import {
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';
import styles from './styles';

const Home = () =>
  <View style={styles.container}>
    <MapView style={styles.map}/>
    <Text style={styles.welcome}>Welcome to Caronete</Text>
  </View>;

export default Home;