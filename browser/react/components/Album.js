import React from 'react';
// import AppContainer from '../containers/AppContainer';
import Songs from '../components/Songs';

class Album extends React.Component {

  constructor(){
    super();
  }

  componentDidMount () {
    const albumId = this.props.routeParams.albumId;
    const selectAlbum = this.props.selectAlbum;

    selectAlbum(albumId);
  }

  render(){
    const album = this.props.album;
    const currentSong = this.props.currentSong;
    const isPlaying = this.props.isPlaying;
    const toggleOne = this.props.toggleOne;

    return (
      <div className="album">
        <div>
          <h3>{ album.name }</h3>
          <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs
          songs={album.songs}
          currentSong={currentSong}
          isPlaying={isPlaying}
          toggleOne={toggleOne} />
      </div>
    );

  }
}

// const Album = (props) => {
//
//   console.log(props);
//   const routedAlbum = selectAlbum(props.routeParams.albumId);
//
//   const album = props.album;
//   const currentSong = props.currentSong;
//   const isPlaying = props.isPlaying;
//   const toggleOne = props.toggleOne;
//
//   return (
//     <div className="album">
//       <div>
//         <h3>{ album.name }</h3>
//         <img src={ album.imageUrl } className="img-thumbnail" />
//       </div>
//       <Songs
//         songs={album.songs}
//         currentSong={currentSong}
//         isPlaying={isPlaying}
//         toggleOne={toggleOne} />
//     </div>
//   );
// }

export default Album;
