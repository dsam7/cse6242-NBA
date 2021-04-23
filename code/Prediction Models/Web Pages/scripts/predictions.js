var margin = {top: 20, right: 50, bottom: 50, left: 50};

var gameSvg = d3.select("#viz")
    .append("svg")
    .attr("width",  700)
    .attr("height", 560)
    .append('g').attr('transform', "translate(0," + margin.top + ")");

var actual = d3.select("#actual")
    .append("svg")
    .attr("width",  300)
    .attr("height", 140)
    .append('g').attr('transform', "translate(0," + margin.top + ")");

var forestSvg = d3.select("#forest")
    .append("svg")
    .attr("width",  300)
    .attr("height", 140)
    .append('g').attr('transform', "translate(0," + margin.top + ")");

var treeSvg = d3.select("#tree")
    .append("svg")
    .attr("width",  300)
    .attr("height", 140)
    .append('g').attr('transform', "translate(0," + margin.top + ")");

var regressionSvg = d3.select("#regression")
    .append("svg")
    .attr("width",  300)
    .attr("height", 140)
    .append('g').attr('transform', "translate(0," + margin.top + ")");

d3.dsv(',', '../generated_data/model_predictions.csv', function(d) {
    return {
        id: d.GAME_ID,
        date: d.GAME_DATE_EST_1,
        home_name: d.HOME_TEAM_NAME,
        away_name: d.VISITOR_TEAM_NAME,
        home_pts: d.PTS_home,
        away_pts: d.PTS_away,
        result: d.HOME_TEAM_WINS_1,
        random_forest: d.RF_PREDICTION == 1 ? d.HOME_TEAM_NAME : d.VISITOR_TEAM_NAME,
        logistic_regression: d.LR_PREDICTION,
        decision_tree: d.DT_PREDICTION,
        home_logo: d.HOME_TEAM_LOGO,
        away_logo: d.VISITOR_TEAM_LOGO
    }
}).then(function(data) {
    games = {}
    data.forEach(function(d) {
        games[d.id] = d.date + ': ' + d.away_name + ' at ' + d.home_name;
    })
    onGameChange = function() {
        var gameSelected = d3.select('#dropdown option:checked').property('value');
        createGamePredictions(data, gameSelected);
    };
    d3.select('#dropdown')
        .selectAll('option')
        .data(data).enter()
        .append('option')
        .attr('value', function(d) { return d.id; })
        .text(function(d) {return games[d.id]});

    var gameSelected = d3.select('#dropdown option:checked').property('value');
    createGamePredictions(data, gameSelected);
});


function createGamePredictions(data, gameSelected) {
    var game = data.filter(function(d) { return d.id == gameSelected})[0];
    console.log(game)
    gameSvg.selectAll('*').remove();
    actual.selectAll('*').remove();
    forestSvg.selectAll('*').remove();
    treeSvg.selectAll('*').remove();
    regressionSvg.selectAll('*').remove();
    gameSvg.append('image')
        .attr('xlink:href', game.away_logo)
        .attr('height', '200')
        .attr('width', '200')
        .attr('x', 100)
        .attr('y', 50);
    gameSvg.append('image')
        .attr('xlink:href', game.home_logo)
        .attr('height', '200')
        .attr('width', '200')
        .attr('x', 400)
        .attr('y', 50);
    gameSvg.append('text')
        .text('vs')
        .attr('class', 'game_text')
        .attr('x', 350)
        .attr('y', 150);
    gameSvg.append('text')
        .text(game.away_name)
        .attr('class', 'game_text')
        .attr('x', 125)
        .attr('y', 300);
    gameSvg.append('text')
        .text(game.home_name)
        .attr('class', 'game_text')
        .attr('x', 425)
        .attr('y', 300);
    gameSvg.append('text')
        .text('Final Score: ' + +game.away_pts + ' - ' + +game.home_pts)
        .attr('class', 'game_text')
        .attr('x', 250)
        .attr('y', 375);

    var actualWinner = game.result == 1 ? game.home_logo : game.away_logo;
    actual.append('text')
        .text('Actual Winner')
        .attr('x', 20);
    actual.append('image')
        .attr('xlink:href', actualWinner)
        .attr('class', 'img')
        .attr('y', 10);
    
    var forestWinner = game.random_forest == 1 ? game.home_logo : game.away_logo;
    forestSvg.append('text')
        .text('Random Forest Predicted Winner')
        .attr('x', 20);
    forestSvg.append('image')
        .attr('xlink:href', forestWinner)
        .attr('class', 'img')
        .attr('y', 10);
    
    var treeWinner = game.decision_tree == 1 ? game.home_logo : game.away_logo;
    treeSvg.append('text')
        .text('Decision Tree Predicted Winner')
        .attr('x', 20);
    treeSvg.append('image')
        .attr('xlink:href', treeWinner)
        .attr('class', 'img')
        .attr('y', 10);
    
    var regressionWinner = game.logistic_regression == 1 ? game.home_logo : game.away_logo;
    regressionSvg.append('text')
        .text('Logistic Regression Predicted Winner')
        .attr('x', 20);
    regressionSvg.append('image')
        .attr('xlink:href', regressionWinner)
        .attr('class', 'img')
        .attr('y', 10);
}