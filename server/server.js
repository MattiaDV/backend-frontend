import express from 'express';
import getPages from '../getPages.js';
const app = express()
const port = 3000;

app.use(express.static('./'));





app.get('/', async (req, res) => {
    getPages.getIndex(req, res);
})

app.get('/index', async (req, res) => {
    getPages.getIndex(req, res);
})

app.get('/login', async (req, res) => {
    getPages.getLogin(req, res);
})

app.get('/signin', async (req, res) => {
    getPages.getSignin(req, res);
})





app.listen(port, "127.0.0.1", () => {
    console.log("Listening to 127.0.0.1");
});