const API_BASE = "/api/certificate";
const pdf = require("html-pdf");
/*Plantilla para el pdf*/
const pdfTemplate = require("../../template/pdf/certificate");

/*Controladores*/
const ctrl_certificate = require("../../controller/CertificateController");

/*Modulo de routes*/
module.exports = function(app) {
  /*Generación de pdf*/
  app.get(`${API_BASE}/create_pdf/:id`, (req, res) => {

    ctrl_certificate.show_course_user(req.params.id, data => {
      pdf
        .create(pdfTemplate(data.message[0]), {})
        .toFile(`${__dirname}/certificado.pdf`, err => {
          if (err) {
            return Promise.reject();
          }
          res.sendFile(`${__dirname}/certificado.pdf`);
        });
    });
  });
};
