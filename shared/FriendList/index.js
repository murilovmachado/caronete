import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import { Router } from '../Nav';
import LogOut from '../LogOut';
import styles from './styles';

export default class FriendList extends Component {
  constructor(props) {
    super(props);
    this.toWaitingAnswer = this.toWaitingAnswer.bind(this);
    this.fetchFriendsCallback = this.fetchFriendsCallback.bind(this);
    this.state = {
      friends: [],
    };
  }

  static route = {
    navigationBar: {
      title: 'Friend List',
      renderRight: () => <LogOut></LogOut>,
    }
  };

  componentWillMount() {
    new GraphRequestManager().addRequest(this.fetchFriends).start();
  }


  get fetchFriendsConfig() {
    return {
      httpMethod: 'GET',
      version: 'v2.5',
      parameters: {
        'fields': {
            'string' : 'email,name,friends'
        }
      }
    }
  }

  fetchFriendsCallback(error, result) {
    if(error != null) {
      return;
    }

    this.setState({friends: result.friends.data});
  }

  get fetchFriends() {
    return new GraphRequest('/me', this.fetchFriendsConfig, this.fetchFriendsCallback);
  }

  renderFriends(friends) {
    if(friends.size === 0) {
      return null;
    }

    const friendElements = friends.map((friend, index) => {
      return (
        <Text key={index} onPress={this.toWaitingAnswer} style={styles.welcome}>{friend.name}</Text>
      );
    });

    return friendElements;
  }

  toWaitingAnswer() {
    this.props.navigator.push(Router.getRoute('waitingAnswer'));
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderFriends(this.state.friends)}
      </View>
    );
  }
}
