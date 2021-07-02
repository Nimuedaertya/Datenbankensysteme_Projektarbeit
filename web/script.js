src="/eel.js"

// Our labels along the x-axis
var year = [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];

// GDP 
let GDPData = []
let gArgentinien = []
let gBolivien = [];
let gBrazil = [];
let gChile = [];
let gColumbia = [];
let gEcuador = [];
let gGuyana = [];
let gParaguay = [];
let gPeru = [];
let gSuriname = [];
let gUruguay = [];
let gVenezuela = [];

//Population
let pArgentinien = [];
let pBolivien = [];
let pBrazil = [];
let pChile = [];
let pColumbia = [];
let pEcuador = [];
let pGuyana = []
let pParaguay = [];
let pPeru = [];
let pSuriname = [];
let pUruguay = [];
let pVenezuela = [];

//Lifeexpect
let lArgentinien = [];
let lBolivien = [];
let lBrazil = [];
let lChile = [];
let lColumbia = [];
let lEcuador = [];
let lGuyana = [];
let lParaguay = [];
let lPeru = [];
let lSuriname = [];
let lUruguay = [];
let lVenezuela = [];

//CO2 Emissions
let cArgentinien = [];
let cBolivien = [];
let cBrazil = [];
let cChile = [];
let cColumbia = [];
let cEcuador = [];
let cGuyana = [];
let cParaguay = [];
let cPeru = [];
let cSuriname = [];
let cUruguay = [];
let cVenezuela = [];

//CO2 kleiner zu Life Expectency
let csArgentinien = [];
let csBolivien = [];
let csBrazil = [];
let csChile = [];
let csColumbia = [];
let csEcuador = [];
let csGuyana = [];
let csParaguay = [];
let csPeru = [];
let csSuriname = [];
let csUruguay = [];
let csVenezuela = [];


//GDP kleiner zu Polulation 
let gsArgentinien = [];
let gsBolivien = [];
let gsBrazil = [];
let gsChile = [];
let gsColumbia = [];
let gsEcuador = [];
let gsGuyana = [];
let gsParaguay = [];
let gsPeru = [];
let gsSuriname = [];
let gsUruguay = [];
let gsVenezuela = [];


//GDP durch Population zu Lifeex
//!!!!Daten nicht perfekt!!!!
let gpArgentinien = [];
let gpBolivien = [];
let gpBrazil = [];
let gpChile = [];
let gpColumbia = [];
let gpEcuador = [];
let gpGuyana = [];
let gpParaguay = [];
let gpPeru = [];
let gpSuriname = [];
let gpUruguay = [];
let gpVenezuela = [];


