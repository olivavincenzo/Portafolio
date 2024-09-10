// Funzione per caricare il file di testo e inserirlo nel div
async function caricaTesto() {
    try {
        const response = await fetch('testo.txt'); // Carica il file di testo
        const data = await response.text(); // Ottieni il contenuto del file
        const formattedText = data.replace(/\n/g, '<br>'); // Sostituisci ritorni a capo con <br>
        document.getElementById('contenitore').innerHTML = formattedText; // Inserisci il testo nel div
    } catch (error) {
        console.error('Errore nel caricamento del file:', error);
    }
}

// Carica il testo quando la pagina è caricata
window.onload = caricaTesto;
