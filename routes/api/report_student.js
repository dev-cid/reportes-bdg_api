
const API_BASE = "/api/report";
const excel = require("excel4node");
const _db = require("../../model/_db");
const today = new Date();
const ctrl_report = require("../../controller/ReportController");
const pdf = require("html-pdf");
const pdfTemplate = require("../../template/pdf/cert_notas");


module.exports = function(app) {
  app.post(`${API_BASE}/student`, function(req, res) {
    var params = req.body;
    _db.procedure(`CALL sp_calification_student(?)`,[params.id], function(
      data
    ) {
     
      if (data.message[0].length == 0) {
        return res.json({
          message :"No hay datos para esta consulta."
        }).status(404)
      } else {
          const onliTotal = []
          data.message[0].forEach(function(element) {
              const {
                 Nota_Presencial1,Nota_Presencial2,Nota_Presencial3, Nota_Presencial4, Nota_Presencial5,
                 Nota_Presencial6, Nota_Presencial7, Nota_Presencial8, Nota_Presencial9, Nota_Presencial10,
                 Nota_Sistema1, Nota_Sistema2, Nota_Sistema3, Nota_Sistema4, Nota_Sistema5,
                 Nota_Sistema6, Nota_Sistema7, Nota_Sistema8, Nota_Sistema9, Nota_Sistema10,
                 Correo, ...rest} =element
              onliTotal.push(rest)
          })
          const name = `calificacion_completa_estudiante.pdf`
          pdf.create(pdfTemplate(onliTotal))
             .toFile(`${__dirname}/${name}`, err => {
              if (err) {
                return Promise.reject();
              }
             res.sendFile(`${__dirname}/${name}`);
          });  
      }
    });
  },
  app.post(`${API_BASE}/student_admin`, function(req, res) {
    var params = req.body;
    console.log(params)
    _db.query(`select id from mdl_user where username='${params.username}'`, function(_data){
      if(_data.message.length == 0){
        console.log("e")
        return res.json({message: "error"})
      }else{
       _db.procedure(`CALL sp_calification_student(?)`,_data.message[0]['id'], function(
       data
    ) {
       

      if (data.message[0].length == 0) {
        return res.json({
          message :"No hay datos para esta consulta."
        }).status(404)
      } else {
          const onliTotal = []


          data.message[0].forEach(function(element) {
              console.log(element)
              const {
                 Nota_Presencial1,Nota_Presencial2,Nota_Presencial3, Nota_Presencial4, Nota_Presencial5,
                 Nota_Presencial6, Nota_Presencial7, Nota_Presencial8, Nota_Presencial9, Nota_Presencial10,
                 Nota_Sistema1, Nota_Sistema2, Nota_Sistema3, Nota_Sistema4, Nota_Sistema5,
                 Nota_Sistema6, Nota_Sistema7, Nota_Sistema8, Nota_Sistema9, Nota_Sistema10,
                 Correo, ...rest} =element
              onliTotal.push(rest)
          })
          const name = `calificacion_completa_estudiante.pdf`
          pdf.create(pdfTemplate(onliTotal))
             .toFile(`${__dirname}/${name}`, err => {
              if (err) {
                return Promise.reject();
              }
             res.sendFile(`${__dirname}/${name}`);
          });  
      }
    });
      }
 })

    // _db.procedure(`CALL sp_calification_student(?)`,[params.id], function(
    //   data
    // ) {
     
    //   if (data.message[0].length == 0) {
    //     return res.json({
    //       message :"No hay datos para esta consulta."
    //     }).status(404)
    //   } else {
    //       const onliTotal = []
    //       data.message[0].forEach(function(element) {
    //           const {
    //              Nota_Presencial1,Nota_Presencial2,Nota_Presencial3, Nota_Presencial4, Nota_Presencial5,
    //              Nota_Presencial6, Nota_Presencial7, Nota_Presencial8, Nota_Presencial9, Nota_Presencial10,
    //              Nota_Sistema1, Nota_Sistema2, Nota_Sistema3, Nota_Sistema4, Nota_Sistema5,
    //              Nota_Sistema6, Nota_Sistema7, Nota_Sistema8, Nota_Sistema9, Nota_Sistema10,
    //              Correo, ...rest} =element
    //           onliTotal.push(rest)
    //       })
    //       const name = `calificacion_completa_estudiante.pdf`
    //       pdf.create(pdfTemplate(onliTotal))
    //          .toFile(`${__dirname}/${name}`, err => {
    //           if (err) {
    //             return Promise.reject();
    //           }
    //          res.sendFile(`${__dirname}/${name}`);
    //       });  
    //   }
    // });
  })
  );
};
