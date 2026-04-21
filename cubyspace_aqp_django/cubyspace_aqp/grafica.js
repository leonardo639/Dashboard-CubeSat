const ctx = document.getElementById('sensorChart1').getContext('2d');

const labels = [];
const data = [];

for (let i = 0; i < 20; i++) {
    labels.push(`T-${19-i}s`);
    data.push(Math.floor(Math.random() * 30) + 20);
}

const sensorChart1 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Temperatura (°C)',
            data: data,
            borderColor: '#ff6600',
            backgroundColor: 'rgba(255, 102, 0, 0.1)',
            borderWidth: 2,
            fill: true,
            tension: 0.4,
            pointRadius: 3,
            pointBackgroundColor: '#ff6600'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 0
        },
        scales: {
            x: {
                display: true,
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        size: 10
                    },
                    color: '#9ca3af'
                }
            },
            y: {
                display: true,
                min: 0,
                max: 60,
                grid: {
                    color: '#e5e7eb'
                },
                ticks: {
                    font: {
                        size: 10
                    },
                    color: '#9ca3af'
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

function addData() {
    const newData = Math.floor(Math.random() * 30) + 20;
    sensorChart1.data.labels.shift();
    sensorChart1.data.datasets[0].data.shift();
    sensorChart1.data.labels.push(`T-0s`);
    sensorChart1.data.datasets[0].data.push(newData);
    sensorChart1.update();
}

setInterval(addData, 2000);