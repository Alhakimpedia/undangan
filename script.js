
const weddingDate = new Date("Jan 18, 2026 08:00:00").getTime();
const countdownEl = document.getElementById("countdown");
function updateCountdown(){
    const now = new Date().getTime();
    const distance = weddingDate - now;
    if(distance <0){ countdownEl.innerHTML="Hari Pernikahan Telah Tiba!"; clearInterval(timer); return; }
    const days=Math.floor(distance/(1000*60*60*24));
    const hours=Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    const minutes=Math.floor((distance % (1000*60*60))/(1000*60));
    const seconds=Math.floor((distance % (1000*60))/1000);
    countdownEl.innerHTML=`${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
}
const timer = setInterval(updateCountdown,1000);

const submitBtn = document.getElementById('submitRSVP');
submitBtn.addEventListener('click',()=>{
    const nama=document.getElementById('nama').value;
    const pesan=document.getElementById('pesan').value;
    if(nama && pesan){
        alert(`Terima kasih ${nama}, doa Anda telah dikirim!`);
        document.getElementById('nama').value='';
        document.getElementById('pesan').value='';
    } else { alert('Silakan isi nama dan pesan Anda.'); }
});

const music=document.getElementById('bgMusic');
const musicControl=document.getElementById('musicControl');
musicControl.addEventListener('click',()=>{
    if(music.paused){ music.play(); musicControl.innerText="Pause Musik"; } 
    else{ music.pause(); musicControl.innerText="Putar Musik"; }
});

const sections = document.querySelectorAll('section');
window.addEventListener('scroll',()=>{
    sections.forEach(section=>{
        const top=section.getBoundingClientRect().top;
        const windowHeight=window.innerHeight;
        if(top<windowHeight-100){ section.classList.add('active'); }
    });
});
