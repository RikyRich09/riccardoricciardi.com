const express = require('express');
const app = express();
const port = 5000;

const basePath = '/var/www/riccardoricciardi.com/';

const data = {
  message: "Questo è un esempio di JSON restituito dal server",
  status: "success",
  data: {
    name: "Express",
    type: "Web framework"
  }
};

app.get('/', (req, res) => {
  res.sendFile(basePath + 'index.html', (err) => {
    err ? res.status(500).sendFile(basePath + '500.html');
  });
});

app.get('/data', (req, res) => {
  res.json(data);
});

// Gestione degli errori 404 (Pagina non trovata)
app.use((req, res) => {
  res.status(404).sendFile(basePath + '404.html');
});

// Gestione degli errori 500 (Server interno)
app.use((err, req, res, next) => {
  res.status(500).sendFile(basePath + '500.html');
});

// Avvia il server
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
