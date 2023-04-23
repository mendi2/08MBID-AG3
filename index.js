// Import stylesheets
import './style.css';
const appDiv = document.getElementById('app');

d3.csv(
  'https://raw.githubusercontent.com/mwaskom/seaborn-data/master/titanic.csv',
  function (error, data1) {
    var visualization = d3plus
      .viz()
      .container('#viz1')
      .data([
        { year: 1991, name: 'alpha', value: 15 },
        { year: 1992, name: 'alpha', value: 20 },
      ])
      .type('bar')
      .id('name')
      .x('year')
      .y('value')
      .draw();
  }
);

d3.json(
  'https://raw.githubusercontent.com/raul27868/07MBIG-Visualizacion-Actividades-Guiadas/master/columnas.json',
  function (data2) {
    var visualization = d3plus
      .viz()
      .container('#viz2')
      .data(data2)
      .type('bar')
      .id('name')
      .x('year')
      .y('value')
      .axes({ ticks: 'false' })
      .draw();
  }
);

d3.json(
  'https://raw.githubusercontent.com/mendi2/08MBID-AG3/main/AG3_Datos_Caja_Bigotes.json',
  function (data) {
    var visualization = d3plus
      .viz()
      .container('#viz3')
      .data(data)
      .type('box')
      .id('name')
      .x('year')
      .y('value')
      .draw();
  }
);
