import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import styles from './styles';

export default class FriendList extends Component {
  constructor(props) {
    super(props);
    this.fetchFriendsCallback = this.fetchFriendsCallback.bind(this);
    this.state = {
      friends: [],
    };

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
        <Text key={index} onPress={Actions.waitingAnswer} style={styles.welcome}>{friend.name}</Text>
      );
    });

    return friendElements;
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderFriends(this.state.friends)}
      </View>
    );
  }
}
