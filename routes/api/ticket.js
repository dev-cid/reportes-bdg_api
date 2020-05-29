const API_BASE = "/api/ticket";
const ctrl_ticket = require("../../controller/TicketController");

const excel = require("excel4node");
var wb = new excel.Workbook();
var ws = wb.addWorksheet("Hoja1");

/*Upfile*/
const multer = require("multer");
const uploads = multer();
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
  /*Traer los tipos de tickets*/
  app.get(`${API_BASE}/type`, (req, res) => {
    ctrl_ticket.type_ticket(function(data) {
      res.json(data);
    });
  });

  /*Traer las cohortes*/
  app.get(`${API_BASE}/cohort/:id_user`, (req, res) => {
    ctrl_ticket.cohort(req.params.id_user, function(data) {
      res.json(data);
    });
  });

  app.get(`${API_BASE}/cohort`, (req, res) => {
    console.log("maravilloso")
    ctrl_ticket.cohorts(function(data) {
      res.json(data);
    });
  });

   //Cohorte for teacher
  app.get(`${API_BASE}/teacher-cohort/:id_user`, (req, res) => {
    ctrl_ticket.cohort_for_teacher(req.params.id_user, function(data) {
      res.json(data);
    });
  });

  /*Traer las asignaturas*/
  app.get(`${API_BASE}/subject`, (req, res) => {
    ctrl_ticket.subject(function(data) {
      res.json(data);
    });
  });

  /*Traer todos los tickets*/
  app.get(`${API_BASE}/getAll/:status`, (req, res) => {
    ctrl_ticket.show(req.params.status, function(data) {
      res.json(data);
    });
  });

  /*Traer los tickets asignados*/
  app.get(`${API_BASE}/getWork/:id/:status`, (req, res) => {
    ctrl_ticket.show_for_user(req.params.id, req.params.status, function(data) {
      res.json(data);
    });
  });

  /*Traer los tickets montados*/
  app.get(`${API_BASE}/getMe/:id/:status`, (req, res) => {
    console.log(req.params.id, req.params.status)
    ctrl_ticket.show_me(req.params.id, req.params.status, function(data) {
      console.log(data,"me!!")
      res.json(data);
    });
  });

  /*Traer los gestores de tickets*/
  app.get(`${API_BASE}/getGestor`, (req, res) => {
    ctrl_ticket.show_gestor(function(data) {
      res.json(data);
    });
  });

  /*Guardar los tickets*/
  app.post(`${API_BASE}/create`, (req, res) => {
    ctrl_ticket.create(req, function(data) {
      res.json(data);
    });
  });

  /*Guardar evidencias*/
  app.post(`${API_BASE}/save_evidences`, uploads.array("url"), (req, res) => {
    ctrl_ticket.create_evidences(req, function(data) {
      res.json(data);
    });
  });

  /*Guardar las respuestas*/
  app.post(`${API_BASE}/response`, uploads.array("url"), (req, res) => {
    ctrl_ticket.create_historic(req.body, function(data) {
      res.json(data);
    });
  });

  /*Guardar evidencias de las respuestas*/
  app.post(
    `${API_BASE}/save_evidences_historic`,
    uploads.array("url"),
    (req, res) => {
      ctrl_ticket.create_historic_evidences(req, function(data) {
        res.json(data);
      });
    }
  );

  /*Un tickets*/
  app.get(`${API_BASE}/show/:id`, (req, res) => {
    ctrl_ticket.show_one(req.params.id, function(data) {
      res.json(data);
    });
  });

  /*Detalle del ticket*/
  app.get(`${API_BASE}/show_detail/:id`, (req, res) => {
    ctrl_ticket.show_detail(req.params.id, function(data) {
      res.json(data);
    });
  });

  /*Actualizar estado*/
  app.post(`${API_BASE}/updateStatus/:id/:status`, (req, res) => {
    ctrl_ticket.update_status(req.params.id, req.params.status, function(data) {
      res.json(data);
    });
  });

  /*Actualizar gestor de ticket*/
  app.post(`${API_BASE}/updateManager/:id_user/:manager/:id_ticket`, (req, res) => {
    ctrl_ticket.update_manager(
      req.params.id_user,
      req.params.manager,
      req.params.id_ticket,
      function(data) {
        res.json(data);
      }
    );
  });

  /*Generación de pdf*/
   app.post(`${API_BASE}/create_report_ticket`, (req, res) => {
    ctrl_ticket.show_report_ticket(req, data => { 
      
      ws.cell(1, 1)
      .string(`Usuario`)
      .style(style_head);
    ws.cell(1, 2)
      .string(`Correo de usuario`)
      .style(style_head);
    ws.cell(1, 3)
      .string(`Tikeck`)
      .style(style_head);
    ws.cell(1, 4)
      .string(`Cohorte`)
      .style(style_head);
    ws.cell(1, 5)
      .string(`Detalle`)
      .style(style_head);
    ws.cell(1, 6)
      .string(`Fecha`)
      .style(style_head);
    ws.cell(1, 7)
      .string(`Estado`)
      .style(style_head);


      let cont = 2
      data.message[0].forEach(function(x, i) {
        /*Cuerpo del reporte*/
        ws.cell(cont, 1)
          .string(`${x.Usuario}`)
        ws.cell(cont, 2)
          .string(`${x['Correo de usuario']}`)
        ws.cell(cont, 3)
          .string(`${x.Ticket}`)
        ws.cell(cont, 4)
          .string(`${x.Cohorte}`)
        ws.cell(cont, 5)
          .string(`${x.Detalle}`)
        ws.cell(cont, 6)
          .string(`${x.Fecha}`)
        ws.cell(cont, 7)
          .string(`${x.Estado}`)
          cont++
      });
      const today = new Date();
      wb.write(
        `reporte_tickes_${today.getDate()}/${today.getMonth() +
          1}/${today.getFullYear()}-${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}.xlsx`,
        res
      );

    });
  });
};
