var playlist = {
  pink: "raise your glass",
  tswift: "me",
  oasis: "wonderwall"
 };

 function updatePlaylist(playlist, artistName, songTitle) {
   const newPlaylist = Object.assign({}, playlist, {artistName : songTitle});
   return newPlaylist;
 }

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}
