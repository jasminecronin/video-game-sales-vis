// set the dimensions and margins of the graph
    var margin = {top: 10, right: 30, bottom: 30, left: 60},
        width = 2000 - margin.left - margin.right,
        height = 800 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("#worldMap")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    // Define the div for the tooltip
    var div = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    //Read the data
    d3.csv("worldmaplonlat.csv", function(data) {

        var x = d3.scaleLinear()
            .domain([0, 4000])
            .range([ 0, width ]);

        /**
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));
        **/


        var y = d3.scaleLinear()
            .domain([0, 500000])
            .range([ height, 0]);

        /**
        svg.append("g")
            .call(d3.axisLeft(y));
        **/

        svg.append('g')
            .selectAll("dot")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", function (d) { return x(d.xScale); } )
            .attr("cy", function (d) { return y(d.yScale); } )
            .attr("r", 4)
            .style("fill", "#a31c29")
            .append("title")
            .text(function(d) {
                return d.Publisher + "\n" + "Total Global Sales: " + d.globalScales + " Million";
        });
            // .on("mouseover", function(d) {
            //     div.transition()
            //         .duration(200)
            //         .style("opacity", .9);
            //     div	.html(d.Publisher + "<br/>"  + d.Pregion)
            //         .style("left", (d3.event.pageX) + "px")
            //         .style("top", (d3.event.pageY - 28) + "px");
            // })
            // .on("mouseout", function(d) {
            //     div.transition()
            //         .duration(500)
            //         .style("opacity", 0);

            // });

    })