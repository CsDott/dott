// Przykładowe przedmioty w skrzynkach
const cases = {
  budget: ["Glock-18 | Candy Apple", "MP9 | Sand Dashed", "P250 | Boreal Forest", "UMP-45 | Carbon Fiber", "Desert Eagle | Urban DDPAT"],
  elite: ["AK-47 | Redline", "AWP | Atheris", "M4A4 | Neo-Noir", "AUG | Momentum", "FAMAS | Mecha Industries"],
  king: ["Karambit | Doppler", "Butterfly Knife | Fade", "M9 Bayonet | Marble Fade", "AWP | Dragon Lore", "AK-47 | Fire Serpent"]
};

let caseType = new URLSearchParams(window.location.search).get('case');
let audio = new Audio('assets/sounds/case_opening.mp3');

function openCase() {
  const caseButton = document.querySelector('button');
  caseButton.disabled = true;
  caseButton.innerText = "Trwa otwieranie...";

  // Animacja otwierania skrzynki
  document.getElementById('caseImage').style.animation = 'shake 2s ease-out';

  // Odtwarzanie dźwięku
  audio.play();

  // Losowanie przedmiotu
  setTimeout(() => {
    const items = cases[caseType];
    const randomIndex = Math.floor(Math.random() * items.length);
    const skin = items[randomIndex];

    // Wyświetlanie wyniku
    document.getElementById('result').innerText = `🎉 Wylosowałeś: ${skin}!`;

    // Przywrócenie przycisku
    caseButton.disabled = false;
    caseButton.innerText = "Otwórz Skrzynkę";
    document.getElementById('caseImage').style.animation = ''; // Zatrzymanie animacji
  }, 2000); // Czas trwania animacji (2 sekundy)
}
