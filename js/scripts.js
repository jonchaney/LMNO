// This audio player was created with the help of Alex Katz 
// http://www.alexkatz.me/html5-audio/building-a-custom-html5-audio-player-with-javascript/
// and teamtreehouse.com

/*global pButtonNuNormol, pButtonSlowCrawl, console */

// stop music playing on page
var stopMusic = function () {
	var music = document.getElementById("NuNormol");
	if (music.play) {
		music.pause();
		music.load();
		pButtonNuNormol.className = "";
		pButtonNuNormol.className = "playNuNormol";
	}
	music = document.getElementById("SlowCrawl");
	if (music.play) {
		music.pause();
		music.load();
		pButtonSlowCrawl.className = "";
		pButtonSlowCrawl.className = "playSlowCrawl";
	}
	music = document.getElementById("KissCam");
	if (music.play) {
		music.pause();
		music.load();
		pButtonKissCam.className = "";
		pButtonKissCam.className = "playKissCam";
	}
};
  
// play Nu Normol track
var playAudioNuNormol = function (song) {
  var music = document.getElementById(song);
	if (music.paused) {
		stopMusic();
		music.play();
		pButtonNuNormol.className = "";
		pButtonNuNormol.className = "pauseNuNormol";
	} else {
		music.pause();
		pButtonNuNormol.className = "";
		pButtonNuNormol.className = "playNuNormol";
	}
};

// play Slow Crawl Track
var playAudioSlowCrawl = function (song) {
  var music = document.getElementById(song);
	if (music.paused) {
		stopMusic();
		music.play();
		pButtonSlowCrawl.className = "";
		pButtonSlowCrawl.className = "pauseSlowCrawl";
	} else {
		music.pause();
		pButtonSlowCrawl.className = "";
		pButtonSlowCrawl.className = "playSlowCrawl";
	}
};

// play Kiss Cam Track
var playAudioKissCam = function (song) {
  var music = document.getElementById(song);
	if (music.paused) {
		stopMusic();
		music.play();
		pButtonKissCam.className = "";
		pButtonKissCam.className = "pauseKissCam";
	} else {
		music.pause();
		pButtonKissCam.className = "";
		pButtonKissCam.className = "playKissCam";
	}
};

