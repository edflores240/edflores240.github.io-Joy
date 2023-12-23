jQuery(document).ready(function($) {
  "use strict";

  /* Banner Player */
  $('#header_player').each(function() {
    var myPlaylist = new jPlayerPlaylist({
      jPlayer: "#main_player",
      cssSelectorAncestor: "#header_player"
    }, [{
        title: 'Ruby',
        artist: 'Written By: Jay',
        mp3: 'media/audio/joy.wav',
        poster: "media/audio/01.jpg",
      }, {
        title: 'Ruby',
        artist: 'Written By: Jay',
        mp3: 'media/audio/joy.wav',
        poster: "media/audio/01.jpg",
      }, {
        title: 'Ruby',
        artist: 'Written By: Jay',
        mp3: 'media/audio/joy.wav',
        poster: "media/audio/01.jpg",
      }, {
        title: 'Ruby',
        artist: 'Written By: Jay',
        mp3: 'media/audio/joy.wav',
        poster: "media/audio/01.jpg",
      }
    ], {
      playlistOptions: {
        enableRemoveControls: true,
        html: '.play',
        // autoPlay: true,
      },
      swfPath: "dependencies/jPlayer/js",
      supplied: "oga, mp3",
      wmode: "window",
      useStateClassSkin: true,
      toggleDuration: true,
      autoBlur: false,
      smoothPlayBar: true,
      keyEnabled: true,
      displayTime: 'slow',
    });



    // Show The Current Track !!
    $("#main_player").on(
      $.jPlayer.event.ready + ' ' + $.jPlayer.event.play,
      function(event) {
        var current = myPlaylist.current;
        var playlist = myPlaylist.playlist;
        $.each(playlist, function(index, obj) {
          if (index == current) {
            $("#nowPlaying .track-name").html(obj.title);
            $("#nowPlaying .artist-name").html(obj.artist);
          }
        });
      });
  });


  new jPlayerPlaylist({
    jPlayer: "#jquery_jplayer_1",
    cssSelectorAncestor: "#jp_container_1"
  }, [
  ], {
    swfPath: "../../dist/jplayer",
    supplied: "oga, mp3",
    wmode: "window",
    useStateClassSkin: true,
    autoBlur: false,
    smoothPlayBar: true,
    keyEnabled: true
  });

});