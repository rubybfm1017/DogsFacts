Chart.defaults.global.defaultFontFamily = 'Raleway, sans-serif'
Chart.defaults.global.defaultFontColor = 'black';

const chihuahua = {
    name: ['Chihuahua'],
    energy: [5],
    exercise: [1],
    playfulness: [2],
    affection: [2],
    ftd: [1],
    fto: [3],
    fts: [1],
    watchfulness: [1],
    training: [2],
    grooming: [2],
    heat: [2],
    vocality: [5]
};
const bichon_frise = {
    name: ['Bichon Frise'],
    energy: [4],
    exercise: [2],
    playfulness: [5],
    affection: [5],
    ftd: [4],
    fto: [4],
    fts: [5],
    watchfulness: [1],
    training: [4],
    grooming: [5],
    heat: [3],
    vocality: [4]
};

let dog = chihuahua

const ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: dog.name,
        datasets: [
            {
                label: 'Energy Level',
                data: dog.energy,
                backgroundColor: '#cde6ce',
            },
            {
                label: 'Exercise Requirements',
                data: dog.exercise,
                backgroundColor: '#f6cbe3',
            },
            {
                label: 'Playfulness',
                data: dog.playfulness,
                backgroundColor: '#c9cde8',
            },
            {
                label: 'Affection Level',
                data: dog.affection,
                backgroundColor: '#b9fef8',
            },
            {
                label: 'Friendliness To Dogs',
                data: dog.ftd,
                backgroundColor: '#fgc6b3',
            },
            {
                label: 'Friendliness To Other Pets',
                data: dog.fto,
                backgroundColor: '#rfc6b3',
            },
            {
                label: 'Friendliness To Strangers',
                data: dog.fts,
                backgroundColor: '#ffcca3',
            },
            {
                label: 'Watchfulness',
                data: dog.watchfulness,
                backgroundColor: '#fbg6b3',
            },
            {
                label: 'Ease of Training',
                data: dog.training,
                backgroundColor: '#fhc656',
            },
            {
                label: 'Grooming Requirements',
                data: dog.grooming,
                backgroundColor: '#eec6b3',
            },
            {
                label: 'Heat Sensitivity',
                data: dog.heat,
                backgroundColor: '#f123b3',
            },
            {
                label: 'Vocality',
                data: dog.vocality,
                backgroundColor: '#ff2343',
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
            }]
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem, data) {
                    let label = data.datasets[tooltipItem.datasetIndex].label;
                    label += ': ' + tooltipItem.yLabel;
                    return ' ' + label + ' Star';
                }
            }
        },
    }
});

document.addEventListener('click', (event) => {
    if (!event.target.matches('.click-me')) return; 
    event.preventDefault(); 
    
    const selected = document.querySelector('.selected');
    if (selected) {
        selected.classList.remove('selected');
    }
    event.target.parentElement.classList.add("selected");

    dog = eval(event.target.alt)
    
    myChart.data.labels = dog.name;    
    myChart.data.datasets = [
        {
            label: 'Energy Level',
            data: dog.energy,
            backgroundColor: '#cde6ce',
        },
        {
            label: 'Exercise Requirements',
            data: dog.exercise,
            backgroundColor: '#f6cbe3',
        },
        {
            label: 'Playfulness',
            data: dog.playfulness,
            backgroundColor: '#c9cde8',
        },
        {
            label: 'Affection Level',
            data: dog.affection,
            backgroundColor: '#b9fef8',
        },
        {
            label: 'Friendliness To Dogs',
            data: dog.ftd,
            backgroundColor: '#fgc6b3',
        },
        {
            label: 'Friendliness To Other Pets',
            data: dog.fto,
            backgroundColor: '#rfc6b3',
        },
        {
            label: 'Friendliness To Strangers',
            data: dog.fts,
            backgroundColor: '#ffcca3',
        },
        {
            label: 'Watchfulness',
            data: dog.watchfulness,
            backgroundColor: '#fbg6b3',
        },
        {
            label: 'Ease of Training',
            data: dog.training,
            backgroundColor: '#fhc656',
        },
        {
            label: 'Grooming Requirements',
            data: dog.grooming,
            backgroundColor: '#eec6b3',
        },
        {
            label: 'Heat Sensitivity',
            data: dog.heat,
            backgroundColor: '#f123b3',
        },
        {
            label: 'Vocality',
            data: dog.vocality,
            backgroundColor: '#ff2343',
        }
    ]
    myChart.update();

}, false);

