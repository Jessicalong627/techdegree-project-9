            // bar chart //
var ctx = document.getElementById("barChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: 'Daily Traffic',
            data: [80, 100, 170, 120, 240, 200,90,],
            backgroundColor: ['#5f669a', '#5f669a', '#5f669a', '#5f669a', '#5f669a',
          '#5f669a', '#5f669a',],

            borderWidth: 1
        }]
    },
    options: {
      responsive: true,
      title: {
       },
        legend: {
          display:false },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});


//     donut Chart  //
var ctx = document.getElementById('donutChart').getContext('2d');
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Desktop", "Tablets", "Phones"],
        datasets: [{
            label: "Mobile Users",
              backgroundColor: ['#5f669a', '#51ba83', '#37a5bd'],
            data: [60, 15, 15],
        }]
    },
    options: {
      responsive: true,
      legend: {
        position: "right"
      },
      layout: {
        padding: {

        }

      }


    }
});


              // line chart //

var ctx = document.getElementById("lineChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
        "4-10", "11-17","18-24","25-31", ],
        datasets: [{
            label: 'Traffic',
            lineTension: 0,
            data: [800, 1200, 1000, 1500, 1800, 1400, 1600, 1200, 1600, 2250, 1750, 2250],
            backgroundColor: [
                'rgba(116,119,191, 0.2)',
                'rgba(226, 227, 246, 0.2)',
                'rgba(226, 227, 246, 0.2)',
                'rgba(226, 227, 246, 0.2)',
                'rgba(226, 227, 246, 0.2)',
                'rgba(226, 227, 246, 0.2)'
            ],
            borderColor: [
                'rgba(116,119,191,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      responsive: true,
      title: {
        },
        legend: {
          display:false },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
