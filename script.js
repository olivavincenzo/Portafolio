async function caricaTesto() {
    try {
        const response = await fetch('testo.txt'); // Carica il file di testo
        const data = await response.text(); // Ottieni il contenuto del file

        // Suddividi il testo in base a "#post" e rimuovi le righe che iniziano con #post
        const posts = data.split('#post').map(post => post.trim()).filter(post => post !== '');

        const container = document.getElementById('contenitore');

        // Crea un nuovo elemento <main> per ciascun post
        posts.forEach(post => {
            const mainElement = document.createElement('main'); // Crea il <main>
            const scrollVer= document.createElement('section');
            const item= document.createElement('section');
            const main= document.createElement('main');

            scrollVer.classList.add('scroll', 'ver');
            item.classList.add('item');
            main.classList.add('content');

            const pElement = document.createElement('p'); // Crea il <p> per il testo

            // Sostituisci i ritorni a capo con <br> e inserisci il contenuto nel <p>
            pElement.innerHTML = post.replace(/\n/g, '<br>');
            
            mainElement.appendChild(pElement);
            main.appendChild(mainElement);
            item.appendChild(main);
            scrollVer.appendChild(item);

            // Aggiungi il <main> al contenitore principale
            container.appendChild(scrollVer);
        });
    } catch (error) {
        console.error('Errore nel caricamento del file:', error);
    }
}

// Carica il testo quando la pagina è caricata
window.onload = caricaTesto;