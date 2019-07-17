const API_BASE = "/api";
const ctrl_auth = require("../../controller/authentication/AuthController");

/*Modulo de routes: Aquí podrás encontrar todas las rutas del proyecto*/
module.exports = function (app) {

    /*Rutas de autenticación*/
    app.post(`${API_BASE}/auth/login`, (req, res) => {
            ctrl_auth.login(req.body, function (data) {
                res.json(data);
            });
    });

    app.post(`${API_BASE}/auth/register`, (req, res) => {
            ctrl_auth.register(req.body, function (data) {
                res.json(data);
            });
    });

    app.post(`${API_BASE}/auth/reset_password`, (req, res) => {
            ctrl_auth.resetPassword(req.body, function (data) {
                res.json(data);
            });
    });

    app.post(`${API_BASE}auth/logout`, (req, res) => {
        res.status(200).send({
            auth: false,
            token: null
        });
    });
};