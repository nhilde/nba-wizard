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








var teamList = document.querySelector("#teamList")
var points = document.querySelector("#points")
var fgp = document.querySelector("#fgp")
var rebounds = document.querySelector("#rebounds")
var blocks = document.querySelector("#blocks")
var assists = document.querySelector("#assists")
var steals = document.querySelector("#steals")
teamList.addEventListener("change", function() {
event.preventDefault();
var teamPick = teamList.options[teamList.selectedIndex].value;
console.log(teamPick)
fetch("https://api-nba-v1.p.rapidapi.com/teams/statistics?season=2020&id=" + teamPick, {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
    "x-rapidapi-key": "c3ac038ae5mshc0dff3a129966bdp19bcdcjsn14bbac3d3957"
  }
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    points.textContent = data.response[0].points;
    fgp.textContent = data.response[0].fgp + "%";
    rebounds.textContent = data.response[0].totReb;
    blocks.textContent = data.response[0].blocks;
    assists.textContent = data.response[0].assists;
    steals.textContent = data.response[0].steals;
  })
})