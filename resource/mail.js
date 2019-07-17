var nodemailer = require('nodemailer');

module.exports = {

    transporter: async function(){
       const result = await nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'cardenasvillaevelyn@gmail.com',
                pass: 'prueba.net'
            }
        });

        return result
    },
}