const API_BASE = "/api/report";
const excel = require("excel4node");
const _db = require("../../model/_db");
const today = new Date();
const ctrl_report = require("../../controller/ReportController");

var wb = new excel.Workbook();
var ws = wb.addWorksheet("Hoja1");

/*Estilo del body*/
var style = wb.createStyle({
  font: {
    size: 12
  },
  alignment: {
    wrapText: true
  }
});

/*Estilo del encabezado*/
var style_head = wb.createStyle({
  font: {
    size: 10,
    bold: true,
    name: "Helvetica"
  },
  alignment: {
    wrapText: true,
    horizontal: "center"
  },
  fill: {
    type: "pattern",
    patternType: "solid",
    fgColor: "#9dccb5"
  },
  border: {
    left: {
      style: "thin",
      color: "000000"
    },
    right: {
      style: "thin",
      color: "000000"
    },
    top: {
      style: "thin",
      color: "000000"
    },
    bottom: {
      style: "thin",
      color: "000000"
    },
    diagonal: {
      style: "thin",
      color: "000000"
    }
  }
});

module.exports = function(app) {
  app.post(`${API_BASE}/municipio`, function(req, res) {
    var params = req.body;
    _db.query(`CALL sp_calificacion_municipio(${params.id_cohort})`, function(
      data
    ) {
      var cont = 2;
      if (data.message.length == 0) {
        ws.cell(1, 1)
          .string("No hay datos para esta consulta.")
          .style(style);
      } else {
        /*Encabezados del reporte*/
        ws.cell(1, 1)
          .string(`ID Usuario`)
          .style(style_head);
        ws.cell(1, 2)
          .string(`Nombres`)
          .style(style_head);
        ws.cell(1, 3)
          .string(`Apellidos`)
          .style(style_head);
        ws.cell(1, 4)
          .string(`Correo`)
          .style(style_head);
        ws.cell(1, 5)
          .string(`Materias en curso`)
          .style(style_head);
        ws.cell(1, 6)
          .string(`Materia 1`)
          .style(style_head);
        ws.cell(1, 7)
          .string(`Nota sistema 1`)
          .style(style_head);
        ws.cell(1, 8)
          .string(`Nota presencial 1`)
          .style(style_head);
        ws.cell(1, 9)
          .string(`Nota total curso 1`)
          .style(style_head);
        ws.cell(1, 10)
          .string(`Materia 2`)
          .style(style_head);
        ws.cell(1, 11)
          .string(`Nota sistema 2`)
          .style(style_head);
        ws.cell(1, 12)
          .string(`Nota presencial 2`)
          .style(style_head);
        ws.cell(1, 13)
          .string(`Nota total curso 2`)
          .style(style_head);
        ws.cell(1, 14)
          .string(`Materia 3`)
          .style(style_head);
        ws.cell(1, 15)
          .string(`Nota sistema 3`)
          .style(style_head);
        ws.cell(1, 16)
          .string(`Nota presencial 3`)
          .style(style_head);
        ws.cell(1, 17)
          .string(`Nota total curso 3`)
          .style(style_head);
        ws.cell(1, 18)
          .string(`Materia 4`)
          .style(style_head);
        ws.cell(1, 19)
          .string(`Nota sistema 4`)
          .style(style_head);
        ws.cell(1, 20)
          .string(`Nota presencial 4`)
          .style(style_head);
        ws.cell(1, 21)
          .string(`Nota total curso 4`)
          .style(style_head);
        ws.cell(1, 22)
          .string(`Materia 5`)
          .style(style_head);
        ws.cell(1, 23)
          .string(`Nota sistema 5`)
          .style(style_head);
        ws.cell(1, 24)
          .string(`Nota presencial 5`)
          .style(style_head);
        ws.cell(1, 25)
          .string(`Nota total curso 5`)
          .style(style_head);
        ws.cell(1, 26)
          .string(`Materia 6`)
          .style(style_head);
        ws.cell(1, 27)
          .string(`Nota sistema 6`)
          .style(style_head);
        ws.cell(1, 28)
          .string(`Nota presencial 6`)
          .style(style_head);
        ws.cell(1, 29)
          .string(`Nota total curso 6`)
          .style(style_head);
        ws.cell(1, 30)
          .string(`Materia 7`)
          .style(style_head);
        ws.cell(1, 31)
          .string(`Nota sistema 7`)
          .style(style_head);
        ws.cell(1, 32)
          .string(`Nota presencial 7`)
          .style(style_head);
        ws.cell(1, 33)
          .string(`Nota total curso 7`)
          .style(style_head);
        ws.cell(1, 34)
          .string(`Materia 8`)
          .style(style_head);
        ws.cell(1, 35)
          .string(`Nota sistema 8`)
          .style(style_head);
        ws.cell(1, 36)
          .string(`Nota presencial 8`)
          .style(style_head);
        ws.cell(1, 37)
          .string(`Nota total curso 8`)
          .style(style_head);
        ws.cell(1, 38)
          .string(`Materia 9`)
          .style(style_head);
        ws.cell(1, 39)
          .string(`Nota sistema 9`)
          .style(style_head);
        ws.cell(1, 40)
          .string(`Nota presencial 9`)
          .style(style_head);
        ws.cell(1, 41)
          .string(`Nota total curso 9`)
          .style(style_head);
        ws.cell(1, 42)
          .string(`Materia 10`)
          .style(style_head);
        ws.cell(1, 43)
          .string(`Nota sistema 10`)
          .style(style_head);
        ws.cell(1, 44)
          .string(`Nota presencial 10`)
          .style(style_head);
        ws.cell(1, 45)
          .string(`Nota total curso 10`)
          .style(style_head);
        ws.cell(1, 46)
          .string(`Materia 11`)
          .style(style_head);
        ws.cell(1, 47)
          .string(`Nota sistema 11`)
          .style(style_head);
        ws.cell(1, 48)
          .string(`Nota presencial 11`)
          .style(style_head);
        ws.cell(1, 49)
          .string(`Nota total curso 11`)
          .style(style_head);
        ws.cell(1, 50)
          .string(`Cohorte`)
          .style(style_head);

        data.message[0].forEach(function(x) {
          /*Cuerpo del reporte*/
          ws.cell(cont, 1)
            .string(`${x.ID_Usuario}`)
            .style(style);
          ws.cell(cont, 2)
            .string(`${x.Nombres}`)
            .style(style);
          ws.cell(cont, 3)
            .string(`${x.Apellidos}`)
            .style(style);
          ws.cell(cont, 4)
            .string(`${x.Correo}`)
            .style(style);
          ws.cell(cont, 5)
            .string(`${x.Materias_en_Curso}`)
            .style(style);
          ws.cell(cont, 6)
            .string(`${x.Materia1}`)
            .style(style);
          ws.cell(cont, 7)
            .string(`${x.Nota_Sistema1}`)
            .style(style);
          ws.cell(cont, 8)
            .string(`${x.Nota_Presencial1}`)
            .style(style);
          ws.cell(cont, 9)
            .string(`${x.Nota_Total_Curso1}`)
            .style(style);
          ws.cell(cont, 10)
            .string(`${x.Materia2}`)
            .style(style);
          ws.cell(cont, 11)
            .string(`${x.Nota_Sistema2}`)
            .style(style);
          ws.cell(cont, 12)
            .string(`${x.Nota_Presencial2}`)
            .style(style);
          ws.cell(cont, 13)
            .string(`${x.Nota_Total_Curso2}`)
            .style(style);
          ws.cell(cont, 14)
            .string(`${x.Materia3}`)
            .style(style);
          ws.cell(cont, 15)
            .string(`${x.Nota_Sistema3}`)
            .style(style);
          ws.cell(cont, 16)
            .string(`${x.Nota_Presencial3}`)
            .style(style);
          ws.cell(cont, 17)
            .string(`${x.Nota_Total_Curso3}`)
            .style(style);
          ws.cell(cont, 18)
            .string(`${x.Materia4}`)
            .style(style);
          ws.cell(cont, 19)
            .string(`${x.Nota_Sistema4}`)
            .style(style);
          ws.cell(cont, 20)
            .string(`${x.Nota_Presencial4}`)
            .style(style);
          ws.cell(cont, 21)
            .string(`${x.Nota_Total_Curso4}`)
            .style(style);
          ws.cell(cont, 22)
            .string(`${x.Materia5}`)
            .style(style);
          ws.cell(cont, 23)
            .string(`${x.Nota_Sistema5}`)
            .style(style);
          ws.cell(cont, 24)
            .string(`${x.Nota_Presencial5}`)
            .style(style);
          ws.cell(cont, 25)
            .string(`${x.Nota_Total_Curso5}`)
            .style(style);
          ws.cell(cont, 26)
            .string(`${x.Materia6}`)
            .style(style);
          ws.cell(cont, 27)
            .string(`${x.Nota_Sistema6}`)
            .style(style);
          ws.cell(cont, 28)
            .string(`${x.Nota_Presencial6}`)
            .style(style);
          ws.cell(cont, 29)
            .string(`${x.Nota_Total_Curso6}`)
            .style(style);
          ws.cell(cont, 30)
            .string(`${x.Materia7}`)
            .style(style);
          ws.cell(cont, 31)
            .string(`${x.Nota_Sistema7}`)
            .style(style);
          ws.cell(cont, 32)
            .string(`${x.Nota_Presencial7}`)
            .style(style);
          ws.cell(cont, 33)
            .string(`${x.Nota_Total_Curso7}`)
            .style(style);
          ws.cell(cont, 34)
            .string(`${x.Materia8}`)
            .style(style);
          ws.cell(cont, 35)
            .string(`${x.Nota_Sistema8}`)
            .style(style);
          ws.cell(cont, 36)
            .string(`${x.Nota_Presencial8}`)
            .style(style);
          ws.cell(cont, 37)
            .string(`${x.Nota_Total_Curso8}`)
            .style(style);
          ws.cell(cont, 38)
            .string(`${x.Materia9}`)
            .style(style);
          ws.cell(cont, 39)
            .string(`${x.Nota_Sistema9}`)
            .style(style);
          ws.cell(cont, 40)
            .string(`${x.Nota_Presencial9}`)
            .style(style);
          ws.cell(cont, 41)
            .string(`${x.Nota_Total_Curso9}`)
            .style(style);
          ws.cell(cont, 42)
            .string(`${x.Materia10}`)
            .style(style);
          ws.cell(cont, 43)
            .string(`${x.Nota_Sistema10}`)
            .style(style);
          ws.cell(cont, 44)
            .string(`${x.Nota_Presencial10}`)
            .style(style);
          ws.cell(cont, 45)
            .string(`${x.Nota_Total_Curso10}`)
            .style(style);
          ws.cell(cont, 46)
            .string(`${x.Materia11}`)
            .style(style);
          ws.cell(cont, 47)
            .string(`${x.Nota_Sistema11}`)
            .style(style);
          ws.cell(cont, 48)
            .string(`${x.Nota_Presencial11}`)
            .style(style);
          ws.cell(cont, 49)
            .string(`${x.Nota_Total_Curso11}`)
            .style(style);
          ws.cell(cont, 50)
            .string(`${x.Cohorte}`)
            .style(style);
          cont++;
        });

        ctrl_report.create(req.body, function(data) {
          wb.write(
            `calificación_completa_municipio_${today.getDate()}/${today.getMonth() +
              1}/${today.getFullYear()}-${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}.xlsx`,
            res
          );
        });
      }
    });
  });
};
