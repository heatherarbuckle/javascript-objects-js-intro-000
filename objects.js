var playlist = {
  pink: "raise your glass",
  tswift: "me",
  oasis: "wonderwall"
 };

 function updatePlaylist(playlist, artistName, songTitle) {
   Object.assign({artistName : songTitle});
   return playlist;
 }

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}
