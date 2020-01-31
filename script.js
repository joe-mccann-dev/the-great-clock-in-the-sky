const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

// -- AUDIO SELECTORS -- //
const songTime = document.getElementsByTagName('audio')[0].getAttribute('id');
const time = document.getElementById(songTime);
const songGig = document.getElementsByTagName('audio')[1].getAttribute('id');
const gig = document.getElementById(songGig);
const songSolo = document.getElementsByTagName('audio')[2].getAttribute('id');
const solo = document.getElementById(songSolo);
// -- END AUDIO SELECTORS -- //

const lyrics = document.querySelector('.lyrics');
const album = document.querySelector('.dark-side');


function setDate() {
  
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  if (seconds === 0) {
    secondHand.style.transition = "none";
  } // these statements only seem to work if minutes !== 0. 
  else if (seconds > 0) {
    secondHand.style.transition = "all .2s";
  }
  
  const minutes = now.getMinutes();
  const minsDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  
  function playMusic () {
    
    if ((minutes === 0)  && (seconds < 34)) {
      time.play();
      lyricsArtDisplay();
      lyrics.textContent = 'ticking away the moments that make up a dull day . . . ';
      
    } else if ((minutes === 30) && (seconds < 31)) {
      solo.play();
      lyricsArtDisplay();
      lyrics.textContent = 'And you run and you run to catch up with the sun, but it\'s sinking . . . ';
  
    } else if (((minutes === 15) || (minutes == 45)) && (seconds < 32)) {
      gig.play();
      lyricsArtDisplay();
      lyrics.textContent = 'Why should I be frightened of dying? There\'s no reason for it, you\'ve gotta go sometime . . . ';
  
    } else {
      lyrics.style.display = 'none';
      album.style.display = "inline-block";
    }
  }
  playMusic();
}

setInterval(setDate, 1000);

const lyricsArtDisplay = () => {
  lyrics.style.display = 'block';
  album.style.display = 'none';
}
