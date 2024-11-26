// Importa il modulo Express
const express = require('express');
const app = express();
const port = 443; // Porta 443 per HTTPS

// Dati JSON che verranno restituiti quando si accede a /data
const data = {
  message: "Questo è un esempio di JSON restituito dal server",
  status: "success",
  data: {
    name: "Express",
    type: "Web framework"
  }
};

// Serve solo le rotte dinamiche, come /data
app.get('/data', (req, res) => {
  res.json(data); // Risponde con il JSON definito sopra
});

// Gestione delle pagine non trovate (errore 404)
app.use((req, res, next) => {
  res.status(404).send(`
    <html>
      <head><title>Pagina non trovata</title></head>
      <body>
        <h1>404 - Pagina non trovata</h1>
        <p>La pagina che stai cercando non esiste. <a href="/">Torna alla home page</a></p>
      </body>
    </html>
  `);
});

// Avvia il server
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
