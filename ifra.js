function showMessage(){
    document.getElementById('msg').style.display='block';
    document.getElementById('letter').classList.add('show');
    heartRain();
  }

  function toggleMode(){document.body.classList.toggle('sunset')}

  function heartRain(){
    for(let i=0;i<30;i++){
      const h=document.createElement('div');
      h.className='rain-heart';
      h.innerHTML='❤️';
      h.style.left=Math.random()*100+'vw';
      h.style.animationDelay=Math.random()+'s';
      document.body.appendChild(h);
      setTimeout(()=>h.remove(),3000)
    }
  }
  /* ✨ Floating "I ❤️ U" letters like Ifra names */
function floatingLove(){
const phrases = ["I ❤️ U", "I ❤️ U", "I ❤️ U", "I ❤️ U", "I ❤️ U"];
for(let i=0;i<15;i++){ // 15 phrases at a time
  const n=document.createElement('div');
  n.className='float-name';
  n.innerText = phrases[Math.floor(Math.random()*phrases.length)];
  n.style.left = Math.random()*100+'vw';
  n.style.top = '-50px';
  n.style.fontSize = (16 + Math.random()*20) + 'px'; // random size
  n.style.color = '#ff4d6d';
  n.style.opacity = 0.8;
  n.style.animationDelay = Math.random()*10+'s';
  document.body.appendChild(n);
}
}

// Call it together with floatingNames
floatingNames();
floatingLove();

  function floatingNames(){
    for(let i=0;i<8;i++){
      const n=document.createElement('div');
      n.className='float-name';
      n.innerText='Ifra';
      n.style.left=Math.random()*100+'vw';
      n.style.animationDelay=Math.random()*10+'s';
      document.body.appendChild(n)
    }
  }

  floatingNames();{
    document.getElementById('msg').style.display='block'
  }

  document.addEventListener('mousemove',e=>{
    const p=document.createElement('div')
    p.className='particle'
    p.innerHTML=Math.random()>.5?'❤️':'✨'
    p.style.left=e.clientX+'px'
    p.style.top=e.clientY+'px'
    document.body.appendChild(p)
    setTimeout(()=>p.remove(),1500)
  })

  document.addEventListener('dblclick',()=>{
    document.getElementById('secret').style.display='block'
  })

  for(let i=0;i<60;i++){
    const s=document.createElement('div')
    s.className='star'
    s.style.left=Math.random()*100+'vw'
    s.style.animationDuration=5+Math.random()*10+'s'
    s.style.opacity=Math.random()
    document.body.appendChild(s)
  }
  /* 🌹 ROSE FLOW */
  function dropPetals(){
  playMusic();
  const petals=document.querySelectorAll('.petal');
  petals.forEach((petal,i)=>{
  setTimeout(()=>{
    petal.classList.add('fall');
  },i*300);
});

setTimeout(()=>{
  document.getElementById('roseScreen').style.opacity=0;
},2600);

setTimeout(()=>{
  document.getElementById('roseScreen').remove();
  document.querySelector('.card').classList.add('show');
},3200);
}


const music = document.getElementById("bgMusic");

function unlockAudio(){
  music.play().then(()=>{
    music.pause();
    music.currentTime = 0;
    music.muted = false;
  }).catch(()=>{});
}

// page load pe unlock
document.addEventListener("DOMContentLoaded", unlockAudio);

function playMusic(){
  music.muted = false;
  music.volume = 0.6;
  music.play().catch(()=>{});
}

const BIRTHDAY = {
  day: 4,   // 4 Jan
  month: 0  // January
};

let birthdayMode = false;

function getNextBirthday(){
const now = new Date();
let year = now.getFullYear();

const thisYearBirthday = new Date(year, BIRTHDAY.month, BIRTHDAY.day, 0, 0, 0);

// agar 4 Jan guzar chuki hai → next year
if(now > thisYearBirthday){
  year++;
}

return new Date(year, BIRTHDAY.month, BIRTHDAY.day, 0, 0, 0);
}

function isBirthdayToday(){
const today = new Date();
return (
  today.getDate() === BIRTHDAY.day &&
  today.getMonth() === BIRTHDAY.month
);
}

function startBirthdayDay(){
if(birthdayMode) return;
birthdayMode = true;
hideFinale();
document.body.classList.add("cinematicZoom");
document.body.classList.add("cinematic");
document.getElementById("birthdayScene")?.classList.add("show");
fireworks();
setTimeout(()=>{
startPoetry();
},10000); // 🎂 20 sec baad poetry start

document.getElementById("countdown").innerHTML =
  "🎉 HAPPY BIRTHDAY IFRA 🎂💖";
}

