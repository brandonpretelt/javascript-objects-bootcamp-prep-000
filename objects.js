var playlist = {
  artistName: "Senses Fail",
  song: "Still Searching"
};

function updatePlaylist(playlist, artistName, songTitle) {
   return Object.assign({}, playlsit, { [artistName]: songTitle} ); 
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}