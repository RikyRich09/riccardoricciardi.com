const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const app = express();

app.use(express.json(), cors())

const configDB = {
    host: "localhost",
    user: "root",
    password: "",
    database: "node-react"
}

const connectDB = async () => {
    try {
        const connection = await mysql.createConnection(configDB)
        console.log('Connesso al database');
        return connection
    } catch (error) {
        console.error('Errore: ', error);
        process.exit(1)
    }
}

app.get('/items', async (req, res) => {
    try {
        const connection = await connectDB()
        const [rows] = await connection.execute('SELECT * FROM items')
        await connection.end()
        res.json(rows)
    } catch (error) {
        console.error('Errore: ', error);
        res.status(500).json({ status: 500, message: 'Errore dal server' })
    }
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server avviato su http://localhost:' + (process.env.PORT || 3000));
});
