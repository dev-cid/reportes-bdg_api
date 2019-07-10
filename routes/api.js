const API_BASE = "/api";
const ctrl_auth = require("../controller/authentication/AuthController");

/*Método para obtener los valores del front-end*/
var getValues = function (req, cb) {
    let body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        return cb(JSON.parse(Buffer.concat(body)));
    });
};

/*Modulo de routes: Aquí podrás encontrar todas las rutas del proyecto*/
module.exports = function (app) {

    /*Rutas de autenticación*/
    app.post(`${API_BASE}/auth/login`, (req, res) => {
        getValues(req, function (body) {
            ctrl_auth.login(body, function (data) {
                res.json(data);
            });
        });
    });

    app.post(`${API_BASE}/auth/register`, (req, res) => {
        getValues(req, function (body) {
            ctrl_auth.register(body, function (data) {
                res.json(data);
            });
        });
    });

    app.post(`${API_BASE}/auth/reset_password`, (req, res) => {
        getValues(req, function (body) {
            ctrl_auth.resetPassword(body, function (data) {
                res.json(data);
            });
        });
    });

    app.post(`${API_BASE}auth/logout`, (req, res) => {
        res.status(200).send({
            auth: false,
            token: null
        });
    });
};