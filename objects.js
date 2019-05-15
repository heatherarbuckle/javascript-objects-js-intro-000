var playlist = {
  pink: "raise your glass",
  tswift: "me",
  oasis: "wonderwall"
 };

 function updatePlaylist(playlist, artist, song) {
   playlist.assign({artist : song});
   return playlist;
 }

function removeFromPlaylist(playlist, artist) {
  delete playlist.artist;
  return playlist;
}
