       // Funzione per caricare il file di testo e inserirlo nel div
       async function caricaTesto() {
        try {
            const response = await fetch('testo.txt'); // Il file di testo da cui vuoi leggere
            const data = await response.text(); // Ottieni il contenuto del file
            document.getElementById('contenitore').innerText = data; // Inserisci il testo nel div
        } catch (error) {
            console.error('Errore nel caricamento del file:', error);
        }
    }

    // Carica il testo quando la pagina è caricata
    window.onload = caricaTesto;