async function retrieveData() {
  GDPData = await eel.returnGDP()();
  PopData = await eel.returnPop()();
  LifeexData = await eel.returnLifeex()();
  Co2Data = await eel.returnCo2()();
  GDPToLifeexData = await eel.returnGdpToLifeex()();
  Co2ToLifeexData = await eel.returnCo2ToLifeex()();
  GDPToPopData = await eel.GDPToPop()();

  //GDP
  gArgentinien = GDPData[0];
  gBolivien = GDPData[1];
  gBrazil = GDPData[2];
  gChile = GDPData[3];
  gColumbia = GDPData[4];
  gEcuador = GDPData[5];
  gGuyana = GDPData[6];
  gParaguay = GDPData[7];
  gPeru = GDPData[8];
  gSuriname = GDPData[9];
  gUruguay = GDPData[10];
  gVenezuela = GDPData[11];

  //Population
  pArgentinien = PopData[0];
  pBolivien = PopData[1];
  pBrazil = PopData[2];
  pChile = PopData[3];
  pColumbia = PopData[4];
  pEcuador = PopData[5];
  pGuyana = PopData[6]
  pParaguay = PopData[7];
  pPeru = PopData[8];
  pSuriname = PopData[9];
  pUruguay = PopData[10];
  pVenezuela = PopData[11];

  //Lifeexpect
  lArgentinien = LifeexData[0];
  lBolivien = LifeexData[1];
  lBrazil = LifeexData[2];
  lChile = LifeexData[3];
  lColumbia = LifeexData[4];
  lEcuador = LifeexData[5];
  lGuyana = LifeexData[6];
  lParaguay = LifeexData[7];
  lPeru = LifeexData[8];
  lSuriname = LifeexData[9];
  lUruguay = LifeexData[10];
  lVenezuela = LifeexData[11];

  //CO2 Emissions
  cArgentinien = Co2Data[0];
  cBolivien = Co2Data[1];
  cBrazil = Co2Data[2];
  cChile = Co2Data[3];
  cColumbia = Co2Data[4];
  cEcuador = Co2Data[5];
  cGuyana = Co2Data[6];
  cParaguay = Co2Data[7];
  cPeru = Co2Data[8];
  cSuriname = Co2Data[9];
  cUruguay = Co2Data[10];
  cVenezuela = Co2Data[11];

  //CO2 kleiner zu Life Expectency
  csArgentinien = Co2ToLifeexData[0];
  csBolivien = Co2ToLifeexData[1];
  csBrazil = Co2ToLifeexData[2];
  csChile = Co2ToLifeexData[3];
  csColumbia = Co2ToLifeexData[4];
  csEcuador = Co2ToLifeexData[5];
  csGuyana = Co2ToLifeexData[6];
  csParaguay = Co2ToLifeexData[7];
  csPeru = Co2ToLifeexData[8];
  csSuriname = Co2ToLifeexData[9];
  csUruguay = Co2ToLifeexData[10];
  csVenezuela = Co2ToLifeexData[11];

  //GDP kleiner zu Polulation 
  gsArgentinien = GDPToPopData[0];
  gsBolivien = GDPToPopData[1];
  gsBrazil = GDPToPopData[2];
  gsChile = GDPToPopData[3];
  gsColumbia = GDPToPopData[4];
  gsEcuador = GDPToPopData[5];
  gsGuyana = GDPToPopData[6];
  lgsParaguay = GDPToPopData[7];
  gsPeru = GDPToPopData[8];
  gsSuriname = GDPToPopData[9];
  gsUruguay = GDPToPopData[10];
  gsVenezuela = GDPToPopData[11];

  //GDP durch Population zu Lifeex
  //!!!!Daten nicht perfekt!!!!
  gpArgentinien = GDPToLifeexData[0];
  gpBolivien = GDPToLifeexData[1];
  gpBrazil = GDPToLifeexData[2];
  gpChile = GDPToLifeexData[3];
  gpColumbia = GDPToLifeexData[4];
  gpEcuador = GDPToLifeexData[5];
  gpGuyana = GDPToLifeexData[6];
  gpParaguay = GDPToLifeexData[7];
  gpPeru = GDPToLifeexData[8];
  gpSuriname = GDPToLifeexData[9];
  gpUruguay = GDPToLifeexData[10];
  gpVenezuela = GDPToLifeexData[11];


  var ctx = document.getElementById("GDP");
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: year,
      datasets: [
    { 
      data: gArgentinien,
      label: "Argentinien",
      borderColor: "#3e95cd",
      fill: false
    },
    { 
      data: gBolivien,
      label: "Bolivien",
      borderColor: "#8e5ea2",
      fill: false
    },
    { 
      data: gBrazil,
      label: "Brazil",
      borderColor: "#e8c3b9",
      fill: false
    },
    { 
      data: gChile,
      label: "Chile",
      borderColor: "#ff8000",
      fill: false
    },
    { 
      data: gColumbia,
      label: "Columbia",
      borderColor: "#ffff00",
      fill: false
    },
    { 
      data: gEcuador,
      label: "Ecuador",
      borderColor: "#80ff00",
      fill: false
    },
    { 
      data: gGuyana,
      label: "Guyana",
      borderColor: "#00ff00",
      fill: false
    },
    { 
      data: gParaguay,
      label: "Paraguay",
      borderColor: "#0080ff",
      fill: false
    },
    { 
      data: gPeru,
      label: "Peru",
      borderColor: "#8000ff",
      fill: false
    },
    { 
      data: gSuriname,
      label: "Suriname",
      borderColor: "#bf00ff",
      fill: false
    },
    { 
      data: gUruguay,
      label: "Uruguay",
      borderColor: "#ff00bf",
      fill: false
    },
    { 
      data: gVenezuela,
      label: "Venezuela",
      borderColor: "#ff0040",
      fill: false
    }
  ]
  }
  ,
  options: {
    scales: {
      xAxes: [{ 
        scaleLabel: {
          display: true,
          labelString: '# Years'
        }
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: '# GPD in USD'
        }
      }],
    }
  },
  });

  var ctx = document.getElementById("POP");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: year,
    datasets: [
   { 
    data: pArgentinien,
    label: "Argentinien",
    borderColor: "#3e95cd",
    fill: false
  },
  { 
    data: pBolivien,
    label: "Bolivien",
    borderColor: "#8e5ea2",
    fill: false
  },
  { 
    data: pBrazil,
    label: "Brazil",
    borderColor: "#e8c3b9",
    fill: false
  },
  { 
    data: pChile,
    label: "Chile",
    borderColor: "#ff8000",
    fill: false
  },
  { 
    data: pColumbia,
    label: "Columbia",
    borderColor: "#ffff00",
    fill: false
  },
  { 
    data: pEcuador,
    label: "Ecuador",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: pGuyana,
    label: "Guyana",
    borderColor: "#00ff00",
    fill: false
  },
  { 
    data: pParaguay,
    label: "Paraguay",
    borderColor: "#0080ff",
    fill: false
  },
  { 
    data: pPeru,
    label: "Peru",
    borderColor: "#8000ff",
    fill: false
  },
  { 
    data: pSuriname,
    label: "Suriname",
    borderColor: "#bf00ff",
    fill: false
  },
  { 
    data: pUruguay,
    label: "Uruguay",
    borderColor: "#ff00bf",
    fill: false
  },
  { 
    data: pVenezuela,
    label: "Venezuela",
    borderColor: "#ff0040",
    fill: false
  }
 ]
}
,
  options: {
    scales: {
      xAxes: [{ 
        scaleLabel: {
          display: true,
          labelString: '# Years'
        }
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: '# Population'
        }
      }],
    }
  },
});

