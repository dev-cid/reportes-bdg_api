module.exports = (data) => {
  const today = new Date();
  const day =  today.getDate() < 10 ? "0" + today.getDate() : today.getDate()
  const month = today.getMonth()
  const months =["Enero","Febrero","Marzo", "Abril","Mayo","Junio", "Julio","Agosto","Septiembre","Octubre", "Noviembre","Diciembre"]
  const year = today.getFullYear()
  let subStr = data.cohorte.substring(0, data.cohorte.lastIndexOf("C"))
  const clei = data.cohorte.substring(data.cohorte.lastIndexOf("C") + 1, data.cohorte.lastIndexOf("_"))
  const an = data.cohorte.substring(data.cohorte.lastIndexOf("_") + 1)
  if(subStr.substring(0,4) === "sant"  && subStr !== 'santuario' && subStr !== 'santafe'){
    subStr = `${subStr.substring(0,5)} ${subStr.substring(5)}`;
  }else if(subStr.substring(0,3) === "san"  && subStr !== 'santuario' && subStr !== 'santafe'){
    subStr =  `San ${subStr.slice(3)}` 
  }
  subStr = subStr.charAt(0).toUpperCase() + subStr.slice(1)
  console.log(subStr)
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
        }
        
        .logo{
          width:6.2in;
          position:relative;
          left:-8px;
        }
        
        .footer{
          width:6.2in;
          position:absolute;
          left:0px;
          top:776px;
        }

        .dotss{
          width:6.2in;
          position:absolute;
          left:0px;
          top:446px;
        }

        h1{
          color:#73ab40;
          padding:30px 0;
          font-size: 19px;
        }

        h2{
          color:#73ab40;
          font-size: 15px;
        }
        h1, h2, h3, h4, small{
          text-align:center;
        }

        p{
          font-size:11px;
        }
        
        small{
          font-size:10px;
          color:#bbb;
          display:block;
          margin: 1.3rem 0;
        }
        
        .padding{
          padding: 1.4rem 3.3rem 3rem;
          background: url("https://cidpullzonestorage.b-cdn.net/bachilleratodigital/certificados/bg.png");
          background-repeat:no-repeat;
          background-position: 50% 10px;
          margin-top:120px;
        }
        
        .stu-name{
          background:#73ab40;
          color:white;
          border-radius: 16px;
          font-size:14px;
          width:330px;
          padding: .3rem;
          margin: 2.5rem auto;
        }
        
     
        
        </style>
       </head>
       <body>
       <img class="logo"  src="https://cidpullzonestorage.b-cdn.net/bachilleratodigital/certificados/header.png" />
        <div class="padding">
            <h1>CONSTANCIA DE ESTUDIO</h1>
       <p>El programa Bachillerato Digital Gratuito de la Secretaría de Educación Departamental de Antioquia hace constar que el estudiante: </p>
       <h3 class="stu-name">${data.nombre }</h3>
       <p>con n&uacute;mero de documento: <b>${data.username}</b> se encuentra actualmente inscrito en el <b>CLEI ${clei}.</b>      </p>
       
       <p>Este certificado se expide en el departamento de Antioquia en la fecha: ${day} de ${months[month]} de ${year}.</p>
       
       <small>Este documento no es válido como certificado se expide con base en la información registrada en plataforma del Bachillerato Digital gratuito de Antioquia. el certificado debe ser expedido por la Institución Educativa donde el alumno realizó el proceso de matrícula.</small>
        </div>
        
        <img class="dotss"  src="https://cidpullzonestorage.b-cdn.net/bachilleratodigital/certificados/dotss.png" />
       <img class="footer"  src="https://cidpullzonestorage.b-cdn.net/bachilleratodigital/certificados/footer.png" />
       </body>
    </html>
    `;
};
