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
               }
  }
  // FUNCTIONS TO IMPLEMENT:
  // prints a list of all playlists, in the form:
  // p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks
  var printPlaylists = function () {
  var musicId = Object.keys(library.playlists);
  for(var i =0; i < musicId.length; i++)
  {
    var sumTracks = library.playlists[musicId[i]].tracks.length;
    console.log(musicId[i] + ":" + library.playlists[musicId[i]].name +  " - " + sumTracks + "tracks");
  }
  }
  printPlaylists();
  // prints a list of all tracks, in the form:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)
  var printTracks = function () {
  var trackId = Object.keys(library.tracks);
  for(var i =0; i < trackId.length; i++)
  {
    console.log(trackId[i] + ": " + library.tracks[trackId[i]].name +  " by " + library.tracks[trackId[i]].artist + " " + "(" + library.tracks[trackId[i]].album + ")");
  }
  }
  printTracks();
  //}
  // prints a list of tracks for a given playlist, in the form:
  // p01: Coding Music - 2 tracks
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  var printPlaylist = function (playlistId) {
    var musicId = Object.keys(library.playlists);
    console.log('playlistId: '+ playlistId);
    var sumTracks = library.playlists[playlistId].tracks.length;
    console.log(playlistId + ":" + library.playlists[playlistId].name +  " - " + sumTracks + "tracks");
    var trackId = Object.keys(library.playlists[playlistId].tracks);
    for(var i =0; i < trackId.length; i++) {
      var abc = library.tracks[library.playlists[playlistId].tracks[i]]
         console.log(abc.id + ": " + abc.name +  " by " + abc.artist + " " + "(" + abc.album + ")" );
    }
  }
  printPlaylist('p01');
  // adds an existing track to an existing playlist
  var addTrackToPlaylist = function (trackId, playlistId) {
    library.playlists[playlistId].tracks.push(trackId)
  }
  addTrackToPlaylist('t01', 'p02');
  //console.log("number of tracks in playlist : "+ library.playlists.p02.tracks.length);
  // generates a unique id
  // (use this for addTrack and addPlaylist)
  var uid = function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  //console.log(uid());
  // adds a track to the library
  var addTrack = function (name, artist, album) {
    trackId = uid();
    library.tracks[trackId] = {id: trackId , name :name,  artist: artist , album : album}
  }
  addTrack("a","b","c");
  console.log(library.tracks)
  // adds a playlist to the library
  var addPlaylist = function (name) {
  playlistId = uid();
  library.playlists[playlistId] = {id: playlistId , name :name,  tracks : [] }
  }
  addPlaylist("a");
  console.log(library.playlists)