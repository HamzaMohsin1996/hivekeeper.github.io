var ctx = document.getElementById("temp-graph-3").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
      label: '# of Votes',
      datasets: [{
  label: 'My First Dataset',
  data: [65, 59, 80, 81, 56, 55, 40],
  fill: false,
  borderColor: 'rgb(75, 192, 192)',
  tension: 0.1
}],
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
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
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
      labels: ["0",	"20",	"40",	"60",	"80",	"100"],
      datasets: [{
          label: 'Min temp', // Name the series
          data: [0,20,40,60,60], // Specify the data values array
          fill: false,
          borderColor: '#2196f3', // Add custom color border (Line)
          backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
          borderWidth: 1 // Specify bar border width
      },
                {
          label: 'Max Temp', // Name the series
          data: [0,20,10,30,50], // Specify the data values array
          fill: false,
          borderColor: '#4CAF50', // Add custom color border (Line)
          backgroundColor: '#4CAF50', // Add custom color background (Points and Fill)
          borderWidth: 1 // Specify bar border width
      }]
  },
  options: {
    responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
  }
});
var ctx = document.getElementById("temp-graph").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
      label: '# of Votes',
      datasets: [{
  label: 'My First Dataset',
  data: [65, 59, 80, 81, 56, 55, 40],
  fill: false,
  borderColor: 'rgb(75, 192, 192)',
  tension: 0.1
}],
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
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
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
      labels: ["0",	"20",	"40",	"60",	"80",	"100"],
      datasets: [{
          label: 'Min temp', // Name the series
          data: [0,20,40,60,60], // Specify the data values array
          fill: false,
          borderColor: '#2196f3', // Add custom color border (Line)
          backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
          borderWidth: 1 // Specify bar border width
      },
                {
          label: 'Max Temp', // Name the series
          data: [0,20,10,30,50], // Specify the data values array
          fill: false,
          borderColor: '#4CAF50', // Add custom color border (Line)
          backgroundColor: '#4CAF50', // Add custom color background (Points and Fill)
          borderWidth: 1 // Specify bar border width
      }]
  },
  options: {
    responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
  }
});
var ctx = document.getElementById("temp-2").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
      label: '# of Votes',
      datasets: [{
  label: 'My First Dataset',
  data: [65, 59, 80, 81, 56, 55, 40],
  fill: false,
  borderColor: 'rgb(75, 192, 192)',
  tension: 0.1
}],
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
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
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
      labels: ["0",	"20",	"40",	"60",	"80",	"100"],
      datasets: [{
          label: 'Min temp', // Name the series
          data: [0,20,40,60,60], // Specify the data values array
          fill: false,
          borderColor: '#2196f3', // Add custom color border (Line)
          backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
          borderWidth: 1 // Specify bar border width
      },
                {
          label: 'Max Temp', // Name the series
          data: [0,20,10,30,50], // Specify the data values array
          fill: false,
          borderColor: '#4CAF50', // Add custom color border (Line)
          backgroundColor: '#4CAF50', // Add custom color background (Points and Fill)
          borderWidth: 1 // Specify bar border width
      }]
  },
  options: {
    responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
  }
});
var ctx = document.getElementById("temp-3").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
      label: '# of Votes',
      datasets: [{
  label: 'My First Dataset',
  data: [65, 59, 80, 81, 56, 55, 40],
  fill: false,
  borderColor: 'rgb(75, 192, 192)',
  tension: 0.1
}],
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
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
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
var myChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Floating Bar Chart'
      }
    }
  }
});