var ctx = document.getElementById("game-hour").getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: ["Less Than 100 Hours", 
                   "Between 100 and 500 Hours", 
                   "Between 500 and 1,000 Hours",
                   "More Than 1,000 Hours"],
          datasets: [{
              data: [983, 8323, 4320, 4872],
              backgroundColor: [
                  'rgba(255, 99, 132)',
                  'rgba(54, 162, 235)',
                  'rgba(255, 206, 86)',
                  'rgba(75, 192, 192)',
              ],
              borderWidth: 3,
              hoverBorderWidth: 3,
              hoverBorderColor: 'rgb(0,0,0)'
          }]
      },
      options: {
          plugins:{
            title: {
                display: true,
                text: "Total Hours Played"
            },
            
          }
            
      }
  });

var ctx = document.getElementById('total-damage-done').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Less Than 1,000,000 Damages", 
                 "Between 1,000,000 and 5,000,000 Damages", 
                 "Between 5,000,000 and 10,000,000 Damages",
                 "More Than 10,000,000 Damages"],
        datasets: [{
            data: [3616, 8480, 3713, 2689],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
            ],
            borderWidth: 3,
            hoverBorderWidth: 3,
            hoverBorderColor: 'rgb(0,0,0)'
        }]
    },
    options: {
        plugins:{
            title: {
                display: true,
                text: "Total Damage Output"
            },
            
          }
    }
});

var ctx = document.getElementById('total-kills').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Less Than 10,000 Kills", 
                 "Between 10,000 and 50,000 Kills", 
                 "Between 50,000 and 100,000 Kills",
                 "More Than 100,000 Kills"],
        datasets: [{
            data: [4809, 8516, 3223, 1950],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
            ],
            borderWidth: 3,
            hoverBorderWidth: 3,
            hoverBorderColor: 'rgb(0,0,0)'
        }]
    },
    options: {
        plugins:{
            title: {
                display: true,
                text: "Total Kills"
            },
            
          }
    }
});

var ctx = document.getElementById('total-deaths').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Less Than 10,000 Deaths", 
                 "Between 10,000 and 30,000 Deaths", 
                 "Between 30,000 and 50,000 Deaths",
                 "More Than 50,000 Deaths"],
        datasets: [{
            data: [7530, 7050, 2512, 1406],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
            ],
            borderWidth: 3,
            hoverBorderWidth: 3,
            hoverBorderColor: 'rgb(0,0,0)'
        }]
    },
    options: {
        plugins:{
            title: {
                display: true,
                text: "Total Deaths"
            },
            
          }
    }
});

var ctx = document.getElementById('total-assists').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Less Than 3,000 Assists", 
                 "Between 3,000 and 6,000 Assists", 
                 "Between 6,000 and 9,000 Assists",
                 "More Than 9,000 Assists"],
        datasets: [{
            data: [6140, 3814, 2345, 6199],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
            ],
            borderWidth: 3,
            hoverBorderWidth: 3,
            hoverBorderColor: 'rgb(0,0,0)'
        }]
    },
    options: {
        plugins:{
            title: {
                display: true,
                text: "Total Assists"
            },
            
          }
    }
});

var ctx = document.getElementById('total-heals').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Less Than 10,000 Heals", 
                 "Between 10,000 and 50,000 Heals", 
                 "Between 50,000 and 100,000 Heals",
                 "More Than 100,000 Heals"],
        datasets: [{
            data: [2893, 7415, 3601, 4589],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
            ],
            borderWidth: 3,
            hoverBorderWidth: 3,
            hoverBorderColor: 'rgb(0,0,0)'
        }]
    },
    options: {
        plugins:{
            title: {
                display: true,
                text: "Total Heals"
            },
            
          }
    }
});

var ctx = document.getElementById('total-revives').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Less Than 1,000 Revives", 
                 "Between 1,000 and 4,000 Revives", 
                 "Between 4,000 and 8,000 Revives",
                 "More Than 8,000 Revives"],
        datasets: [{
            data: [3053, 7075, 3702, 4668],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
            ],
            borderWidth: 3,
            hoverBorderWidth: 3,
            hoverBorderColor: 'rgb(0,0,0)'
        }]
    },
    options: {
        plugins:{
            title: {
                display: true,
                text: "Total Revives"
            },
            
          }
    }
});

var ctx = document.getElementById('total-resupplies').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Less Than 1,000 Resupplies", 
                 "Between 1,000 and 5,000 Resupplies", 
                 "Between 5,000 and 10,000 Resupplies",
                 "More Than 10,000 Resupplies"],
        datasets: [{
            data: [1146, 6015, 3772, 7565],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
            ],
            borderWidth: 3,
            hoverBorderWidth: 3,
            hoverBorderColor: 'rgb(0,0,0)'
        }]
    },
    options: {
        plugins:{
            title: {
                display: true,
                text: "Total Resupplies"
            },
            
          }
    }
});








