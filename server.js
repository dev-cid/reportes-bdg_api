const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());

/*Redirección a las rutas del proyecto*/
require("./routes/api/auth")(app);
require("./routes/views")(app);

/*Configuración de puerto para compilar*/
app.listen(process.env.PORT || 5000);