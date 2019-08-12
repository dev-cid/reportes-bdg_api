var nodemailer = require("nodemailer");

module.exports = {
  transporter: async function() {
    const result = await nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      auth: {
        user: "no-reply@cid.edu.co",
        pass: "Cid2019."
      }
    });

    return result;
  }
};
