const express = require('express');
const ngrok = require('ngrok');


const APP_PORT = 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/webhook', function(request, response) {
    const requestData = {
        body: request.body,
        headers: request.headers,
        params: request.params,
    }
    console.log(JSON.stringify(requestData, null, 2));

    response.sendStatus(200);
});

app.listen(APP_PORT, async function() {
    console.log(`Express application is listening on ${APP_PORT}`);

    const ngrokURL = await ngrok.connect(APP_PORT);
    console.log(`ngrok [localhost:${APP_PORT}]: ${ngrokURL}`);
});
