var playlist = {
  artistName: "Senses Fail",
  song: "Still Searching"
};

function updatePlaylist(obj, key, value) {
   return Object.assign({}, obj, { [key]: value} ); 
}

function removeFromPlaylist(obj, key) {
  delete obj.key;
  return obj;
}