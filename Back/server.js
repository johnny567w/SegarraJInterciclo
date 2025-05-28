const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8081 });

wss.on('connection', ws => {
    console.log('Cliente conectado');

    const timer = setInterval(() => {
        ws.send(`Hola: ${new Date().toLocaleTimeString()}`);
    }, 4000);

    ws.on('close', () => {
        clearInterval(timer);
        console.log('Cliente desconectado');
    });
});

console.log('Servidor escuchando a 8081');
