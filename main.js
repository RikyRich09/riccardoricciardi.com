const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();
const port = 5000;

const basePath = '/var/www/riccardoricciardi.com/';
const distPath = path.join(basePath, 'dist');

const data = {
  message: "Questo è un esempio di JSON restituito dal server",
  status: "success",
  data: {
    name: "Express",
    type: "Web framework"
  }
};

app.use(compression());
app.use(express.static(distPath, {
  maxAge: '1d',
  etag: false
}));

app.get('/data', (req, res) => {
  res.json(data);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
