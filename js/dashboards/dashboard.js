const ctx = document.getElementById('myChart1').getContext('2d');
const ctx2 = document.getElementById('myChart2').getContext('2d');
const ctx3 = document.getElementById('myChart3').getContext('2d');
const ctx4 = document.getElementById('myChart4').getContext('2d');


// datos de ejemplo
const datosEmpCont = [5, 10, 5, 2, 20, 30, 45];
const datosEmpMasContaminante = [65, 59, 90, 81, 56];
const datosEmpMenosContaminante = [28, 48, 40, 19, 96];
const datosCantContProducidos =[12, 19, 3, 5, 2, 3];


// etiquetas
const etiquetaMeses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Maya',
    'Junio',
];
const etiquetaEmpresas = [
    'empresa1',
    'empresa2',
    'empresa3',
    'empresa4',
    'empresa5',
    'empresa6'
];
const etiquetaCompEmpresas = [
    'productos producidos',
    'cantidad de materias utilizadas',
    'cantidad de contaminates asociados',
    'contaminantes a la salud',
    'contaminantes al medio ambiente'
]

// datas
const data3 = {
    labels: etiquetaEmpresas,
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100,200,50],
        backgroundColor: [
            'rgb(255,166,186)',
            'rgb(112,195,255)',
            'rgb(255,218,154)',
            'rgb(163,255,137)',
            'rgb(128,147,255)'
        ],
        hoverOffset: 5,
        responsive: true,

    }],


};
const data2 = {
    labels: etiquetaMeses,
    datasets: [{
        label: 'Empresas registradas por mes',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data:datosEmpCont,
    }]
}
const data0 ={
    labels: etiquetaEmpresas,
    datasets: [{
        label: 'cantidad de contaminantes producidos',
        data: datosCantContProducidos,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
}
const data = {
    labels: etiquetaCompEmpresas,
    datasets: [{
        label: 'Empresa 1',
        data: datosEmpMasContaminante,
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
        label: 'Empresa 2',
        data: datosEmpMenosContaminante,
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
};

// configuraciones
const config0 ={
    type: 'bar',
    data: data0,
    options: {
    scales: {
        y: {
            beginAtZero: true
        }
    }
}
}
const config = {
    type: 'line',
    data: data2,
    options: {}
};
const config4 = {
    type: 'radar',
    data: data,
    options: {
        elements: {
            line: {
                borderWidth: 3
            }
        }
    },
};
const config3 = {
    options:{
        maintainAspectRatio: false
    },
    type: 'pie',
    data: data3,
};

// constructores
const myChart4 = new Chart(ctx4, config4);
const myChart2 = new Chart(ctx2, config);
const myChart3 = new Chart(ctx3, config3 );
const myChart1 = new Chart(ctx, config0);


