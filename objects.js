var playlist = {
  artistName: "Senses Fail",
  song: "Still Searching"
};

function updatePlaylist(playlist, artistName, value) {
   return Object.assign({}, obj, { [key]: value} ); 
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}