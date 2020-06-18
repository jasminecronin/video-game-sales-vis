/*
NOTE: This Code consists of the following components:
1. Loading Game Data from csv
2. Processing the csv data to get the genres and platforms data for the bar chart
3. Creation of the stacked bars, axes, labels and colours for the chart
4. Creation of the legend
5. Creation of tool-top behavior

Step 3 uses code inspired by Robert Pettersson’s post on 
https://bl.ocks.org/LemoNode/5a64865728c6059ed89388b5f83d6b67. I specifically derived the positioning, 
axis creation and sum code. 

Steps 4 and 5 are derived from Michael Stanaland's stacked bar chart example: http://bl.ocks.org/mstanaland/6100713
I specifically derived the tooltip creation, calculation of positioning and color fill code.

*/

// load the csv data and create the chart
d3.csv("gameData.csv").then(d => createChartNA(d))
d3.csv("gameData.csv").then(d => createChartJP(d))


// Extracted genres from dataset
var genres = [];

// Extract platforms from dataset
var platforms = [];

// This is where the modified data will be stored. the chart will be created from this data
var modifiedDataNA = [];

// Function to create genre objects
function createModifiedDataNA() {
    modifiedDataNA = genres.map(g => ({
        Genre: g
    }));
    for (let g of modifiedDataNA) {
        for (let platform of platforms) {
            g[platform] = 0;
        }
    }
}
// Function that adds the separate platform sales for each genre
function populatNewDataNA(data) {
    var sales = 0;
    var platform;
    var genre;
    data.forEach(x => {
        sales = +x.NA_Sales;
        platform = x.Platform;
        genre = x.Genre;
        for (let obj of modifiedDataNA) {
            if (obj.Genre === genre) {
                obj[platform] += sales;
            }
        }
    })

}

