import React from 'react';
import axios from 'axios';

// import AppContainer from '../containers/AppContainer';
import Songs from '../components/Songs';
import {convertAlbums, convertAlbum, convertSong} from '../utils';
import Albums from './Albums';

class Artist extends React.Component {

  constructor(props){
    super(props);
    console.log('in artistt constructor');
  }

  componentDidMount () {
    console.log('in artist component did mount');
    const artistId = this.props.routeParams.artistId;
    const selectArtist = this.props.selectArtist;
    selectArtist(artistId);

    // axios.get(`/api/artists/${artistId}/albums`)
    //   .then(res => res.data)
    //   .then(album => this.props.onLoad(convertAlbums(album)));
    //
    // axios.get(`/api/artists/${artistId}/songs`)
    //   .then(res => res.data)
    //   .then(songs => this.props.songsOnLoad(songs));

  }

  render(){
    console.log('In Artist view', this.props);

    const albums = this.props.artist.albums;
    const songs = this.props.artist.songs;
    const currentSong = this.props.currentSong;
    const isPlaying = this.props.isPlaying;
    const toggleOne = this.props.toggleOne;

    return (
      <div>
        <h3>ARTIST NAME</h3>
        <h4>ALBUMS</h4>
          <Albums albums= {albums} />
        <h4>SONGS</h4>
          <Songs
            songs= {songs}
            currentSong= {currentSong}
            isPlaying= {isPlaying}
            toggleOne= {toggleOne} />
      </div>
    );

  }
}


export default Artist;