var ctx = document.getElementById("LIFE");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: year,
    datasets: [
   { 
    data: lArgentinien,
    label: "Argentinien",
    borderColor: "#3e95cd",
    fill: false
  },
  { 
    data: lBolivien,
    label: "Bolivien",
    borderColor: "#8e5ea2",
    fill: false
  },
  { 
    data: lBrazil,
    label: "Brazil",
    borderColor: "#e8c3b9",
    fill: false
  },
  { 
    data: lChile,
    label: "Chile",
    borderColor: "#ff8000",
    fill: false
  },
  { 
    data: lColumbia,
    label: "Columbia",
    borderColor: "#ffff00",
    fill: false
  },
  { 
    data: lEcuador,
    label: "Ecuador",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: lGuyana,
    label: "Guyana",
    borderColor: "#00ff00",
    fill: false
  },
  { 
    data: lParaguay,
    label: "Paraguay",
    borderColor: "#0080ff",
    fill: false
  },
  { 
    data: lPeru,
    label: "Peru",
    borderColor: "#8000ff",
    fill: false
  },
  { 
    data: lSuriname,
    label: "Suriname",
    borderColor: "#bf00ff",
    fill: false
  },
  { 
    data: lUruguay,
    label: "Uruguay",
    borderColor: "#ff00bf",
    fill: false
  },
  { 
    data: lVenezuela,
    label: "Venezuela",
    borderColor: "#ff0040",
    fill: false
  }
 ]
}
,
  options: {
    scales: {
      xAxes: [{ 
        scaleLabel: {
          display: true,
          labelString: '# Years'
        }
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: '# Life Expectation in Years'
        }
      }],
    }
  },
});

var ctx = document.getElementById("CO2");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: year,
    datasets: [
   { 
    data: cArgentinien,
    label: "Argentinien",
    borderColor: "#3e95cd",
    fill: false
  },
  { 
    data: cBolivien,
    label: "Bolivien",
    borderColor: "#8e5ea2",
    fill: false
  },
  { 
    data: cBrazil,
    label: "Brazil",
    borderColor: "#e8c3b9",
    fill: false
  },
  { 
    data: cChile,
    label: "Chile",
    borderColor: "#ff8000",
    fill: false
  },
  { 
    data: cColumbia,
    label: "Columbia",
    borderColor: "#ffff00",
    fill: false
  },
  { 
    data: cEcuador,
    label: "Ecuador",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: cGuyana,
    label: "Guyana",
    borderColor: "#00ff00",
    fill: false
  },
  { 
    data: cParaguay,
    label: "Paraguay",
    borderColor: "#0080ff",
    fill: false
  },
  { 
    data: cPeru,
    label: "Peru",
    borderColor: "#8000ff",
    fill: false
  },
  { 
    data: cSuriname,
    label: "Suriname",
    borderColor: "#bf00ff",
    fill: false
  },
  { 
    data: cUruguay,
    label: "Uruguay",
    borderColor: "#ff00bf",
    fill: false
  },
  { 
    data: cVenezuela,
    label: "Venezuela",
    borderColor: "#ff0040",
    fill: false
  }
 ]
}
,
  options: {
    scales: {
      xAxes: [{ 
        scaleLabel: {
          display: true,
          labelString: '# Years'
        }
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: '# CO2 Emissions in Tonnes'
        }
      }],
    }
  },
});