function createChartNA(gameCsv) {
    //populate the gernes and platforms array from the original dataset  
    gameCsv.forEach(x => {
        if (genres.includes(x["Genre"]) == false) {
            genres.push(x["Genre"]);
        }
        if (platforms.includes(x["Platform"]) == false) {
            platforms.push(x["Platform"]);
        }
    });
    //create the modified data objects and populate them with the sales numbers per platform
    createModifiedDataNA();
    populatNewDataNA(gameCsv);

    /* Inspired by Robert Pettersson's stacked bar chart code */
    // Set dimensions of chart
    var svg = d3.select("#northAmerica");
    var margin = {
        top: 35,
        left: 35,
        bottom: 50,
        right: 160
    }
    var left = margin.left;
    var right = margin.right;
    var top = margin.top;
    var bottom = margin.bottom;
    var width = +svg.attr("width") - left - right;
    var height = +svg.attr("height") - top - bottom;

    // Set axes labels
    svg.append("text")
        .attr("transform", "translate(" + (width / 2) + " ," + (top - 7) + ")")
        .style("text-anchor", "middle")
        .style("font-weight", "700")
        .text("Genre");

    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - left / 12)
        .attr("x", 0 - 250)
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .style("font-weight", "700")
        .text("North America Sales");

    // set x and y axis range
    var x = d3.scaleBand()
        .range([margin.left, width])
        .padding(0.1);

    var y = d3.scaleLinear()
        .rangeRound([height - margin.bottom, margin.top]);

    // set x and y  axis positioning
    var xAxis = svg.append("g")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .attr("class", "x-axis");

    var yAxis = svg.append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .attr("class", "y-axis");


    var colours = ["#1B6A99", "#669E56", "#DD5837",
        "#F2C75C", "#F49A50"]

    // set scale for the platforms using the colours array
    var z = d3.scaleOrdinal()
        .range(colours)
        .domain(platforms);

    // Add a total property to each genre object that stores the sum of all the global sales
    modifiedDataNA.forEach(function (d) {
        d.total = d3.sum(platforms, k => +d[k])
        return d;
    })
    // Set domain of x and y-axis, create ticks
    y.domain([0, d3.max(modifiedDataNA, d => d3.sum(platforms, k => +d[k]))]).nice();
    svg.selectAll(".y-axis")
        .call(d3.axisLeft(y).ticks(null, "s").tickFormat(function (d) {
            return d;
        }).tickSizeInner(-width));


    x.domain(modifiedDataNA.map(d => d.Genre));

    svg.selectAll(".x-axis")
        .call(d3.axisBottom(x).tickSizeOuter(0).tickSizeInner(0))
        .selectAll("text")
        .attr("y", 8)
        .attr("dx", "-0.2em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-45)")
        .style("opacity", "0.7")
        .style("text-anchor", "end");

    // Create layers for platforms
    var group = svg.selectAll("g.layer")
        .data(d3.stack().keys(platforms)(modifiedDataNA), d => d.key);

    group.exit().remove();

    group.enter().append("g")
        .classed("layer", true)
        .attr("fill", d => z(d.key));
    // Create bars for each layer based on Genre
    var bars = svg.selectAll("g.layer").selectAll("rect")
        .data(d => d, e => e.data.Genre);

    bars.exit().remove();

    bars.enter().append("rect")
        .attr("width", x.bandwidth())
        .merge(bars)
        .attr("x", d => x(d.data.Genre) + 5)
        .attr("y", d => y(d[1]))
        .attr("height", d => y(d[0]) - y(d[1]))
        .append("title")
        .text(function(d) {
            return (d[1] - d[0]).toFixed(2) + " Million";
    });






    /* Legend and tooltip code derived form Michael Stanaland's stacked bar chart code */
    // Draw legend
    var legend = svg.selectAll(".legend")
        .data(colours)
        .enter().append("g")
        .attr("class", "legend")
        .attr("transform", function (d, i) {
            return "translate(50," + i * 19 + ")";
        });

    // create colored rectangles for each platform
    legend.append("rect")
        .attr("x", width)
        .attr("y", 35)
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", function (d, i) {
            return colours.slice().reverse()[i];
        });

    // title of legend
    var title = svg.append("text")
        .attr("x", 850)
        .attr("y", 28)
        .style("font-weight", "700")
        .text("Platform");

    // Labels for each box in legend
    legend.append("text")
        .attr("x", 800)
        .attr("y", 45)
        .attr("dy", ".35em")
        .style("text-anchor", "start")
        .text(function (d, i) {
            switch (i) {
                case 4:
                    return "PS4";
                case 2:
                    return "Nintendo Switch";
                case 0:
                    return "Nintendo 3DS";
                case 3:
                    return "Xbox One";
                case 1:
                    return "Nintendo WiiU";
            }
        });

    // // Set Up Tool-tip
    // var tooltip = svg.append("g")
    //     .attr("class", "tooltip")
    //     .style("display", "none");

    // tooltip.append("rect")
    //     .attr("width", 80)
    //     .attr("height", 20)
    //     .attr("fill", "white")
    //     .style("opacity", 0.5);

    // tooltip.append("text")
    //     .attr("x", 40)
    //     .attr("dy", "1.2em")
    //     .style("text-anchor", "middle")
    //     .attr("font-size", "12px")
    //     .attr("font-weight", "bold");
}

// This is where the modified data will be stored. the chart will be created from this data
var modifiedDataJP = [];

// Function to create genre objects
function createModifiedDataJP() {
    modifiedDataJP = genres.map(g => ({
        Genre: g
    }));
    for (let g of modifiedDataJP) {
        for (let platform of platforms) {
            g[platform] = 0;
        }
    }
}
// Function that adds the separate platform sales for each genre
function populateNewDataJP(data) {
    var sales = 0;
    var platform;
    var genre;
    data.forEach(x => {
        sales = +x.JP_Sales;
        platform = x.Platform;
        genre = x.Genre;
        for (let obj of modifiedDataJP) {
            if (obj.Genre === genre) {
                obj[platform] += sales;
            }
        }
    })

}

