const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const http = require('http');

const apiUrl = 'http://10.114.1.143:5000/talktome';

const client = new Client({
    webVersionCache: {
        type: "remote",
        remotePath:
            "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html",
    },
    authStrategy: new LocalAuth()
});

client.once('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('message', message => {


    const data = JSON.stringify({
        message: message.body
    });

    const options = {
        hostname: '10.114.1.143',
        port: 5000,
        path: '/talktome',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    };



    // Send HTTP request
    const req = http.request(options, res => {
        let responseBody = '';
        res.on('data', chunk => {
            responseBody += chunk;
        });
        res.on('end', () => {
            // Check if response is valid JSON
            let responseObj;
            try {
                responseObj = JSON.parse(responseBody);
            } catch (error) {
                console.log('some message failed--');
                return;
            }

            // Check if response contains a message property
            if (responseObj && responseObj.message) {
                const responseObj = JSON.parse(responseBody);
                const responseMessage = responseObj.message;
                if (!message.isGroupMsg) {
                    message.reply(responseMessage)
                }
            } else {
                console.log('some message failed--');
            }
        });
    });


    req.on('error', error => {
        console.log('some message failed--');
    });


    req.write(data);
    req.end();
});

client.initialize();