function endBirthdayDay(){
birthdayMode = false;

document.body.classList.remove("cinematic");
document.getElementById("birthdayScene")?.classList.remove("show");
}
setInterval(()=>{
const now = new Date();
const nextBirthday = getNextBirthday();
const diff = nextBirthday - now;
const countdownEl = document.getElementById("countdown");

// 🎂 BIRTHDAY DAY (POORA DIN)
if(isBirthdayToday()){
  startBirthdayDay();
  return;
}

// 🔁 Birthday khatam → reset
if(birthdayMode){
  endBirthdayDay();
}

// ⏳ NORMAL COUNTDOWN
const d = Math.floor(diff / 86400000);
const h = Math.floor(diff / 3600000) % 24;
const m = Math.floor(diff / 60000) % 60;
const s = Math.floor(diff / 1000) % 60;


countdownEl.innerHTML =
  `🎂 ${d} days ${h} hrs ${m} mins <span>${s}</span> secs left`;
},1000);




/* 🌸 PETALS */


/* 💥 HEART BURST */
function heartBurst(){
for(let i=0;i<28;i++){
  const h=document.createElement('div');
  h.className='heart-burst';
  h.innerHTML='❤️';
  h.style.left='50vw';
  h.style.top='50vh';
  h.style.setProperty('--x',(Math.random()*400-200)+'px');
  h.style.setProperty('--y',(Math.random()*400-200)+'px');
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),1200);
}
}


function fireworks(){
for(let i=0;i<40;i++){
  const f=document.createElement('div');
  f.className='firework';
  f.innerHTML='🎆';
  f.style.left='50vw';
  f.style.top='50vh';
  f.style.setProperty('--x',(Math.random()*500-250)+'px');
  f.style.setProperty('--y',(Math.random()*500-250)+'px');
  document.body.appendChild(f);
  setTimeout(()=>f.remove(),1500);
}
}

function showFinale(){

  // 🎂 Agar birthday chal rahi hai → finale mat dikhao
  if(birthdayMode){
    hideFinale();
    startBirthdayDay(); // ensure birthday screen ON
    return;
  }

  const finale = document.getElementById('finale');
  finale.classList.add('show');
  finale.style.pointerEvents = "auto";
  fireworks();
}
function hideFinale(){
  const finale = document.getElementById('finale');
  finale.classList.remove('show');
  finale.classList.add('hide');

  setTimeout(()=>{
    finale.classList.remove('hide');
    finale.style.pointerEvents = "none";
  },800);
}





/* 💌 BIRTHDAY POETRY FOR IFRA */
let poetryIndex = 0;
let charIndex = 0;
let poetryActive = false;
let typingTimer = null;
let autoNextTimer = null;

const poetryLines = [
"Ifra… 🌙",
"Tum sirf meri pasand nahi ho",
"tum meri aadat ho",
"Tumhari mojoodgi bhi",
"mere dil ko sukoon deti hai",
"Tumhare bina har din adhoora sa lagta hai",
"Tumhari muskurahat",
"meri zindagi ka sabse khoobsurat manzar hai",
"Agar mohabbat ka koi rang hota",
"toh wo tumhari aankhon jaisa hota",
"Tum meri dua bhi ho",
"aur meri har subah ka sabab bhi",
"Me tumhara hona chahta hu",
"Tumse",
"Bohot mohobbat krta hu me",
"Aaj tumhara din hai 🎂",
"lekin mera har din",
"sirf tumhara hai ❤️",
"Hamesha khush raho",
"Allah hifazat krre tumhari",
"Hamari duaye tmhare sath hain hamesha",
"Happy Birthday, Ifra 💖"
];

function startPoetry(){
poetryActive = true;
poetryIndex = 0;
document.getElementById("poetryOverlay").classList.add("show");
typeLine();
playWhisper();

}

function typeLine(){
if(poetryIndex >= poetryLines.length){
  endPoetry();
  return;
}

charIndex = 0;
const line = poetryLines[poetryIndex];
const el = document.getElementById("poetryLine");
el.textContent = "";

typingTimer = setInterval(()=>{
  el.textContent += line.charAt(charIndex);
  charIndex++;

  if(charIndex >= line.length){
    clearInterval(typingTimer);
    poetryIndex++;

    autoNextTimer = setTimeout(()=>{
      typeLine();
    },3000); // ⏱️ next line auto
  }
},70); // typing speed
}

function nextPoetryManual(){
clearInterval(typingTimer);
clearTimeout(autoNextTimer);
typeLine();
}

function endPoetry(){
poetryActive = false;
document.getElementById("poetryOverlay").classList.remove("show");
}

document.addEventListener("click", ()=>{
if(poetryActive){
  showPoetryLine();
  resetPoetryTimer();
}
});

document.addEventListener("touchstart", ()=>{
if(poetryActive){
  showPoetryLine();
  resetPoetryTimer();
}
});

function resetPoetryTimer(){
clearInterval(poetryTimer);
poetryTimer = setInterval(()=>{
  showPoetryLine();
},4500);
}
