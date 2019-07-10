const express = require('express');
const app = express();

/*Redirección a las rutas del proyecto*/
require("./routes/api")(app);
require("./routes/views")(app);

/*Configuración de puerto para compilar*/
app.listen(process.env.PORT || 5000);