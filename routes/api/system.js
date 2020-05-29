
const API_BASE = "/api/system";
const excel = require("excel4node");
const _db = require("../../model/_db");
const today = new Date();


const create =(wb, name, res)=>{
    wb.write(
        `${name}_${today.getDate()}/${today.getMonth() +
          1}/${today.getFullYear()}-${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}.xlsx`,
        res
      );
}


module.exports = function(app) {

  app.get(`${API_BASE}/deleted`, function(req, res) {

    _db.query("select * from deleted_users", function(
      data
    ) {
 
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
    
      if (data.message.length == 0) {
        return res.json({
          message :"No hay datos para esta consulta."
        }).status(404)
      } else {
        
          var cont = 2;
          /*Encabezados del reporte*/
          ws.cell(1, 1)
            .string(`Nombre`)
            .style(style_head);
          ws.cell(1, 2)
            .string(`Apellido`)
            .style(style_head);
          ws.cell(1, 3)
            .string(`Correo`)
            .style(style_head);
          ws.cell(1, 4)
            .string(`Creación`)
            .style(style_head);
          ws.cell(1, 5)
            .string(`Eliminacion`)
            .style(style_head);
          ws.cell(1, 6)
            .string(`Municipio`)
            .style(style_head);
         
  
          data.message.forEach(function(x) {
            /*Cuerpo del reporte*/
            ws.cell(cont, 1)
              .string(`${x.Nombre}`)
              .style(style);
            ws.cell(cont, 2)
              .string(`${x.Apellido}`)
              .style(style);
            ws.cell(cont, 3)
              .string(`${x.Correo}`)
              .style(style);
            ws.cell(cont, 4)
              .string(`${x.Fcreacion}`)
              .style(style);
            ws.cell(cont, 5)
              .string(`${x.feliminacion}`)
              .style(style);
            ws.cell(cont, 6)
              .string(x.Municipio)
              .style(style);
            cont++;
          });
  
           create(wb,"usuarios_eliminados", res)
        
      }
    });
  });


  app.get(`${API_BASE}/students`, function(req, res) {

    _db.query("select * from students", function(
      data
    ) {
 
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
    
      if (data.message.length == 0) {
        return res.json({
          message :"No hay datos para esta consulta."
        }).status(404)
      } else {
        
          var cont = 2;
          /*Encabezados del reporte*/
          ws.cell(1, 1)
            .string(`Documento`)
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
            .string(`Fecha`)
            .style(style_head);
          ws.cell(1, 6)
            .string(`CLEI`)
            .style(style_head);
          ws.cell(1, 7)
            .string(`Tipo`)
            .style(style_head);
          ws.cell(1, 8)
            .string(`Cohorte`)
            .style(style_head);
          ws.cell(1, 9)
            .string(`Municipio`)
            .style(style_head);
         
  
          data.message.forEach(function(x) {
            /*Cuerpo del reporte*/
            ws.cell(cont, 1)
              .string(`${x.username}`)
              .style(style);
            ws.cell(cont, 2)
              .string(`${x.firstname}`)
              .style(style);
            ws.cell(cont, 3)
              .string(`${x.lastname}`)
              .style(style);
            ws.cell(cont, 4)
              .string(`${x.email}`)
              .style(style);
            ws.cell(cont, 5)
              .string(`${x.Fecha}`)
              .style(style);
            ws.cell(cont, 6)
              .string(x.CLEI)
              .style(style);
            ws.cell(cont, 7)
              .string(x.Tipo)
              .style(style);
            ws.cell(cont, 8)
              .string(x.name)
              .style(style);
            ws.cell(cont, 9)
              .string(x.Municipio)
              .style(style);
            cont++;
          });
  
           create(wb,"estudiantes_completos", res)
        
      }
    });
  });

  app.get(`${API_BASE}/suspended`, function(req, res) {

    _db.query("select * from suspended_students", function(
      data
    ) {
 
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
    
      if (data.message.length == 0) {
        return res.json({
          message :"No hay datos para esta consulta."
        }).status(404)
      } else {
        
          var cont = 2;
          /*Encabezados del reporte*/
          ws.cell(1, 1)
            .string(`Documento`)
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
            .string(`Fecha de creación`)
            .style(style_head);
          ws.cell(1, 6)
            .string(`Municipio`)
            .style(style_head);
         
  
          data.message.forEach(function(x) {
            /*Cuerpo del reporte*/
            ws.cell(cont, 1)
              .string(`${x.documento}`)
              .style(style);
            ws.cell(cont, 2)
              .string(`${x.Nombre}`)
              .style(style);
            ws.cell(cont, 3)
              .string(`${x.Apellido}`)
              .style(style);
            ws.cell(cont, 4)
              .string(`${x.Correo}`)
              .style(style);
            ws.cell(cont, 5)
              .string(`${x.Fcreacion}`)
              .style(style);
            ws.cell(cont, 6)
              .string(x.Municipio)
              .style(style);
            cont++;
          });
  
           create(wb,"estudiantes_supendidos", res)
        
      }
    });
  });

  
  app.get(`${API_BASE}/teachers`, function(req, res) {

    _db.query("select * from teachers", function(
      data
    ) {
 
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
    
      if (data.message.length == 0) {
        return res.json({
          message :"No hay datos para esta consulta."
        }).status(404)
      } else {
        
          var cont = 2;
          /*Encabezados del reporte*/
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
            .string(`Fecha`)
            .style(style_head);
          ws.cell(1, 5)
            .string(`Municipio`)
            .style(style_head);
         
  
          data.message.forEach(function(x) {
            /*Cuerpo del reporte*/
            ws.cell(cont, 1)
              .string(`${x.Nombre}`)
              .style(style);
            ws.cell(cont, 2)
              .string(`${x.Apellido}`)
              .style(style);
            ws.cell(cont, 3)
              .string(`${x.Correo}`)
              .style(style);
            ws.cell(cont, 4)
              .string(`${x.Fecha}`)
              .style(style);
            ws.cell(cont, 5)
              .string(x.Municipio)
              .style(style);
            cont++;
          });
  
           create(wb,"docentes", res)
        
      }
    });
  });

  app.get(`${API_BASE}/secretaries`, function(req, res) {

    _db.query("select * from rector_and_secretaries", function(
      data
    ) {
 
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
    
      if (data.message.length == 0) {
        return res.json({
          message :"No hay datos para esta consulta."
        }).status(404)
      } else {
        
          var cont = 2;
          /*Encabezados del reporte*/
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
            .string(`Fecha`)
            .style(style_head);
          ws.cell(1, 5)
            .string(`Municipio`)
            .style(style_head);
         
  
          data.message.forEach(function(x) {
            /*Cuerpo del reporte*/
            ws.cell(cont, 1)
              .string(`${x.Nombre}`)
              .style(style);
            ws.cell(cont, 2)
              .string(`${x.Apellido}`)
              .style(style);
            ws.cell(cont, 3)
              .string(`${x.Correo}`)
              .style(style);
            ws.cell(cont, 4)
              .string(`${x.Fecha}`)
              .style(style);
            ws.cell(cont, 5)
              .string(x.Municipio)
              .style(style);
            cont++;
          });
  
           create(wb,"rectores_secretarios", res)
        
      }
    });
  });

  app.get(`${API_BASE}/coordinators`, function(req, res) {

    _db.query("select * from Coordinators", function(
      data
    ) {
 
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
    
      if (data.message.length == 0) {
        return res.json({
          message :"No hay datos para esta consulta."
        }).status(404)
      } else {
        
          var cont = 2;
          /*Encabezados del reporte*/
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
            .string(`Fecha`)
            .style(style_head);
          ws.cell(1, 5)
            .string(`Municipio`)
            .style(style_head);
         
  
          data.message.forEach(function(x) {
            /*Cuerpo del reporte*/
            ws.cell(cont, 1)
              .string(`${x.Nombre}`)
              .style(style);
            ws.cell(cont, 2)
              .string(`${x.Apellido}`)
              .style(style);
            ws.cell(cont, 3)
              .string(`${x.Correo}`)
              .style(style);
            ws.cell(cont, 4)
              .string(`${x.Fecha}`)
              .style(style);
            ws.cell(cont, 5)
              .string(x.Municipio)
              .style(style);
            cont++;
          });
  
           create(wb,"coordinadores", res)
        
      }
    });
  });

};
