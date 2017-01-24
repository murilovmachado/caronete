import React, { Component } from 'react';
import { Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { Router } from '../Nav';
import LogOut from '../LogOut';
import styles from './styles';

export default class Tracking extends Component {
  constructor(props) {
    super(props);

    this.finish = this.finish.bind(this);
  }

  static route = {
    navigationBar: {
      title: 'Tracking',
      renderRight: () => <LogOut></LogOut>,
    }
  };

  finish() {
    this.props.navigator.immediatelyResetStack([Router.getRoute('friendList')], 0);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this.finish} style={styles.welcome}>Got in the car</Text>
        <MapView style={styles.map}/>
      </View>
    );
  }
}

Tracking.propTypes = {
  navigator: React.PropTypes.object,
};
