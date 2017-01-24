import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Router } from '../Nav';
import LogOut from '../LogOut';
import styles from './styles';

export default class WaitingAnswer extends Component {
  constructor(props) {
    super(props);

    this.accept = this.accept.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  static route = {
    navigationBar: {
      title: 'Waiting Answer',
      renderRight: () => <LogOut></LogOut>,
    }
  };

  accept() {
    this.props.navigator.immediatelyResetStack([Router.getRoute('tracking')], 0);
  }

  cancel() {
    this.props.navigator.immediatelyResetStack([Router.getRoute('friendList')], 0);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this.accept} style={styles.welcome}>Friend Accepted</Text>
        <Text onPress={this.cancel} style={styles.welcome}>Cancel</Text>
      </View>
    );
  }
}

WaitingAnswer.propTypes = {
  navigator: React.PropTypes.object,
};
