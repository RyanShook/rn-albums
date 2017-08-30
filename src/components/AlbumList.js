import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

//Create a class based component with level states
class AlbumList extends Component {
//Initialized empty state
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
  }

  render() {
    console.log(this.state);
    return (
      <View>
        <Text>Album List!!</Text>
      </View>
    );
  }
}

export default AlbumList;
