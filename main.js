// Importa il modulo Express
const express = require('express');
const app = express();
const port = 3000; // Puoi cambiare la porta se necessario

// Dati JSON che verranno restituiti quando si accede a /data
const data = {
  message: "Questo è un esempio di JSON restituito dal server",
  status: "success",
  data: {
    name: "Express",
    type: "Web framework"
  }
};

// Endpoint per /data
app.get('/data', (req, res) => {
  res.json(data); // Risponde con il JSON definito sopra
});

// Avvia il server
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
