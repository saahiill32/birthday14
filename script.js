// SLIDESHOW
let slides = document.querySelectorAll('.slide');
let index = 0;
setInterval(()=>{
  slides[index].classList.remove('active');
  index = (index+1)%slides.length;
  slides[index].classList.add('active');
},3000);

// AUDIO
const song1 = new Audio('assets/audio/song01.mp3');
const song2 = new Audio('assets/audio/song02.mp3');
const song3 = new Audio('assets/audio/song03.mp3');
const voice = new Audio('assets/audio/voicenote01.mp3');

song1.currentTime = 15;
song1.play();

// COUNTDOWN
const target = new Date("January 18, 2025 00:00:00").getTime();

setInterval(()=>{
  const now = new Date().getTime();
  const d = target-now;
  if(d<=0){
    document.getElementById('countdown-section').classList.add('hidden');
    song1.pause();
    song2.currentTime = 57;
    song2.play();
    startCelebration();
    return;
  }
  document.getElementById('hours').innerText = Math.floor(d/(1000*60*60));
  document.getElementById('minutes').innerText = Math.floor((d%(1000*60*60))/(1000*60));
  document.getElementById('seconds').innerText = Math.floor((d%(1000*60))/1000);
},1000);

function startCelebration(){
  const c = document.getElementById('celebration');
  c.classList.remove('hidden');
  setTimeout(()=>{
    document.getElementById('msg1').style.display="none";
    document.getElementById('msg2').style.display="none";
    document.getElementById('love').classList.remove('hidden');
    setTimeout(showLetter,3000);
  },8000);
}

function showLetter(){
  song2.pause();
  song3.currentTime = 122;
  song3.play();
  document.getElementById('letter-section').classList.remove('hidden');
  document.querySelector('.tap').onclick = showQuestion;
}

function showQuestion(){
  document.getElementById('letter-section').classList.add('hidden');
  document.getElementById('question').classList.remove('hidden');
  document.querySelectorAll('#question button').forEach(b=>{
    b.onclick=()=>{
      document.getElementById('question').classList.add('hidden');
      const f=document.getElementById('final-msg');
      f.classList.remove('hidden');
      setTimeout(showVoice,4000);
    }
  })
}

function showVoice(){
  document.getElementById('final-msg').classList.add('hidden');
  const v=document.getElementById('voice');
  v.classList.remove('hidden');
  v.onclick=()=>{
    song3.pause();
    voice.play();
    v.classList.add('hidden');
  }
}