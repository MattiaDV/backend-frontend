const { readFile } = require('fs/promises');

exports.getIndex = async function(req, res) {
    try {
        let htmlContent = await readFile('index.html', 'utf8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(htmlContent);
    } catch (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        console.log("Errore: ", err);
        return res.end('Errore del server interno');
    }
}

exports.getLogin = async function(req, res) {
    try {
        let htmlContent = await readFile('./pages/login.html', 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(htmlContent);
    } catch {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        console.log("Errore: ", err);
        return res.end('Errore del server interno');
    }
}

exports.getSignin = async function(req, res) {
    try {
        let htmlContent = await readFile('./pages/signin.html', 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(htmlContent);
    } catch {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        console.log("Errore: ", err);
        return res.end('Errore del server interno');
    }
}