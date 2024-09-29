// Contoh JavaScript sederhana
console.log("Game Store Loaded!");
function searchText() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let content = document.getElementById('content');
    let paragraphs = content.getElementsByTagName('p');

    // Reset highlight sebelumnya
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].classList.remove('highlight');
    }

    // Loop melalui paragraf dan cari teks yang cocok
    for (let i = 0; i < paragraphs.length; i++) {
        let text = paragraphs[i].textContent.toLowerCase();
        if (text.includes(input) && input !== "") {
            paragraphs[i].classList.add('highlight'); // Menambahkan highlight jika cocok
        }
    }
}
function searchGames() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const gameCards = document.querySelectorAll('.game-card');
    
    gameCards.forEach(card => {
        const title = card.querySelector('h4').innerText.toLowerCase();
        if (title.includes(input)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
