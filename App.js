import Expo from 'expo';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Linking
} from 'react-native';

const spotifyUrlParams = {
  clientId: 'd0e8d6977e9648ec8c625ec0bdd2afa7',
  responseType: 'token',
  redirectUri: 'exp://g9-aci.tsung-yen-tsai.playlist.exp.direct:80/%2B'
};

const onButtonPress = () => {
  Alert.alert('PRESSED!');
};

const getSpotifyAuth = () => {
  return Expo.WebBrowser.openBrowserAsync(`https://accounts.spotify.com/authorize?` +
                `client_id=${spotifyUrlParams.clientId}&` +
                `response_type=${spotifyUrlParams.responseType}&` +
                `redirect_uri=${spotifyUrlParams.redirectUri}`)
        .catch((err) => { console.error(err) });
};

export default class App extends Component {
  componentDidMount() {
    Linking.addEventListener('url', this._handleSpotifyRedirect);
    console.log(Expo.Constants.linkingUri);
  }

  _handleSpotifyRedirect = (event) => {
    console.log('From redirect:' + event.url);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Login to Spotify</Text>
        <Button
          onPress={getSpotifyAuth}
          title="login"
          color="green"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// AppRegistry.registerComponent.
