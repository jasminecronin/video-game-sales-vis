//https://bl.ocks.org/adamjanes/5e53cfa2ef3d3f05828020315a3ba18c/22619fa86de2045b6eeb4060e747c5076569ec47
//https://www.tutorialsteacher.com/d3js/create-pie-chart-using-d3js
//https://codepen.io/thecraftycoderpdx/pen/jZyzKo
// TODO
// charts side by side
// legend showing consoles
window.onload = function() {
    setupVis1();
    setupVis2();
}

const NADATA = [
    { "console": "PS4", "count": "64.98"},
    { "console": "NS", "count": "13.58"},
    { "console": "3DS", "count": "6.27"},
    { "console": "WiiU", "count": "3.79"},
    { "console": "XOne", "count": "16.99"}
];

const JPDATA = [
    { "console": "PS4", "count": "10.22"},
    { "console": "NS", "count": "4.24"},
    { "console": "3DS", "count": "7.3"},
    { "console": "WiiU", "count": "1.65"},
    { "console": "XOne", "count": "0.11"}
];

const WIDTH = 1000;
const HEIGHT = 500;
const RADIUS = Math.min(WIDTH, HEIGHT) / 2;

function configureBox(id) {
    return d3.select("#" + id)
        .attr("width", WIDTH)
        .attr("height", HEIGHT)
        .append("g")
        .attr("transform", "translate(" + (WIDTH / 2) + "," + (HEIGHT / 2) + ")");
}

function configurePie(svg, datas) {

    var color = d3.scaleOrdinal(["#1B6A99","#DD5837","#F49A50",
        "#F2C75C","#669E56"]);

    var pie = d3.pie()
        .value(function(d) { return d.count; })
        .sort(null);

    var arc = d3.arc()
        .outerRadius(RADIUS)
        .innerRadius(RADIUS / 2);

    var label = d3.arc()
        .outerRadius(RADIUS)
        .innerRadius(RADIUS / 2);

    var arcs = svg.selectAll(".arc")
        .data(pie(datas))
        .enter()
        .append("g")
        .attr("class", "arc")
        .on("click", function(d){
            updateNADonut(d.data.console)
            updateJPDonut(d.data.console)
        })
        .on("mouseover", function(d) {
            console.log(d.data.console)
            d3.select(this).attr("opacity", 0.8); //change appearance to a lighter color
        })
        .on("mouseout", function(d) {
            console.log("See ya")
            d3.select(this).attr("opacity", 1); //change appearance back to original
        })
        .append("path")
        .attr("fill", function(d, i) {
            return color(i);
        })
        .attr("stroke", "white")
        .attr("d", arc)
        .append("svg:title")
        .text(function(d) {
            return d.data.console + "\n" + d.value + " million game copies"
        });

    var legend = svg.selectAll(".legend")
        .data(color.domain())
        .enter().append("g")
        .attr("class", "legend")
        .attr("transform", function (d, i) {
            return "translate(" + (WIDTH / 3) + "," + ((i * 20) - (HEIGHT / 3)) + ")";
        });

    // Create color swatches
    legend.append("rect")
    //.attr("x", WIDTH - 100)
    //.attr("y", 15)
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", color)
        .style("stroke", color);

    // Label color swatches
    legend.append("text")
    //.attr("x", WIDTH - 80)
    //.attr("y", 23)
        .attr("transform", "translate(25,9)")
        .attr("dy", ".35em")
        .style("text-anchor", "start")
        .text(function (d, i) {
            switch (i) {
                case 0:
                    return "Sony Playstation 4";
                case 1:
                    return "Nintendo Switch";
                case 2:
                    return "Nintendo 3DS";
                case 3:
                    return "Nintendo Wii U";
                case 4:
                    return "Microsoft XBox One";
            }
        });


}

function setupVis1() {
    let svg = configureBox("nadata");
    configurePie(svg, NADATA);
}

function setupVis2() {
    let svg = configureBox("jpdata");
    configurePie(svg, JPDATA);
}