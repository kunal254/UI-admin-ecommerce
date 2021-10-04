const aside = document.querySelector('aside');
const ham = document.querySelector('.ham');
const cover = document.querySelector('.cover');

ham.addEventListener('click', function (event) {
    aside.classList.add('open');
    cover.style.display = "block";
});

cover.addEventListener('click', function (event) {
    aside.classList.remove('open');
    cover.style.display = "none";
});

// aside has sub-menu
const hasSub = document.getElementsByClassName('has-sub');

for (let item of hasSub) {

    item.addEventListener('click', function () {
        let sel = this.getElementsByClassName('sub')[0];
        sel.classList.toggle('sub-open');
    });
}

//   Useing ChartJs libraray CDNs
const data = {
    datasets: [{
        data: [300, 80],
        backgroundColor: [
            'rgb(39, 198, 219)',
            'rgb(23, 28, 36)'
        ],
        hoverOffset: 2,
        borderWidth: 0,
        cutout: '85%'
    }]
};

const config = {
    type: 'doughnut',
    data: data,
    // responsiveness
    options: {
        maintainAspectRatio: false
    }
};

let btc = new Chart(document.getElementById('btc'), config);
let dollar = new Chart(document.getElementById('dollar'), config);


const labels = [
    'Captial One',
    'Jackora',
    'Sabsa Bank',
    'SBC',
    'Tisama',
    'BCS',
    'Reta Bank'
];
const transactionData = {
    labels: labels,
    datasets: [{
        data: [120, 60, 90, 150, 300, 180, 200],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
        ],
        borderWidth: 1
    }]
};


const TransactionConfig = {
    type: 'bar',
    data: transactionData,
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
};

let transaction = new Chart(document.getElementById('transaction'), TransactionConfig);