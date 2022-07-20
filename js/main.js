function classListToggle(item) {
    item.classList.toggle('active');
}

function classListRemove(item) {
    item.classList.remove('active');
}

const btnHamb = document.querySelector('.hamb');

btnHamb.addEventListener('click', () => {
    const menu = document.querySelector('#menu');
    const views = document.querySelector('.views');
    const dashboard = document.querySelector('.dashboard');
    const btnHamb = document.querySelector('.hamb');
    
    //active nao esta funcionando para insights
    const insights = document.querySelector('.insights');

    classListToggle(menu);
    classListToggle(views);
    classListToggle(dashboard);
    classListToggle(btnHamb);
    classListToggle(insights);
});


function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());

    return `${dia}/${mes}/${ano}`;
}

const data = new Date();
const dataBrasil = formataData(data);
/* aprendendo a usar o CHART.JS */

const ctxBar = document.querySelector('.bar-chart').getContext('2d');
const chartBarGraph = new Chart(ctxBar, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'monthly',
            data: [784, 1021, 823, 1207, 1790, 2352, 3054],
            backgroundColor: [
                'rgba(201, 203, 207, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 205, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderColor: [
                'rgb(201, 203, 207)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(255, 99, 132)'
            ],
            borderWidth: 1
        }, {
            label: 'average monthly views',
            data: [600, 900, 700, 1100, 1500, 1300, 3054],
            backgroundColor: [
                'rgba(201, 203, 207, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(255, 205, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 99, 132, 0.5)'
            ],
        }],
        labels: ['January', 'February', 'March', 'April', 'May', 'June', dataBrasil], 
    },
    options: {
        
    }
});

const ctxPie = document.querySelector('.pie-chart').getContext('2d');
const chartPieGraph = new Chart(ctxPie, {
    type: 'polarArea',
    data: {
        datasets: [{
            label: 'top months',
            data: [1790, 2352, 3054],
            backgroundColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 99, 132, 1)'
            ],
           
        }],
        labels: ['May', 'June', dataBrasil], 
    },
    options: {
        
    }
});


