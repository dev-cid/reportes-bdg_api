const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());

/*Redirección a las rutas del proyecto*/
require("./routes/api/auth")(app);
require("./routes/api/ticket")(app);
require("./routes/api/certificate")(app);
require("./routes/api/report_clf_cohorte")(app);
require("./routes/api/report_clf_coordinador")(app);
require("./routes/api/report_clf_materia")(app);
require("./routes/api/report_clf_municipio")(app);
require("./routes/api/report_student")(app);
require("./routes/api/system")(app);
require("./routes/views")(app);

/*Configuración de puerto para compilar*/
app.listen(process.env.PORT || 5006);
