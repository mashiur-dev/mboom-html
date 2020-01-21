$(document).ready(function() {

   /*===============================
   * Owl for
   * .team-profile,
   * .shows,
   * .music-video-carouse
   ==================================*/
   $('.team-profile, .shows, .music-video-carouse, .blog-carousel').owlCarousel({
      margin: 20,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
   });

   /*===============================
   * Owl for
   * .music-videos
   ==================================*/
   $('.music-videos').owlCarousel({
      items:1,
      nav:true,
      margin:20,
      autoplayHoverPause: true,
      animateOut: 'slideOutUp',
      animateIn: 'slideInUp',
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      //dotsContainer: ".owl-stage-outer"
   });


   /*======================
   * Instagram feed
   ========================*/
    $.instagramFeed({
        //'username': 'shoyebzz',
        'tag': 'music',
        'container': "#instagram-grid",
        'margin': 1,
        'display_profile': false,
        'items': 4,
        'items_per_row': 2,
        'styling': true,
    });




});

/*===============================
* Fixed menu js
==================================*/
$(window).scroll(function() {
   var scroll = $(window).scrollTop();
      //console.log(scroll);
   if (scroll >= 50) {
      //console.log('a');
       $("#header-area").addClass("fixed");
   } else {
      //console.log('a');
       $("#header-area").removeClass("fixed");
   }
});

/*======================
* Audio player
========================*/
$(".tx-audioplayer").musicPlayer({
  playlistSelector: '#tx-audioplayer-playlist',
  autoPlay: false ,
  volume: 80,
  loop: false,
  timeSeparator: ' / ',
  playerAbovePlaylist: true,
  infoElements: ['title' , 'artist'],
  timeElements: ['current', 'duration'],
  controlElements: ['backward', 'play', 'forward', 'stop'],
});

$(".tx-hotsong-player").musicPlayer({
  playlistSelector: '#tx-hotsong-playlist',
  autoPlay: false ,
  volume: 80,
  loop: false,
  timeSeparator: ' / ',
  playerAbovePlaylist: true,
  infoElements: ['title' , 'artist'] ,
  elements: ['artwork', 'information', 'volume', 'controls', 'time', 'progress', ],
  timeElements: ['current', 'duration'],
  controlElements: ['backward', 'play', 'forward', 'stop'],
});

//init wow
new WOW().init();
