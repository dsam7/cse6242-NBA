d3.text('../generated_data/home_win_percentages.csv').then(function(data) {
    var rows  = d3.csvParseRows(data);
    rows.slice(1).forEach(function(d) {
        d[1] = (d[1] * 100) + ' %';
        d[2] = (d[2] * 100) + ' %';
    })

    var table = d3.select('.win_pcts').append('table')
                .attr("class", "table");

    table.append("thead").append("tr")
        .selectAll("th")
        .data(rows[0])
        .enter().append("th")
        .text(function(d) { return d; })
        .attr("class", "table_header");

    table.append("tbody")
        .selectAll("tr").data(rows.slice(1))
        .enter().append("tr")
        .selectAll("td")
        .data(function(d){return d;})
        .enter().append("td")
        .style("border", "1px black solid")
        .style("padding", "5px")
        .text(function(d){return d;})
        .attr("class", "table_text");
    
    table.append("caption")
        .text("Actual vs Predicted home and away win percentages in the NBA")
        .attr("class", "caption");
});

d3.text('../generated_data/accuracy.csv').then(function(data) {
    var rows  = d3.csvParseRows(data);
    rows.slice(1).forEach(function(d) {
        d[1] = d[1] + ' %';
        d[2] = d[2] + ' %';
    })

    var table = d3.select('.accuracy').append('table')
    .attr("class", "table");

    table.append("thead").append("tr")
        .selectAll("th")
        .data(rows[0])
        .enter().append("th")
        .text(function(d) { return d; })
        .attr("class", "table_header");

    table.append("tbody")
        .selectAll("tr").data(rows.slice(1))
        .enter().append("tr")
        .selectAll("td")
        .data(function(d){return d;})
        .enter().append("td")
        .style("border", "1px black solid")
        .style("padding", "5px")
        .text(function(d){return d;})
        .attr("class", "table_text");
    
    table.append("caption")
        .text("Model Accuracy for Predicting 2020 Bubble Games")
        .attr("class", "caption");
});