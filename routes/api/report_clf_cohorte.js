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
  app.post(`${API_BASE}/cohorte`, function(req, res) {
    _db.query(`CALL sp_calificacion_cohorte()`, function(data) {
      if (data.message.length == 0) {
        ws.cell(1, 1)
          .string("No hay datos para esta consulta.")
          .style(style);
      } else {
        var cont = 2;
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
          .string(`Materia 12`)
          .style(style_head);
        ws.cell(1, 51)
          .string(`Nota sistema 12`)
          .style(style_head);
        ws.cell(1, 52)
          .string(`Nota presencial 12`)
          .style(style_head);
        ws.cell(1, 53)
          .string(`Nota total curso 12`)
          .style(style_head);
        ws.cell(1, 54)
          .string(`Materia 13`)
          .style(style_head);
        ws.cell(1, 55)
          .string(`Nota sistema 13`)
          .style(style_head);
        ws.cell(1, 56)
          .string(`Nota presencial 13`)
          .style(style_head);
        ws.cell(1, 57)
          .string(`Nota total curso 13`)
          .style(style_head);
        ws.cell(1, 58)
          .string(`Materia 14`)
          .style(style_head);
        ws.cell(1, 59)
          .string(`Nota sistema 14`)
          .style(style_head);
        ws.cell(1, 60)
          .string(`Nota presencial 14`)
          .style(style_head);
        ws.cell(1, 61)
          .string(`Nota total curso 14`)
          .style(style_head);
        ws.cell(1, 62)
          .string(`Materia 15`)
          .style(style_head);
        ws.cell(1, 63)
          .string(`Nota sistema 15`)
          .style(style_head);
        ws.cell(1, 64)
          .string(`Nota presencial 15`)
          .style(style_head);
        ws.cell(1, 65)
          .string(`Nota total curso 15`)
          .style(style_head);
        ws.cell(1, 66)
          .string(`Materia 16`)
          .style(style_head);
        ws.cell(1, 67)
          .string(`Nota sistema 16`)
          .style(style_head);
        ws.cell(1, 68)
          .string(`Nota presencial 16`)
          .style(style_head);
        ws.cell(1, 69)
          .string(`Nota total curso 16`)
          .style(style_head);
        ws.cell(1, 70)
          .string(`Materia 17`)
          .style(style_head);
        ws.cell(1, 71)
          .string(`Nota sistema 17`)
          .style(style_head);
        ws.cell(1, 72)
          .string(`Nota presencial 17`)
          .style(style_head);
        ws.cell(1, 73)
          .string(`Nota total curso 17`)
          .style(style_head);
        ws.cell(1, 74)
          .string(`Materia 18`)
          .style(style_head);
        ws.cell(1, 75)
          .string(`Nota sistema 18`)
          .style(style_head);
        ws.cell(1, 76)
          .string(`Nota presencial 18`)
          .style(style_head);
        ws.cell(1, 77)
          .string(`Nota total curso 18`)
          .style(style_head);
        ws.cell(1, 78)
          .string(`Materia 19`)
          .style(style_head);
        ws.cell(1, 79)
          .string(`Nota sistema 19`)
          .style(style_head);
        ws.cell(1, 80)
          .string(`Nota presencial 19`)
          .style(style_head);
        ws.cell(1, 81)
          .string(`Nota total curso 19`)
          .style(style_head);
        ws.cell(1, 82)
          .string(`Materia 20`)
          .style(style_head);
        ws.cell(1, 83)
          .string(`Nota sistema 20`)
          .style(style_head);
        ws.cell(1, 84)
          .string(`Nota presencial 20`)
          .style(style_head);
        ws.cell(1, 85)
          .string(`Nota total curso 20`)
          .style(style_head);
        ws.cell(1, 86)
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
            .string(`${x.Materia12}`)
            .style(style);
          ws.cell(cont, 51)
            .string(`${x.Nota_Sistema12}`)
            .style(style);
          ws.cell(cont, 52)
            .string(`${x.Nota_Presencial12}`)
            .style(style);
          ws.cell(cont, 53)
            .string(`${x.Nota_Total_Curso12}`)
            .style(style);
          ws.cell(cont, 54)
            .string(`${x.Materia13}`)
            .style(style);
          ws.cell(cont, 55)
            .string(`${x.Nota_Sistema13}`)
            .style(style);
          ws.cell(cont, 56)
            .string(`${x.Nota_Presencial13}`)
            .style(style);
          ws.cell(cont, 57)
            .string(`${x.Nota_Total_Curso13}`)
            .style(style);
          ws.cell(cont, 58)
            .string(`${x.Materia14}`)
            .style(style);
          ws.cell(cont, 59)
            .string(`${x.Nota_Sistema14}`)
            .style(style);
          ws.cell(cont, 60)
            .string(`${x.Nota_Presencial14}`)
            .style(style);
          ws.cell(cont, 61)
            .string(`${x.Nota_Total_Curso14}`)
            .style(style);
          ws.cell(cont, 62)
            .string(`${x.Materia15}`)
            .style(style);
          ws.cell(cont, 63)
            .string(`${x.Nota_Sistema15}`)
            .style(style);
          ws.cell(cont, 64)
            .string(`${x.Nota_Presencial15}`)
            .style(style);
          ws.cell(cont, 65)
            .string(`${x.Nota_Total_Curso15}`)
            .style(style);
          ws.cell(cont, 66)
            .string(`${x.Materia16}`)
            .style(style);
          ws.cell(cont, 67)
            .string(`${x.Nota_Sistema16}`)
            .style(style);
          ws.cell(cont, 68)
            .string(`${x.Nota_Presencial16}`)
            .style(style);
          ws.cell(cont, 69)
            .string(`${x.Nota_Total_Curso16}`)
            .style(style);
          ws.cell(cont, 70)
            .string(`${x.Materia17}`)
            .style(style);
          ws.cell(cont, 71)
            .string(`${x.Nota_Sistema17}`)
            .style(style);
          ws.cell(cont, 72)
            .string(`${x.Nota_Presencial17}`)
            .style(style);
          ws.cell(cont, 73)
            .string(`${x.Nota_Total_Curso17}`)
            .style(style);
          ws.cell(cont, 74)
            .string(`${x.Materia18}`)
            .style(style);
          ws.cell(cont, 75)
            .string(`${x.Nota_Sistema18}`)
            .style(style);
          ws.cell(cont, 76)
            .string(`${x.Nota_Presencial18}`)
            .style(style);
          ws.cell(cont, 77)
            .string(`${x.Nota_Total_Curso18}`)
            .style(style);
          ws.cell(cont, 78)
            .string(`${x.Materia19}`)
            .style(style);
          ws.cell(cont, 79)
            .string(`${x.Nota_Sistema19}`)
            .style(style);
          ws.cell(cont, 80)
            .string(`${x.Nota_Presencial19}`)
            .style(style);
          ws.cell(cont, 81)
            .string(`${x.Nota_Total_Curso19}`)
            .style(style);
          ws.cell(cont, 82)
            .string(`${x.Materia20}`)
            .style(style);
          ws.cell(cont, 83)
            .string(`${x.Nota_Sistema20}`)
            .style(style);
          ws.cell(cont, 84)
            .string(`${x.Nota_Presencial20}`)
            .style(style);
          ws.cell(cont, 85)
            .string(`${x.Nota_Total_Curso20}`)
            .style(style);
          ws.cell(cont, 86)
            .string(`${x.Cohorte}`)
            .style(style);
          cont++;
        });

        ctrl_report.create(req.body, function(data) {
          wb.write(
            `calificación_completa_cohorte_${today.getDate()}/${today.getMonth() +
              1}/${today.getFullYear()}-${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}.xlsx`,
            res
          );
        });
      }
    });
  });
};
