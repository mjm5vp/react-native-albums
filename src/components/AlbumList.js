import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = {
    albums: []
  };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail album={album} key={album.title} />);
  }

  render() {
    console.log(this.state);
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