function createChartJP(gameCsv) {
    //populate the gernes and platforms array from the original dataset  
    gameCsv.forEach(x => {
        if (genres.includes(x["Genre"]) == false) {
            genres.push(x["Genre"]);
        }
        if (platforms.includes(x["Platform"]) == false) {
            platforms.push(x["Platform"]);
        }
    });
    //create the modified data objects and populate them with the sales numbers per platform
    createModifiedDataJP();
    populateNewDataJP(gameCsv);

    /* Inspired by Robert Pettersson's stacked bar chart code */
    // Set dimensions of chart
    var svg = d3.select("#japan");
    var margin = {
        top: 35,
        left: 35,
        bottom: 50,
        right: 160
    }
    var left = margin.left;
    var right = margin.right;
    var top = margin.top;
    var bottom = margin.bottom;
    var width = +svg.attr("width") - left - right;
    var height = +svg.attr("height") - top - bottom;

    // Set axes labels
    svg.append("text")
        .attr("transform", "translate(" + (width / 2) + " ," + (top - 7) + ")")
        .style("text-anchor", "middle")
        .style("font-weight", "700")
        .text("Genre");

    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - left / 12)
        .attr("x", 0 - 250)
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .style("font-weight", "700")
        .text("Japan Sales Sales");

    // set x and y axis range
    var x = d3.scaleBand()
        .range([margin.left, width])
        .padding(0.1);

    var y = d3.scaleLinear()
        .rangeRound([height - margin.bottom, margin.top]);

    // set x and y  axis positioning
    var xAxis = svg.append("g")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .attr("class", "x-axis");

    var yAxis = svg.append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .attr("class", "y-axis");


    var colours = ["#1B6A99", "#669E56", "#DD5837",
        "#F2C75C", "#F49A50"]

    // set scale for the platforms using the colours array
    var z = d3.scaleOrdinal()
        .range(colours)
        .domain(platforms);

    // Add a total property to each genre object that stores the sum of all the global sales
    modifiedDataJP.forEach(function (d) {
        d.total = d3.sum(platforms, k => +d[k])
        return d;
    })
    // Set domain of x and y-axis, create ticks
    y.domain([0, d3.max(modifiedDataJP, d => d3.sum(platforms, k => +d[k]))]).nice();
    svg.selectAll(".y-axis")
        .call(d3.axisLeft(y).ticks(null, "s").tickFormat(function (d) {
            return d;
        }).tickSizeInner(-width));


    x.domain(modifiedDataJP.map(d => d.Genre));

    svg.selectAll(".x-axis")
        .call(d3.axisBottom(x).tickSizeOuter(0).tickSizeInner(0))
        .selectAll("text")
        .attr("y", 8)
        .attr("dx", "-0.2em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-45)")
        .style("opacity", "0.7")
        .style("text-anchor", "end");

    // Create layers for platforms
    var group = svg.selectAll("g.layer")
        .data(d3.stack().keys(platforms)(modifiedDataJP), d => d.key);

    group.exit().remove();

    group.enter().append("g")
        .classed("layer", true)
        .attr("fill", d => z(d.key));
    // Create bars for each layer based on Genre
    var bars = svg.selectAll("g.layer").selectAll("rect")
        .data(d => d, e => e.data.Genre);

    bars.exit().remove();

    bars.enter().append("rect")
        .attr("width", x.bandwidth())
        .merge(bars)
        .attr("x", d => x(d.data.Genre) + 5)
        .attr("y", d => y(d[1]))
        .attr("height", d => y(d[0]) - y(d[1]))
        .append("title")
        .text(function(d) {
            return (d[1] - d[0]).toFixed(2) + " Million";
    });



    /* Legend and tooltip code derived form Michael Stanaland's stacked bar chart code */
    // Draw legend
    var legend = svg.selectAll(".legend")
        .data(colours)
        .enter().append("g")
        .attr("class", "legend")
        .attr("transform", function (d, i) {
            return "translate(50," + i * 19 + ")";
        });

    // create colored rectangles for each platform
    legend.append("rect")
        .attr("x", width)
        .attr("y", 35)
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", function (d, i) {
            return colours.slice().reverse()[i];
        });

    // title of legend
    var title = svg.append("text")
        .attr("x", 850)
        .attr("y", 28)
        .style("font-weight", "700")
        .text("Platform");

    // Labels for each box in legend
    legend.append("text")
        .attr("x", 800)
        .attr("y", 45)
        .attr("dy", ".35em")
        .style("text-anchor", "start")
        .text(function (d, i) {
            switch (i) {
                case 4:
                    return "PS4";
                case 2:
                    return "Nintendo Switch";
                case 0:
                    return "Nintendo 3DS";
                case 3:
                    return "Xbox One";
                case 1:
                    return "Nintendo WiiU";
            }
        });

    // Set Up Tool-tip
    // var tooltip = svg.append("g")
    //     .attr("class", "tooltip")
    //     .style("display", "none");

    // tooltip.append("rect")
    //     .attr("width", 80)
    //     .attr("height", 20)
    //     .attr("fill", "white")
    //     .style("opacity", 0.5);

    // tooltip.append("text")
    //     .attr("x", 40)
    //     .attr("dy", "1.2em")
    //     .style("text-anchor", "middle")
    //     .attr("font-size", "12px")
    //     .attr("font-weight", "bold");
}