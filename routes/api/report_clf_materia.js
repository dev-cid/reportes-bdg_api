const API_BASE = "/api/report";
const excel = require("excel4node");
const _db = require("../../model/_db");
const today = new Date();

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
  app.get(`${API_BASE}/materia`, function(req, res) {
    // _db.query(`CALL sp_cohorte_materia()`, function(data) {
    _db.query(`CALL sp_cohorte_materia`, function(data) {
      if (data.message.length == 0) {
        ws.cell(1, 1)
          .string("No hay datos para esta consulta.")
          .style(style);
      } else {
        /*Encabezados del reporte*/
        var cont = 2;
        ws.cell(1, 1)
          .string(`Nombres`)
          .style(style_head);
        ws.cell(1, 2)
          .string(`Apellidos`)
          .style(style_head);
        ws.cell(1, 3)
          .string(`Correo`)
          .style(style_head);
        ws.cell(1, 4)
          .string(`Materia`)
          .style(style_head);
        ws.cell(1, 5)
          .string(`Nota sistema`)
          .style(style_head);
        ws.cell(1, 6)
          .string(`Nota presencial`)
          .style(style_head);
        ws.cell(1, 7)
          .string(`Nota total curso`)
          .style(style_head);
        ws.cell(1, 8)
          .string(`Cohorte`)
          .style(style_head);

        data.message[0].forEach(function(x, i) {
          /*Cuerpo del reporte*/
          ws.cell(cont, 1)
            .string(`${x.Nombres}`)
            .style(style);
          ws.cell(cont, 2)
            .string(`${x.Apellidos}`)
            .style(style);
          ws.cell(cont, 3)
            .string(`${x.Correo}`)
            .style(style);
          ws.cell(cont, 4)
            .string(`${x.Materia}`)
            .style(style);
          ws.cell(cont, 5)
            .string(`${x.Nota_Sistema}`)
            .style(style);
          ws.cell(cont, 6)
            .string(`${x.Nota_Presencial}`)
            .style(style);
          ws.cell(cont, 7)
            .string(`${x.Nota_Total_Curso}`)
            .style(style);
          ws.cell(cont, 8)
            .string(`${x.Cohorte}`)
            .style(style);
          cont++;
        });

        wb.write(
          `calificación_cohorte_materia_${today.getDate()}/${today.getMonth() +
            1}/${today.getFullYear()}-${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}.xlsx`,
          res
        );
      }
    });
  });
};
