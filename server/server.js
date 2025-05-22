import express from 'express';
import getPages from '../getPages.js';
import { readFile, writeFile } from 'fs/promises';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const port = 3000;

// Crea server HTTP da Express
const server = http.createServer(app);

// Inizializza Socket.IO sul server HTTP
const io = new Server(server);

app.use(express.static('./'));
app.use(express.json());

app.get('/', async (req, res) => {
    getPages.getIndex(req, res);
});

app.get('/index', async (req, res) => {
    getPages.getIndex(req, res);
});

app.post('/messaggio', async (req, res) => {
    try {
        const data = await readFile('./pages/messages.json', 'utf8');
        const messages = JSON.parse(data);

        messages.push(req.body);

        await writeFile('./pages/messages.json', JSON.stringify(messages, null, 2), 'utf8');

        // Manda il messaggio a tutti i client connessi via socket
        io.emit('newMessage', req.body);

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Messaggio aggiunto con successo!');
    } catch (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        console.log("Errore: ", err);
        res.end('Errore del server interno');
    }
});

// Socket.IO: gestione connessioni
io.on('connection', (socket) => {
    console.log('Utente connesso:', socket.id);

    socket.on('disconnect', () => {
        console.log('Utente disconnesso:', socket.id);
    });
});

// Fai partire il server HTTP (non app.listen)
server.listen(port, "127.0.0.1", () => {
    console.log(`Listening on http://127.0.0.1:${port}`);
});
