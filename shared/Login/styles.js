import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    top: 350,
    left: 10,
    right: 10,
    bottom: 10,
  }
});

export default styles;