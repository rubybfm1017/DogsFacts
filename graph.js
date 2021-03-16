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

const pumi = {
    name: ['Pumi'],
    energy: [4],
    exercise: [4],
    playfulness: [5],
    affection: [5],
    ftd: [3],
    fto: [3],
    fts: [2],
    watchfulness: [4],
    training: [5],
    grooming: [4],
    heat: [2],
    vocality: [4]
};

const husky = {
    name: ['Husky'],
    energy: [3],
    exercise: [4],
    playfulness: [4],
    affection: [4],
    ftd: [3],
    fto: [3],
    fts: [5],
    watchfulness: [1],
    training: [1],
    grooming: [3],
    heat: [5],
    vocality: [3]
};

const westie = {
    name: ['Westie'],
    energy: [4],
    exercise: [3],
    playfulness: [3],
    affection: [5],
    ftd: [3],
    fto: [3],
    fts: [4],
    watchfulness: [1],
    training: [4],
    grooming: [4],
    heat: [3],
    vocality: [4]
};
const sloughi = {
    name: ['Sloughi'],
    energy: [3],
    exercise: [4],
    playfulness: [3],
    affection: [3],
    ftd: [2],
    fto: [1],
    fts: [2],
    watchfulness: [2],
    training: [2],
    grooming: [1],
    heat: [2],
    vocality: [2]
};
const sarplaninac = {
    name: ['Sarplaninac'],
    energy: [3],
    exercise: [4],
    playfulness: [2],
    affection: [1],
    ftd: [1],
    fto: [1],
    fts: [1],
    watchfulness: [5],
    training: [2],
    grooming: [3],
    heat: [1],
    vocality: [2]
};
const rottweiler = {
    name: ['Rottweiler'],
    energy: [3],
    exercise: [3],
    playfulness: [2],
    affection: [2],
    ftd: [1],
    fto: [2],
    fts: [1],
    watchfulness: [5],
    training: [3],
    grooming: [1],
    heat: [4],
    vocality: [5]
};
const hamiltonstove = {
    name: ['Hamiltonstove'],
    energy: [4],
    exercise: [5],
    playfulness: [3],
    affection: [3],
    ftd: [3],
    fto: [2],
    fts: [2],
    watchfulness: [2],
    training: [4],
    grooming: [1],
    heat: [1],
    vocality: [5]
};
const golden_retriever = {
    name: ['Golden_retriever'],
    energy: [3],
    exercise: [3],
    playfulness: [5],
    affection: [5],
    ftd: [5],
    fto: [5],
    fts: [5],
    watchfulness: [2],
    training: [5],
    grooming: [3],
    heat: [3],
    vocality: [3]
};
const chow_chow = {
    name: ['Chow chow'],
    energy: [1],
    exercise: [2],
    playfulness: [1],
    affection: [2],
    ftd: [1],
    fto: [3],
    fts: [1],
    watchfulness: [4],
    training: [1],
    grooming: [3],
    heat: [5],
    vocality: [5]
};
const dachshund = {
    name: ['Dachshund'],
    energy: [4],
    exercise: [2],
    playfulness: [3],
    affection: [3],
    ftd: [3],
    fto: [2],
    fts: [1],
    watchfulness: [2],
    training: [2],
    grooming: [2],
    heat: [3],
    vocality: [5]
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
                backgroundColor: '#FFD700',
            },
            {
                label: 'Friendliness To Other Pets',
                data: dog.fto,
                backgroundColor: '#00FFFF',
            },
            {
                label: 'Friendliness To Strangers',
                data: dog.fts,
                backgroundColor: '#ffcca3',
            },
            {
                label: 'Watchfulness',
                data: dog.watchfulness,
                backgroundColor: '#8A2BE2',
            },
            {
                label: 'Ease of Training',
                data: dog.training,
                backgroundColor: '#D2691E',
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
            backgroundColor: '#FFD700',
        },
        {
            label: 'Friendliness To Other Pets',
            data: dog.fto,
            backgroundColor: '#ADFF2F',
        },
        {
            label: 'Friendliness To Strangers',
            data: dog.fts,
            backgroundColor: '#ffcca3',
        },
        {
            label: 'Watchfulness',
            data: dog.watchfulness,
            backgroundColor: '#800000',
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