var ctx = document.getElementById("CO2tolifeex");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: year,
    datasets: [
   { 
    data: lArgentinien,
    hidden: true,
    label: "Argentinien Expectency",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: csArgentinien,
    hidden: true,
    label: "Argentinien CO2",
    borderColor: "#ff0040",
    fill: false
  },
  { 
    data: lBolivien,
    hidden: true,
    label: "Bolivien Expectency",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: csBolivien,
    hidden: true,
    label: "Bolivien CO2",
    borderColor: "#ff0040",
    fill: false
  },
  { 
    data: lBrazil,
    hidden: true,
    label: "Brazil Expectency",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: csBrazil,
    hidden: true,
    label: "Brazil CO2",
    borderColor: "#ff0040",
    fill: false
  },
  { 
    data: lChile,
    hidden: true,
    label: "Chile Expectency",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: csChile,
    hidden: true,
    label: "Chile CO2",
    borderColor: "#ff0040",
    fill: false
  },
  { 
    data: lColumbia,
    hidden: true,
    label: "Columbia Expectency",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: csColumbia,
    hidden: true,
    label: "Columbia CO2",
    borderColor: "#ff0040",
    fill: false
  },
  { 
    data: lEcuador,
    hidden: true,
    label: "Ecuador Expectency",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: csEcuador,
    hidden: true,
    label: "Ecuador CO2",
    borderColor: "#ff0040",
    fill: false
  },
  { 
    data: lGuyana,
    hidden: true,
    label: "Guyana Expectency",
    borderColor: "#00ff00",
    fill: false
  },
  { 
    data: csGuyana,
    hidden: true,
    label: "Guyana CO2",
    borderColor: "#ff0040",
    fill: false
  },
  { 
    data: lParaguay,
    hidden: true,
    label: "Paraguay Expectency",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: csParaguay,
    hidden: true,
    label: "Paraguay CO2",
    borderColor: "#ff0040",
    fill: false
  },
  { 
    data: lPeru,
    hidden: true,
    label: "Peru Expectency",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: csPeru,
    hidden: true,
    label: "Peru CO2",
    borderColor: "#ff0040",
    fill: false
  },
  { 
    data: lSuriname,
    hidden: true,
    label: "Suriname Expectency",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: csSuriname,
    hidden: true,
    label: "Suriname CO2",
    borderColor: "#ff0040",
    fill: false
  },
  { 
    data: lUruguay,
    hidden: true,
    label: "Uruguay Expectency",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: csUruguay,
    hidden: true,
    label: "Uruguay CO2",
    borderColor: "#ff0040",
    fill: false
  },
  { 
    data: lVenezuela,
    hidden: true,
    label: "Venezuela Expectency",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: csVenezuela,
    hidden: true,
    label: "Venezuela CO2",
    borderColor: "#ff0040",
    fill: false
  }
]
},
  options: {
    scales: {
      xAxes: [{ 
        scaleLabel: {
          display: true,
          labelString: '# Years'
        }
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: '# Life Expectency & CO2 Emissions in 10^9kg'
        }
      }],
    }
  },
})




var ctx = document.getElementById("GDPtoPop");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: year,
    datasets: [
   { 
    data: pArgentinien,
    hidden: true,
    label: "Argentinien Population",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: gsArgentinien,
    hidden: true,
    label: "Argentinien GDP",
    borderColor: "#ff0040",
    fill: false
  },
  { 
    data: pBolivien,
    hidden: true,
    label: "Bolivien Population",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: gsBolivien,
    hidden: true,
    label: "Bolivien GDP",
    borderColor: "#ff0040",
    fill: false
  },
  { 
    data: pBrazil,
    hidden: true,
    label: "Brazil Population",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: gsBrazil,
    hidden: true,
    label: "Brazil GDP",
    borderColor: "#ff0040",
    fill: false
  },
  { 
    data: pChile,
    hidden: true,
    label: "Chile Population",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: gsChile,
    hidden: true,
    label: "Chile GDP",
    borderColor: "#ff0040",
    fill: false
  },
  { 
    data: pColumbia,
    hidden: true,
    label: "Columbia Population",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: gsColumbia,
    hidden: true,
    label: "Columbia GDP",
    borderColor: "#ff0040",
    fill: false
  },
  { 
    data: pEcuador,
    hidden: true,
    label: "Ecuador Population",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: gsEcuador,
    hidden: true,
    label: "Ecuador GDP",
    borderColor: "#ff0040",
    fill: false
  },
  { 
    data: pGuyana,
    hidden: true,
    label: "Guyana Population",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: gsGuyana,
    hidden: true,
    label: "Guyana GDP",
    borderColor: "#ff0040",
    fill: false
  },
  { 
    data: pParaguay,
    hidden: true,
    label: "Paraguay Population",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: gsParaguay,
    hidden: true,
    label: "Paraguay GDP",
    borderColor: "#ff0040",
    fill: false
  },
  { 
    data: pPeru,
    hidden: true,
    label: "Peru Population",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: gsPeru,
    hidden: true,
    label: "Peru GDP",
    borderColor: "#ff0040",
    fill: false
  },
  { 
    data: pSuriname,
    hidden: true,
    label: "Suriname Population",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: gsSuriname,
    hidden: true,
    label: "Suriname GDP",
    borderColor: "#ff0040",
    fill: false
  },
  { 
    data: pUruguay,
    hidden: true,
    label: "Uruguay Population",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: gsUruguay,
    hidden: true,
    label: "Uruguay GDP",
    borderColor: "#ff0040",
    fill: false
  },
  { 
    data: pVenezuela,
    hidden: true,
    label: "Venezuela Population",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: gsVenezuela,
    hidden: true,
    label: "Venezuela GDP",
    borderColor: "#ff0040",
    fill: false
  }
]
},
  options: {
    scales: {
      xAxes: [{ 
        scaleLabel: {
          display: true,
          labelString: '# Years'
        }
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: '# GDP in Million USD to Population'
        }
      }],
    }
  },
})






