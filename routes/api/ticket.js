const API_BASE = "/api/ticket";
const ctrl_ticket = require("../../controller/TicketController");

/*Upfile*/
const multer = require("multer");
const uploads = multer();

module.exports = function(app) {
  /*Traer los tipos de tickets*/
  app.get(`${API_BASE}/type`, (req, res) => {
    ctrl_ticket.type_ticket(function(data) {
      res.json(data);
    });
  });

  /*Traer las cohortes*/
  app.get(`${API_BASE}/cohort`, (req, res) => {
    ctrl_ticket.cohort(function(data) {
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
  app.get(`${API_BASE}/getAll`, (req, res) => {
    ctrl_ticket.show(function(data) {
      res.json(data);
    });
  });

  /*Traer los tickets asignados*/
  app.get(`${API_BASE}/getWork/:id`, (req, res) => {
    ctrl_ticket.show_for_user(function(data) {
      res.json(data);
    });
  });

  /*Traer los tickets montados*/
  app.get(`${API_BASE}/getMe/:id`, (req, res) => {
    ctrl_ticket.show_me(req.params.id, function(data) {
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
};
