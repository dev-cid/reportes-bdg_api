module.exports = ({ pendientes, cerrados, resueltos }) => {

  const today = new Date();
  return `
      <!doctype html>
      <html>
         <head>
            <meta charset="utf-8">
            <title>Hola</title>
            <style>
            body {
              font-family: Arial, Helvetica, sans-serif;
              color: #000000;	
              padding: 2rem;
          }</style>
         </head>
         <body>
          <div>
          <div style="width:25%; float: left">
          <img src="https://cidpullzonestorage.b-cdn.net/bachilleratodigital/imagenes_sistema/BD.png" style="width:100%; max-width:156px;">
          </div>
          <small style="float: right">Fecha de impresión: ${`${today.getDate()}/${today.getMonth() +
            1}/${today.getFullYear()}`}</small>
          <br>
          <br>
          <div style="width:75%; float: right">
          <h1 style="text-align: center; font-size: 18px"><strong>Reporte del sistema Bachillerato Digital</strong></h1>
          <br><br>
          </div>
          <div style="width:100%;">
      
          </div>
          <br><br><br>

             <h2 style="font-size: 14px">Los pendientes son: ${
               pendientes == undefined ? 0 : pendientes
             }</h2>
            <h2 style="font-size: 14px">Los cerrados son: ${
              cerrados == undefined ? 0 : cerrados
            }</h2>
            <h2 style="font-size: 14px">Los resueltos son: ${
              resueltos == undefined ? 0 : resueltos
            } </h2>
         </body>
      </html>
      `;
};
