module.exports = (data) => {
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
              color: black;	
              padding: 1rem;
              font-size:8px;
            }

              .logo {
                position: relative;
                width: 200px;
              }

              table{
                border-collapse: collapse;
              }

           
              td{
                text-align:center;
                font-size:8px;
                border:none;
                width: 200px;
            }

              .tr-header td{
                  padding:.4rem;
                  font-size:7px!important;  
              }
              .tr-header{
                background: #73ab40;
                color: white!important;
            }
            .table-body{
                border: 1px solid  #ddd;
                color:#333;
                
            }
              
            .table-body td{
                padding: 5px 2px;
                font-size:7px!important; 
                border-right:1px #ddd solid;
            }
            .name{
                 width: 300px!important
              }

            .pageHeader{
              padding: 20px;
               justify-content:space-between;
            }

            .pageHeader .date{
              background:#73ab40;
            }

            .pageHeader div{
                display: inline-block
                height : 70px;
            }

            .title{
                font-weight: 700;
                font-size:15px;
                width:980px;
                text-align:center;
                transform:translateY(-60px);
                position: absolute;
                left: 5mm;
                right: 5mm;
                top: 5mm;
            }
            .pageHeader span{
                margin: 0 20px;
            }

            .listado{
                padding: .7rem.4rem;
            }

            .data-fec{
              position: absolute;
              right: 5mm;
              top: 20mm;
            }

            .otra td{
                text-align:left!important;
                font-size:7px;
            }
                               
          </style>
         </head>
         <body>
         <header class="pageHeader">
         <p class="title">Reporte calificaciones totales</p>
          <img class="logo" src="https://bdg.cid.edu.co/static/media/bachiller.5cd4deec.jpg" />
          <div class="data-fec">
          <span>Municipio: ${ data[0]["mun"].toUpperCase()}</span>
          <span>Fecha : ${today.getFullYear() + "/" + (today.getMonth()  + 1) +  "/" + today.getDate()}</span>
          </div>
          
         </header>
          <table>
            <tr class="tr-header">
              <td class="name">C.C</td>
              <td class="name">Nombre Completo</td>
              <td>M 1</td>
              <td>Nota 1</td>
              <td>M 2</td>
              <td>Nota 2</td>
              <td>M 3</td>
              <td>Nota 3</td>
              <td>M 4</td>
              <td>Nota 4</td>
              <td>M 5</td>
              <td>Nota 5</td>
              <td>M 6</td>
              <td>Nota 6</td>
              <td>M 7</td>
              <td>Nota 7</td>
              <td>M 8</td>
              <td>Nota 8</td>
              <td>M 9</td>
              <td>Nota 9</td>
              <td>M 10</td>
              <td>Nota 10</td>
              <td>Cohorte</td>
            </tr>
            ${
              (()=>{
              let html = ''
               data.forEach(studentInfo=>{
                  let _html= `
                    <tr class="table-body">
                      <td>${studentInfo.usuario}</td>
                      <td>${studentInfo.Nombres} ${studentInfo.Apellidos}</td>
                      <td>${studentInfo.Materia1 || ""} </td>
                      <td>${studentInfo.Nota_Total_Curso1 || 0}</td>
                      <td>${studentInfo.Materia2 || ""} </td>
                      <td>${studentInfo.Nota_Total_Curso2 || 0}</td>
                      <td>${studentInfo.Materia3 || ""} </td>
                      <td>${studentInfo.Nota_Total_Curso3 || 0}</td>
                      <td>${studentInfo.Materia4 || ""} </td>
                      <td>${studentInfo.Nota_Total_Curso4 || 0}</td>
                      <td>${studentInfo.Materia5 || ""} </td>
                      <td>${studentInfo.Nota_Total_Curso5 || 0}</td>
                      <td>${studentInfo.Materia6 || ""} </td>
                      <td>${studentInfo.Nota_Total_Curso6 || 0}</td>
                      <td>${studentInfo.Materia7 || ""} </td>
                      <td>${studentInfo.Nota_Total_Curso7 || 0}</td>
                      <td>${studentInfo.Materia8 || ""} </td>
                      <td>${studentInfo.Nota_Total_Curso8 || 0}</td>
                      <td>${studentInfo.Materia9 || ""} </td>
                      <td>${studentInfo.Nota_Total_Curso9 || 0}</td>
                      <td>${studentInfo.Materia10 || ""} </td>
                      <td>${studentInfo.Nota_Total_Curso10 || 0}</td>
                       <td>${studentInfo.Cohorte || ""}</td>
                    </tr>
                    `
                    html = html.concat(_html)
                 })
                 return html
              })()
             }
          </table>
         </body>
      </html>
      `;
  };
  