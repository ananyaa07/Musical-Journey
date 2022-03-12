const C4 = new Audio("piano songs/sound1.mp3")
const Db4 = new Audio("piano songs/sound2.mp3")
const D4 = new Audio("piano songs/sound3.mp3")
const Eb4 = new Audio("piano songs/sound4.mp3")
const E4 = new Audio("piano songs/sound5.mp3")
const F4 = new Audio("piano songs/sound6.mp3")
const Gb4 = new Audio("piano songs/sound7.mp3")
const G4 = new Audio("piano songs/sound8.mp3")
const Ab4 = new Audio("piano songs/sound9.mp3")
const A4 = new Audio("piano songs/sound10.mp3")
const Bb4 = new Audio("piano songs/sound11.mp3")
const B4 = new Audio("piano songs/sound12.mp3")
const C5 = new Audio("piano songs/sound13.mp3")
const Db5 = new Audio("piano songs/sound14.mp3")
const D5 = new Audio("piano songs/sound15.mp3")
const Eb5 = new Audio("piano songs/sound16.mp3")
const E5 = new Audio("piano songs/sound17.mp3")

const playSound = audio => {
    const clone = audio.cloneNode();
clone.play();
setTimeout(() => (clone.volume = 0.8), 400)
setTimeout(() => (clone.volume = 0.6), 800)
setTimeout(() => (clone.volume = 0.4), 1200)
setTimeout(() => (clone.volume = 0.2), 1600)
setTimeout(() => (clone.volume = 0.0), 2000);
};

//key1
const C4Key = document.querySelector(".C4-key");
const playC4 = () => {
    playSound(C4);
C4Key.classList.add("active");
setTimeout(() => C4Key.classList.remove("active"), 200)
;};
C4Key.addEventListener("click", playC4);

//key2

const Db4Key = document.querySelector(".Db4-key");
const playDb4 = () => {
    playSound(Db4);
Db4Key.classList.add("active");
setTimeout(() => Db4Key.classList.remove("active"), 200)
;};
Db4Key.addEventListener("click", playDb4);


//key3
const D4Key = document.querySelector(".D4-key");
const playD4 = () => {
    playSound(D4);
D4Key.classList.add("active");
setTimeout(() => D4Key.classList.remove("active"), 200)
;};
Key.addEventListener("click", playD4);


//key4
const Eb4Key = document.querySelector(".Eb4-key");
const playEb4 = () => {
    playSound(Eb4);
Eb4Key.classList.add("active");
setTimeout(() => Eb4Key.classList.remove("active"), 200)
;};
Eb4Key.addEventListener("click", playEb4);


//key5
const E4Key = document.querySelector(".E4-key");
const playE4 = () => {
    playSound(E4);
E4Key.classList.add("active");
setTimeout(() => E4Key.classList.remove("active"), 200)
;};
E4Key.addEventListener("click", playE4);


//key6
const F4Key = document.querySelector(".F4-key");
const playF4 = () => {
    playSound(F4);
F4Key.classList.add("active");
setTimeout(() => F4Key.classList.remove("active"), 200)
;};
F4Key.addEventListener("click", playF4);


//key7
const Gb4Key = document.querySelector(".Gb4-key");
const playGb4 = () => {
    playSound(Gb4);
Gb4Key.classList.add("active");
setTimeout(() => Gb4Key.classList.remove("active"), 200)
;};
Gb4Key.addEventListener("click", playGb4);





//key8
const G4Key = document.querySelector(".G4-key");
const playG4 = () => {
    playSound(G4);
G4Key.classList.add("active");
setTimeout(() => G4Key.classList.remove("active"), 200)
;};
G4Key.addEventListener("click", playG4);


//key9
const Ab4Key = document.querySelector(".Ab4-key");
const playAb4 = () => {
    playSound(Ab4);
Ab4Key.classList.add("active");
setTimeout(() => Ab4Key.classList.remove("active"), 200)
;};
Ab4Key.addEventListener("click", playAb4);


//key10
const A4Key = document.querySelector(".A4-key");
const playA4 = () => {
    playSound(A4);
A4Key.classList.add("active");
setTimeout(() => A4Key.classList.remove("active"), 200)
;};
A4Key.addEventListener("click", playA4);


//key11
const Bb4Key = document.querySelector(".Bb4-key");
const playBb4 = () => {
    playSound(Bb4);
Bb4Key.classList.add("active");
setTimeout(() => Bb4Key.classList.remove("active"), 200)
;};
Bb4Key.addEventListener("click", playBb4);

//key12
const 
B4Key = document.querySelector(".B4-key");
const playB4 = () => {
    playSound(
        B4
    );

    B4Key.classList.add("active");
setTimeout(() => 
B4Key.classList.remove("active"), 200)
;};

B4Key.addEventListener("click", playB4);


//key13
const C5Key = document.querySelector(".C5-key");
const playC5 = () => {
    playSound(C5);
C5Key.classList.add("active");
setTimeout(() => C5Key.classList.remove("active"), 200)
;};
C5Key.addEventListener("click", playC5);

//key14
const Db5Key = document.querySelector(".Db5-key");
const playDb5 = () => {
    playSound(Db5);
Db5Key.classList.add("active");
setTimeout(() => Db5Key.classList.remove("active"), 200)
;};
Db5Key.addEventListener("click", playDb5);


//key15
const D5Key = document.querySelector(".D5-key");
const playD5 = () => {
    playSound(D5);
D5Key.classList.add("active");
setTimeout(() => D5Key.classList.remove("active"), 200)
;};
D5Key.addEventListener("click", playD5);

//key16
const Eb5Key = document.querySelector(".Eb5-key");
const playEb5 = () => {
    playSound(Eb5);
Eb5Key.classList.add("active");
setTimeout(() => Eb5Key.classList.remove("active"), 200)
;};
Eb5Key.addEventListener("click", playEb5);

//key17
const E5Key = document.querySelector(".E5-key");
const playE5 = () => {
    playSound(E5);
E5Key.classList.add("active");
setTimeout(() => E5Key.classList.remove("active"), 200)
;};
E5Key.addEventListener("click", playE5);

window.addEventListener("keydown", ({keyCode}) => {

//press Q
if (keyCode === 81) return playC4();
if (keyCode === 50) return playDb4();
if (keyCode === 87) return playD4();
if (keyCode === 51) return playEb4();
if (keyCode === 69) return playE4();
if (keyCode === 82) return playF4();
if (keyCode === 53) return playGb4();
if (keyCode === 84) return playG4();
if (keyCode === 54) return playAb4();
if (keyCode === 89) return playAb4();
if (keyCode === 55) return playBb4();
if (keyCode === 85) return playB4();
if (keyCode === 73) return playC5();
if (keyCode === 57) return playDb5();

if  (keyCode === 79) return playD5();
if  (keyCode === 80) return playE5();


});


