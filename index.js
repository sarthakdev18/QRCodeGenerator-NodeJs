const QrCode = require('qrcode');
const path = require('path');

//QrCode.toString('data goes here', (err, data) => {
  //  if(err) throw err;
    //console.log(data);
//})

QrCode.toFile(path.join(__dirname, 'qrCode.png'), 'First Node.js project!', (err) => {
    if(err) throw err;
})