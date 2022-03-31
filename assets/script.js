// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
//         'X-RapidAPI-Key': 'd1c22c8aeamshfafffecca864277p1e2a38jsn9097c86aabfa'
//     }
// };

var todaysDate = new Date();
var todaysYear = JSON.stringify(todaysDate.getFullYear());
var todaysMonth = JSON.stringify(todaysDate.getMonth()+1);
var todaysDay = JSON.stringify(todaysDate.getDate());

//need if statement to check if day an month value is one. if so, add 0 to beginning
if (todaysMonth.length < 2) {
    todaysMonth = '0' + todaysMonth;
};

if (todaysDay.length < 2) {
    todaysDay = '0' + todaysDay;
};

todaysDate = todaysYear + todaysMonth + todaysDay;

function getStandings() {
    fetch('http://data.nba.net/10s/prod/v1/' + todaysDate + '/scoreboard.json')
    .then(response => response.json())
    .then(function (data) {
        console.log(data);
    })
    .catch(err => console.error(err));
};

getStandings();