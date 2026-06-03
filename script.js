// Step Navigation
function nextStep(current) {
    document.getElementById(`step-${current}`).classList.remove('active');
    document.getElementById(`step-${current + 1}`).classList.add('active');
}

// Play Music
function playMusicAndNext() {
    let music = document.getElementById("bg-music");
    music.play().catch(e => console.log("Audio block: " + e));
    nextStep(3);
}

// Curtain Animation Logic
function openCurtains() {
    // Hide Step 4
    document.getElementById('step-4').classList.remove('active');
    
    // Show closed curtains
    const curtainContainer = document.getElementById('curtain-container');
    curtainContainer.classList.add('active');
    
    // Open curtains after a tiny pause and show final screen
    setTimeout(() => {
        curtainContainer.classList.add('open');
        document.getElementById('step-5').classList.add('active');
    }, 600); // 0.6 seconds pause before sliding open
}

// --- Heart Particle Engine ---
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Setting the heart symbol
    heart.innerHTML = '❤️';
    
    // Randomize position across the screen width
    heart.style.left = Math.random() * 100 + 'vw';
    
    // Randomize falling speed (between 3s to 6s)
    heart.style.animationDuration = Math.random() * 3 + 3 + 's';
    
    // Randomize size of hearts
    const size = Math.random() * 15 + 10; // 10px to 25px
    heart.style.fontSize = size + 'px';

    document.getElementById('heart-container').appendChild(heart);

    // Clean up heart from HTML after animation finishes so website doesn't lag
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Generate a new heart every 300 milliseconds
setInterval(createHeart, 300);