var ctx = document.getElementById("GDPdivPOPtoLive");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: year,
    datasets: [
   { 
    data: lArgentinien,
    hidden: true,
    label: "Argentinien Expectency",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: gpArgentinien,
    hidden: true,
    label: "Argentinien GDP/Population",
    borderColor: "#ff0040",
    fill: false
  },
  { 
    data: lBolivien,
    hidden: true,
    label: "Bolivien Expectency",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: gpBolivien,
    hidden: true,
    label: "Bolivien GDP/Population",
    borderColor: "#ff0040",
    fill: false
  },
  { 
    data: lBrazil,
    hidden: true,
    label: "Brazil Expectency",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: gpBrazil,
    hidden: true,
    label: "Brazil GDP/Population",
    borderColor: "#ff0040",
    fill: false
  },
  { 
    data: lChile,
    hidden: true,
    label: "Chile Expectency",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: gpChile,
    hidden: true,
    label: "Chile GDP/Population",
    borderColor: "#ff0040",
    fill: false
  },
  { 
    data: lColumbia,
    hidden: true,
    label: "Columbia Expectency",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: gpColumbia,
    hidden: true,
    label: "Columbia GDP/Population",
    borderColor: "#ff0040",
    fill: false
  },
  { 
    data: lEcuador,
    hidden: true,
    label: "Ecuador Expectency",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: gpEcuador,
    hidden: true,
    label: "Ecuador GDP/Population",
    borderColor: "#ff0040",
    fill: false
  },
  { 
    data: lGuyana,
    hidden: true,
    label: "Guyana Expectency",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: gpGuyana,
    hidden: true,
    label: "Guyana GDP/Population",
    borderColor: "#ff0040",
    fill: false
  },
  { 
    data: lParaguay,
    hidden: true,
    label: "Paraguay Expectency",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: gpParaguay,
    hidden: true,
    label: "Paraguay GDP/Population",
    borderColor: "#ff0040",
    fill: false
  },
  { 
    data: lPeru,
    hidden: true,
    label: "Peru Expectency",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: gpPeru,
    hidden: true,
    label: "Peru GDP/Population",
    borderColor: "#ff0040",
    fill: false
  },
  { 
    data: lSuriname,
    hidden: true,
    label: "Suriname Expectency",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: gpSuriname,
    hidden: true,
    label: "Suriname GDP/Population",
    borderColor: "#ff0040",
    fill: false
  },
  { 
    data: lUruguay,
    hidden: true,
    label: "Uruguay Expectency",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: gpUruguay,
    hidden: true,
    label: "Uruguay GDP/Population",
    borderColor: "#ff0040",
    fill: false
  },
  { 
    data: lVenezuela,
    hidden: true,
    label: "Venezuela Expectency",
    borderColor: "#80ff00",
    fill: false
  },
  { 
    data: gpVenezuela,
    hidden: true,
    label: "Venezuela GDP/Population",
    borderColor: "#ff0040",
    fill: false
  }
]
},
  options: {
    scales: {
      xAxes: [{ 
        scaleLabel: {
          display: true,
          labelString: '# Years'
        }
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: '# GDP/Population in 100.000USD to Life Expectency'
        }
      }],
    }
  },
});
}
retrieveData();