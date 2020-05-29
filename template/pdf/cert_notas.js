module.exports = (data) => {
    const today = new Date();
    const day =  today.getDate() < 10 ? "0" + today.getDate() : today.getDate()
    const month = today.getMonth()
    const months =["Enero","Febrero","Marzo", "Abril","Mayo","Junio", "Julio","Agosto","Septiembre","Octubre", "Noviembre","Diciembre"]
    const year = today.getFullYear()
    const stud = data[0]
    const clei = stud.Cohorte.substring(stud.Cohorte.lastIndexOf("C") + 1, stud.Cohorte.lastIndexOf("_"))
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
            padding: .8rem 3.3rem 2.2rem;
            background: url("https://cidpullzonestorage.b-cdn.net/bachilleratodigital/certificados/bg.png");
            background-repeat:no-repeat;
            background-position: 50% 40px;
            margin-top:20px;
          }
          
          .stu-name{
            background:#73ab40;
            color:white;
            border-radius: 16px;
            font-size:14px;
            width:330px;
            padding: .3rem;
            margin: 2rem auto;
          }
          

          .note_cuad{
            width: 280px;
            box-shadow: 0 4px 10px -3px rgba(0,0,0,.5);
            border-radius: 10px;
            background: white;
            margin: 1.3rem auto;
            font-size: 10px;
          }

          .note_cuad > div{
             padding: .3rem;
          }

          .note_cuad td{
            width: 138px;
            text-align:center;
          }
          
          .note_cuad header{
            background:#73ab40;
            border-radius:10px 10px 0 0;
            padding:2px;
          }
          
          .note_cuad header h2{
             color: white;
             font-size:12px;
          }

          </style>
         </head>
         <body>
         <img class="logo"  src="https://cidpullzonestorage.b-cdn.net/bachilleratodigital/certificados/header.png" />
          <div class="padding">
              <h1>CONSTANCIA DE NOTAS</h1>
         <p>El programa Bachillerato Digital Gratuito de la Secretaría de Educación Departamental de Antioquia hace constar que el estudiante: </p>
         <h3 class="stu-name">${ stud.Nombres}${stud.Apellidos}</h3>
         <p>con n&uacute;mero de documento: <b>${stud.usuario}</b> se encuentra actualmente inscrito en el <b>CLEI ${clei}.</b>      </p>
         
        
         <p>A continuación, se relaciona sus notas por área y el promedio a la fecha:</p>

         <div class="note_cuad">
             <header>
                <h2>Notas</h2>
             </header>
             <div>
             <table>
             <tr>
               <td>${ stud.Materia1 || "" }</td>
               <td>${ stud.Nota_Total_Curso1 || "" }</td>
             </tr>
             <tr>
               <td>${ stud.Materia2 || "" }</td>
               <td>${ stud.Nota_Total_Curso2 || "" }</td>
             </tr>
             <tr>
               <td>${ stud.Materia3|| "" }</td>
               <td>${ stud.Nota_Total_Curso3 || "" }</td>
             </tr>
             <tr>
               <td>${ stud.Materia4 || "" }</td>
               <td>${ stud.Nota_Total_Curso4 || "" }</td>
             </tr>
             <tr>
               <td>${ stud.Materia5 || "" }</td>
               <td>${ stud.Nota_Total_Curso5 || "" }</td>
             </tr>
             <tr>
               <td>${ stud.Materia6 || "" }</td>
               <td>${ stud.Nota_Total_Curso6 || "" }</td>
             </tr>
             <tr>
               <td>${ stud.Materia7 || "" }</td>
               <td>${ stud.Nota_Total_Curso7 || "" }</td>
             </tr>
             <tr>
               <td>${ stud.Materia8 || "" }</td>
               <td>${ stud.Nota_Total_Curso8|| "" }</td>
             </tr>
             <tr>
               <td>${ stud.Materia9 || "" }</td>
               <td>${ stud.Nota_Total_Curso9 || "" }</td>
             </tr>
             <tr>
               <td>${ stud.Materia10 || "" }</td>
               <td>${ stud.Nota_Total_Curso10 || "" }</td>
             </tr>

           </table>
             </div>
         </div>
         <p>Esta constancia se expide en el departamento de Antioquia en la fecha: ${day} de ${months[month]} de ${year}.</p>
         
         <small>Este documento no es válido como certificado se expide con base en la información registrada en plataforma del Bachillerato Digital gratuito de Antioquia; el certificado debe ser expedido por la Institución Educativa donde el alumno realizó el proceso de matrícula.</small>
          </div>
          
          <img class="dotss"  src="https://cidpullzonestorage.b-cdn.net/bachilleratodigital/certificados/dotss.png" />
         <img class="footer"  src="https://cidpullzonestorage.b-cdn.net/bachilleratodigital/certificados/footer.png" />
         </body>
      </html>
      `;
  };
  