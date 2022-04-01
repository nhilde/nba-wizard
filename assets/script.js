"use strict"
var todaysDate = new Date();
var todaysYear = JSON.stringify(todaysDate.getFullYear());
var todaysMonth = JSON.stringify(todaysDate.getMonth()+1);
var todaysDay = JSON.stringify(todaysDate.getDate());
var matches = document.querySelector('#matches');

// Ensure double-digits on month/day strings
if (todaysMonth.length < 2) {
    todaysMonth = '0' + todaysMonth;
};
if (todaysDay.length < 2) {
    todaysDay = '0' + todaysDay;
};
todaysDate = todaysYear + todaysMonth + todaysDay;

// Fetch API data for today's games
function getGames() {
    fetch('http://data.nba.net/10s/prod/v1/' + todaysDate + '/scoreboard.json')
    .then(response => response.json())
    .then(function (data) {
        gameAdd(data);
    })
    .catch(err => console.error(err));
};

// Add API data to HTML
function gameAdd(data) {
    for(var i = 0; i < data.games.length; i++) {
        console.log(data.games[i]);
        var row = matches.appendChild(document.createElement('tr'));
        var td1 = row.appendChild(document.createElement('td'));
        var td2 = row.appendChild(document.createElement('td'));
        var td3 = row.appendChild(document.createElement('td'));
        td1.textContent = data.games[i].hTeam.triCode
        td2.textContent = data.games[i].vTeam.triCode
        td3.textContent = data.games[i].startTimeEastern
    };
};

getGames();
