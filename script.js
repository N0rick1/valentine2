const claw = document.getElementById('claw');
const seizeBtn = document.getElementById('seize-btn');
const noBtn = document.getElementById('no-btn');

// 1. Lógica del Juego
seizeBtn.addEventListener('click', () => {
    claw.style.top = "200px"; // La garra baja
    
    setTimeout(() => {
        // Simulamos que lo atrapa
        document.getElementById('heart').style.display = "none";
        alert("¡Atrapado! ❤️");
        nextScreen('letter-screen');
    }, 1000);
});

// 2. Función para cambiar de pantalla
function nextScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

// 3. El botón "No" que escapa
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// Botón Sí
document.getElementById('yes-btn').addEventListener('click', () => {
    alert("¡Sabía que dirías que sí! 🥰");
});
