var playlist = {
  artistName: "Senses Fail",
  song: "Still Searching"
};

function updatePlaylist(obj, artistName, song) {
   Object.assign({}, obj, {artistName, song})
}