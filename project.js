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
    { "console": "3DS", "count": "6.27"},
    { "console": "NS", "count": "13.58"},
    { "console": "PS4", "count": "64.98"},
    { "console": "WiiU", "count": "3.79"},
    { "console": "XOne", "count": "16.99"}
];

const JPDATA = [
    { "console": "3DS", "count": "7.3"},
    { "console": "NS", "count": "4.24"},
    { "console": "PS4", "count": "10.22"},
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
    
    var color = d3.scaleOrdinal(["#66c2a5","#fc8d62","#8da0cb",
        "#e78ac3","#a6d854","#ffd92f"]);

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
        // .attr("stroke-width", "3px")
        // .each(function(d) { this._current = d; });

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
        // .style("fill", function (d, i) {
        //     switch (i) {
        //         case 0:
        //             return "#66c2a5";
        //         case 1:
        //             return "#fc8d62";
        //         case 2:
        //             return "#8da0cb";
        //         case 3:
        //             return "#e78ac3";
        //         case 4:
        //             return "#a6d854";
        //         case 5:
        //             return "#ffd92f";
        //     }
        // });

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
                    return "Nintendo 3DS";
                case 1:
                    return "Nintendo Switch";
                case 2:
                    return "Sony Playstation 4";
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