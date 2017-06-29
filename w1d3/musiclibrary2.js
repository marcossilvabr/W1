var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  // FUNCTIONS TO IMPLEMENT:
  // prints a list of all playlists, in the form:
  // p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks
  printPlaylists: function () {
    var musicId = Object.keys(this.playlists);
    for(var i =0; i < musicId.length; i++) {
      var sumTracks = this.playlists[musicId[i]].tracks.length;
      console.log(musicId[i] + ":" + this.playlists[musicId[i]].name +  " - " + sumTracks + "tracks");
    }
  },
// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
var printTracks = function () {
var trackId = Object.keys(this.tracks);
for(var i =0; i < trackId.length; i++)
{
  console.log(trackId[i] + ": " + this.tracks[trackId[i]].name +  " by " + this.tracks[trackId[i]].artist + " " + "(" + this.tracks[trackId[i]].album + ")");
}
},
// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
printPlaylist : function (playlistId) {
  var musicId = Object.keys(this.playlists);
  var sumTracks = this.playlists[playlistId].tracks.length;
  console.log(playlistId + ":" + this.playlists[playlistId].name +  " - " + sumTracks + "tracks");
  var trackId = Object.keys(this.playlists[playlistId].tracks);
  for(var i =0; i < trackId.length; i++) {
    var abc = this.tracks[this.playlists[playlistId].tracks[i]]
       console.log(abc.id + ": " + abc.name +  " by " + abc.artist + " " + "(" + abc.album + ")" );
  }
},
// adds an existing track to an existing playlist
var addTrackToPlaylist = function (trackId, playlistId) {
  this.playlists[playlistId].tracks.push(trackId)
},
// generates a unique id
// (use this for addTrack and addPlaylist)
var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
//console.log(uid());
// adds a track to the library
var addTrack = function (name, artist, album) {
  trackId = uid();
  this.tracks[trackId] = {id: trackId , name :name,  artist: artist , album : album}
},
// adds a playlist to the library
var addPlaylist = function (name) {
playlistId = uid();
this.playlists[playlistId] = {id: playlistId , name :name,  tracks : [] }
},
}
library.printPlaylists();
library.printTracks();
library.printPlaylist('p01');
library.addTrackToPlaylist('t01', 'p02');
//console.log("number of tracks in playlist : "+ library.playlists.p02.tracks.length);
library.addTrack("a","b","c");
console.log(library.tracks)
addPlaylist("a");
console.log(library.playlists)