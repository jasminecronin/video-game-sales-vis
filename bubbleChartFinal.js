    //function below retrieved from https://blog.abelotech.com/posts/number-currency-formatting-javascript/
    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    d3.csv("gameData.csv")
    var datasetNARegion = {
        "children": [{"ID":1,"Name":"Grand Theft Auto V","Sales":1047,"Region":"NA","Genre":"Action","Platform":"PS4"},
        {"ID":2,"Name":"Red Dead Redemption 2","Sales":909,"Region":"NA","Genre":"Action-Adventure","Platform":"PS4"},
        {"ID":3,"Name":"Call of Duty: WWII","Sales":807,"Region":"NA","Genre":"Shooter","Platform":"PS4"},
        {"ID":4,"Name":"FIFA 18","Sales":220,"Region":"NA","Genre":"Sports","Platform":"PS4"},
        {"ID":5,"Name":"FIFA 17","Sales":218,"Region":"NA","Genre":"Sports","Platform":"PS4"},
        {"ID":6,"Name":"Grand Theft Auto V","Sales":812,"Region":"NA","Genre":"Action","Platform":"XOne"},
        {"ID":7,"Name":"Fallout 4","Sales":503,"Region":"NA","Genre":"Role-Playing","Platform":"PS4"},
        {"ID":8,"Name":"FIFA 16","Sales":199,"Region":"NA","Genre":"Sports","Platform":"PS4"},
        {"ID":9,"Name":"Star Wars Battlefront (2015)","Sales":572,"Region":"NA","Genre":"Shooter","Platform":"PS4"},
        {"ID":10,"Name":"Call of Duty: Advanced Warfare","Sales":491,"Region":"NA","Genre":"Shooter","Platform":"PS4"},
        {"ID":11,"Name":"Minecraft","Sales":327,"Region":"NA","Genre":"Misc","Platform":"PS4"},
        {"ID":12,"Name":"FIFA 15","Sales":144,"Region":"NA","Genre":"Sports","Platform":"PS4"},
        {"ID":13,"Name":"God of War (2018)","Sales":489,"Region":"NA","Genre":"Action","Platform":"PS4"},
        {"ID":14,"Name":"Call of Duty: Advanced Warfare","Sales":562,"Region":"NA","Genre":"Shooter","Platform":"XOne"},
        {"ID":15,"Name":"Final Fantasy XV","Sales":313,"Region":"NA","Genre":"Role-Playing","Platform":"PS4"},
        {"ID":16,"Name":"Fallout 4","Sales":508,"Region":"NA","Genre":"Role-Playing","Platform":"XOne"},
        {"ID":17,"Name":"Monster Hunter: World","Sales":178,"Region":"NA","Genre":"Action","Platform":"PS4"},
        {"ID":18,"Name":"Pokemon: Let's Go, Pikachu!","Sales":374,"Region":"NA","Genre":"Role-Playing","Platform":"NS"},
        {"ID":19,"Name":"Overwatch","Sales":318,"Region":"NA","Genre":"Shooter","Platform":"PS4"},
        {"ID":20,"Name":"Star Wars Battlefront (2015)","Sales":431,"Region":"NA","Genre":"Shooter","Platform":"XOne"},
        {"ID":21,"Name":"Batman: Arkham Knight","Sales":285,"Region":"NA","Genre":"Action","Platform":"PS4"},
        {"ID":22,"Name":"Far Cry 4","Sales":204,"Region":"NA","Genre":"Shooter","Platform":"PS4"},
        {"ID":23,"Name":"NBA 2K16","Sales":443,"Region":"NA","Genre":"Sports","Platform":"PS4"},
        {"ID":24,"Name":"Far Cry 5","Sales":249,"Region":"NA","Genre":"Action","Platform":"PS4"},
        {"ID":25,"Name":"Assassin's Creed Syndicate","Sales":156,"Region":"NA","Genre":"Action","Platform":"PS4"},
        {"ID":26,"Name":"NBA 2K17","Sales":394,"Region":"NA","Genre":"Sports","Platform":"PS4"},
        {"ID":27,"Name":"The Elder Scrolls V: Skyrim Special Edition","Sales":215,"Region":"NA","Genre":"Role-Playing","Platform":"PS4"},
        {"ID":28,"Name":"NBA 2K18","Sales":368,"Region":"NA","Genre":"Sports","Platform":"PS4"},
        {"ID":29,"Name":"Assassin's Creed Odyssey","Sales":204,"Region":"NA","Genre":"Action-Adventure","Platform":"PS4"},
        {"ID":30,"Name":"Tom Clancy's Ghost Recon Wildlands","Sales":185,"Region":"NA","Genre":"Shooter","Platform":"PS4"},
        {"ID":31,"Name":"Mafia III","Sales":125,"Region":"NA","Genre":"Action-Adventure","Platform":"PS4"},
        {"ID":32,"Name":"Far Cry: Primal","Sales":109,"Region":"NA","Genre":"Action-Adventure","Platform":"PS4"},
        {"ID":33,"Name":"Pokemon: Let's Go, Eevee!","Sales":211,"Region":"NA","Genre":"Role-Playing","Platform":"NS"},
        {"ID":34,"Name":"Need for Speed (2015)","Sales":102,"Region":"NA","Genre":"Racing","Platform":"PS4"},
        {"ID":35,"Name":"Mario + Rabbids: Kingdom Battle","Sales":190,"Region":"NA","Genre":"Strategy","Platform":"NS"},
        {"ID":36,"Name":"No Man's Sky","Sales":154,"Region":"NA","Genre":"Action-Adventure","Platform":"PS4"},
        {"ID":37,"Name":"Need for Speed: Payback","Sales":108,"Region":"NA","Genre":"Racing","Platform":"PS4"},
        {"ID":38,"Name":"Dragon Quest XI: Echoes of an Elusive Age","Sales":51,"Region":"NA","Genre":"Role-Playing","Platform":"PS4"},
        {"ID":39,"Name":"Just Cause 3","Sales":92,"Region":"NA","Genre":"Action-Adventure","Platform":"PS4"},
        {"ID":40,"Name":"Minecraft","Sales":120,"Region":"NA","Genre":"Sandbox","Platform":"NS"},
        {"ID":41,"Name":"The Evil Within","Sales":97,"Region":"NA","Genre":"Action","Platform":"PS4"},
        {"ID":42,"Name":"Forza Horizon 4","Sales":128,"Region":"NA","Genre":"Racing","Platform":"XOne"},
        {"ID":43,"Name":"Titanfall 2","Sales":130,"Region":"NA","Genre":"Shooter","Platform":"PS4"},
        {"ID":44,"Name":"Far Cry 4","Sales":147,"Region":"NA","Genre":"Shooter","Platform":"XOne"},
        {"ID":45,"Name":"The Order: 1886","Sales":76,"Region":"NA","Genre":"Shooter","Platform":"PS4"},
        {"ID":46,"Name":"Forza Motorsport 7","Sales":101,"Region":"NA","Genre":"Racing","Platform":"XOne"},
        {"ID":47,"Name":"Minecraft","Sales":87,"Region":"NA","Genre":"Misc","Platform":"WiiU"},
        {"ID":48,"Name":"Wolfenstein II: The New Colossus","Sales":95,"Region":"NA","Genre":"Shooter","Platform":"PS4"},
        {"ID":49,"Name":"Fallout 76","Sales":90,"Region":"NA","Genre":"Role-Playing","Platform":"PS4"},
        {"ID":50,"Name":"The Last Guardian","Sales":70,"Region":"NA","Genre":"Action-Adventure","Platform":"PS4"},
        {"ID":51,"Name":"Hyrule Warriors","Sales":102,"Region":"NA","Genre":"Misc","Platform":"WiiU"},
        {"ID":52,"Name":"Metal Gear Solid V: Ground Zeroes","Sales":63,"Region":"NA","Genre":"Action-Adventure","Platform":"PS4"},
        {"ID":53,"Name":"Shadow of the Colossus","Sales":76,"Region":"NA","Genre":"Action-Adventure","Platform":"PS4"},
        {"ID":54,"Name":"Sunset Overdrive","Sales":111,"Region":"NA","Genre":"Action","Platform":"XOne"},
        {"ID":55,"Name":"The Elder Scrolls V: Skyrim","Sales":116,"Region":"NA","Genre":"Role-Playing","Platform":"NS"},
        {"ID":56,"Name":"Dragon Quest VIII: Journey of the Cursed King","Sales":25,"Region":"NA","Genre":"Role-Playing","Platform":"3DS"},
        {"ID":57,"Name":"Crash Bandicoot N. Sane Trilogy","Sales":76,"Region":"NA","Genre":"Platform","Platform":"NS"},
        {"ID":58,"Name":"FIFA 18","Sales":61,"Region":"NA","Genre":"Sports","Platform":"NS"},
        {"ID":59,"Name":"Disney Magic Castle: My Happy Life","Sales":30,"Region":"NA","Genre":"Simulation","Platform":"3DS"},
        {"ID":60,"Name":"Ni no Kuni II: Revenant Kingdom","Sales":57,"Region":"NA","Genre":"Role-Playing","Platform":"PS4"},
        {"ID":61,"Name":"Super Bomberman R","Sales":54,"Region":"NA","Genre":"Puzzle","Platform":"NS"},
        {"ID":62,"Name":"Paper Mario: Color Splash","Sales":61,"Region":"NA","Genre":"Action-Adventure","Platform":"WiiU"},
        {"ID":63,"Name":"Mario Party: Star Rush","Sales":44,"Region":"NA","Genre":"Party","Platform":"3DS"},
        {"ID":64,"Name":"Wii Fit U","Sales":61,"Region":"NA","Genre":"Misc","Platform":"WiiU"},
        {"ID":65,"Name":"Bayonetta 2","Sales":64,"Region":"NA","Genre":"Action","Platform":"WiiU"},
        {"ID":66,"Name":"Xenoblade Chronicles X","Sales":59,"Region":"NA","Genre":"Role-Playing","Platform":"WiiU"},
        {"ID":67,"Name":"The Crew 2","Sales":38,"Region":"NA","Genre":"Racing","Platform":"PS4"},
        {"ID":68,"Name":"Professor Layton vs Ace Attorney","Sales":35,"Region":"NA","Genre":"Adventure","Platform":"3DS"},
        {"ID":69,"Name":"LEGO City Undercover","Sales":30,"Region":"NA","Genre":"Platform","Platform":"PS4"},
        {"ID":70,"Name":"Fire Emblem Echoes: Shadows of Valentia","Sales":59,"Region":"NA","Genre":"Role-Playing","Platform":"3DS"},
        {"ID":71,"Name":"FIFA 19","Sales":32,"Region":"NA","Genre":"Sports","Platform":"NS"},
        {"ID":72,"Name":"Sonic Forces","Sales":68,"Region":"NA","Genre":"Platform","Platform":"NS"},
        {"ID":73,"Name":"Monster Hunter Generations Ultimate","Sales":47,"Region":"NA","Genre":"Action","Platform":"NS"},
        {"ID":74,"Name":"Astro Bot Rescue Mission","Sales":38,"Region":"NA","Genre":"Platform","Platform":"PS4"},
        {"ID":75,"Name":"The LEGO Movie Videogame","Sales":45,"Region":"NA","Genre":"Action-Adventure","Platform":"PS4"},
        {"ID":76,"Name":"Plants vs Zombies: Garden Warfare","Sales":68,"Region":"NA","Genre":"Shooter","Platform":"XOne"},
        {"ID":77,"Name":"Monster Hunter Stories","Sales":25,"Region":"NA","Genre":"Role-Playing","Platform":"3DS"},
        {"ID":78,"Name":"The Evil Within","Sales":63,"Region":"NA","Genre":"Misc","Platform":"XOne"},
        {"ID":79,"Name":"Fortnite","Sales":66,"Region":"NA","Genre":"Shooter","Platform":"NS"},
        {"ID":80,"Name":"Mario Party: The Top 100","Sales":40,"Region":"NA","Genre":"Misc","Platform":"3DS"},
        {"ID":81,"Name":"Diablo III: Eternal Collection","Sales":66,"Region":"NA","Genre":"Action","Platform":"NS"},
        {"ID":82,"Name":"LEGO City Undercover","Sales":40,"Region":"NA","Genre":"Platform","Platform":"NS"},
        {"ID":83,"Name":"LEGO The Incredibles","Sales":61,"Region":"NA","Genre":"Action","Platform":"NS"},
        {"ID":84,"Name":"Final Fantasy Explorers","Sales":30,"Region":"NA","Genre":"Role-Playing","Platform":"3DS"},
        {"ID":85,"Name":"LEGO Worlds","Sales":37,"Region":"NA","Genre":"Misc","Platform":"NS"},
        {"ID":86,"Name":"Kirby and the Rainbow Curse","Sales":45,"Region":"NA","Genre":"Platform","Platform":"WiiU"},
        {"ID":87,"Name":"Disney Magic World 2","Sales":13,"Region":"NA","Genre":"Simulation","Platform":"3DS"},
        {"ID":88,"Name":"Bayonetta 2","Sales":45,"Region":"NA","Genre":"Action","Platform":"NS"},
        {"ID":89,"Name":"Ultra Street Fighter II: The Final Challengers","Sales":38,"Region":"NA","Genre":"Fighting","Platform":"NS"},
        {"ID":90,"Name":"Everybody's Golf","Sales":21,"Region":"NA","Genre":"Sports","Platform":"PS4"},
        {"ID":91,"Name":"Xenoblade Chronicles","Sales":42,"Region":"NA","Genre":"Role-Playing","Platform":"3DS"},
        {"ID":92,"Name":"Puzzle & Dragons Z + Super Mario Bros. Edition","Sales":16,"Region":"NA","Genre":"Puzzle","Platform":"3DS"},
        {"ID":93,"Name":"Metroid: Samus Returns","Sales":52,"Region":"NA","Genre":"Action-Adventure","Platform":"3DS"},
        {"ID":94,"Name":"Bravely Second: End Layer","Sales":38,"Region":"NA","Genre":"Role-Playing","Platform":"3DS"},
        {"ID":95,"Name":"Poochy & Yoshi's Woolly World","Sales":35,"Region":"NA","Genre":"Platform","Platform":"3DS"},
        {"ID":96,"Name":"Puyo Puyo Tetris","Sales":38,"Region":"NA","Genre":"Puzzle","Platform":"NS"},
        {"ID":97,"Name":"Dragon Ball: Xenoverse 2","Sales":30,"Region":"NA","Genre":"Action","Platform":"NS"},
        {"ID":98,"Name":"Mario Tennis Ultra Smash","Sales":28,"Region":"NA","Genre":"Sports","Platform":"WiiU"},
        {"ID":99,"Name":"Dragon Ball: Fusions","Sales":30,"Region":"NA","Genre":"Role-Playing","Platform":"3DS"},
        {"ID":100,"Name":"Fire Emblem Warriors","Sales":38,"Region":"NA","Genre":"Action","Platform":"NS"},
        {"ID":101,"Name":"Pokemon Art Academy","Sales":32,"Region":"NA","Genre":"Misc","Platform":"3DS"},
        {"ID":102,"Name":"Story of Seasons: Trio of Towns","Sales":33,"Region":"NA","Genre":"Simulation","Platform":"3DS"},
        {"ID":103,"Name":"Mario Golf: World Tour","Sales":25,"Region":"NA","Genre":"Sports","Platform":"3DS"},
        {"ID":104,"Name":"Animal Crossing: Amiibo Festival","Sales":40,"Region":"NA","Genre":"Party","Platform":"WiiU"},
        {"ID":105,"Name":"Luigi's Mansion","Sales":33,"Region":"NA","Genre":"Adventure","Platform":"3DS"},
        {"ID":106,"Name":"Detective Pikachu","Sales":26,"Region":"NA","Genre":"Adventure","Platform":"3DS"},
        {"ID":107,"Name":"Knack 2","Sales":25,"Region":"NA","Genre":"Platform","Platform":"PS4"},
        {"ID":108,"Name":"Sonic Mania","Sales":40,"Region":"NA","Genre":"Platform","Platform":"NS"},
        {"ID":109,"Name":"Mario Sports Superstars","Sales":32,"Region":"NA","Genre":"Sports","Platform":"3DS"},
        {"ID":110,"Name":"Hyrule Warriors: Definitive Edition","Sales":37,"Region":"NA","Genre":"Action","Platform":"NS"},
        {"ID":111,"Name":"Hey! Pikmin","Sales":30,"Region":"NA","Genre":"Platform","Platform":"3DS"},
        {"ID":112,"Name":"Star Fox: Zero","Sales":35,"Region":"NA","Genre":"Shooter","Platform":"WiiU"},
        {"ID":113,"Name":"Dragon Ball FighterZ","Sales":37,"Region":"NA","Genre":"Fighting","Platform":"NS"},
        {"ID":114,"Name":"NBA 2K18","Sales":52,"Region":"NA","Genre":"Sports","Platform":"NS"},
        {"ID":115,"Name":"Doom (2016)","Sales":42,"Region":"NA","Genre":"Shooter","Platform":"NS"},
        {"ID":116,"Name":"Nintendo Labo: Toy-Con 03 Vehicle Kit","Sales":28,"Region":"NA","Genre":"Racing","Platform":"NS"},
        {"ID":117,"Name":"Wii Sports Club","Sales":30,"Region":"NA","Genre":"Sports","Platform":"WiiU"},
        {"ID":118,"Name":"Hatsune Miku: Project Mirai DX","Sales":35,"Region":"NA","Genre":"Misc","Platform":"3DS"},
        {"ID":119,"Name":"Burnout Paradise Remastered","Sales":14,"Region":"NA","Genre":"Racing","Platform":"PS4"},
        {"ID":120,"Name":"Shin Megami Tensei IV: Apocalypse","Sales":26,"Region":"NA","Genre":"Role-Playing","Platform":"3DS"},
        {"ID":121,"Name":"Nintendo Labo: Toy-Con 02 Robot Kit","Sales":32,"Region":"NA","Genre":"Action","Platform":"NS"},
        {"ID":122,"Name":"Dragon Ball Z: Extreme Butoden","Sales":23,"Region":"NA","Genre":"Fighting","Platform":"3DS"},
        {"ID":123,"Name":"Dead or Alive 5 Last Round","Sales":16,"Region":"NA","Genre":"Fighting","Platform":"PS4"},
        {"ID":124,"Name":"Disgaea 5 Complete","Sales":26,"Region":"NA","Genre":"Role-Playing","Platform":"NS"},
        {"ID":125,"Name":"Kirby: Battle Royale","Sales":13,"Region":"NA","Genre":"Fighting","Platform":"3DS"},
        {"ID":126,"Name":"Tokyo Mirage Sessions #FE","Sales":30,"Region":"NA","Genre":"Role-Playing","Platform":"WiiU"},
        {"ID":127,"Name":"Dark Souls: Remastered","Sales":28,"Region":"NA","Genre":"Role-Playing","Platform":"NS"},
        {"ID":128,"Name":"Chibi-Robo! Zip Lash","Sales":25,"Region":"NA","Genre":"Platform","Platform":"3DS"},
        {"ID":129,"Name":"Monopoly for Nintendo Switch","Sales":11,"Region":"NA","Genre":"Board Game","Platform":"NS"},
        {"ID":130,"Name":"Naruto to Boruto: Shinobi Striker","Sales":33,"Region":"NA","Genre":"Action","Platform":"PS4"},
        {"ID":131,"Name":"Overcooked! 2","Sales":30,"Region":"NA","Genre":"Simulation","Platform":"NS"},
        {"ID":132,"Name":"The Legend of Legacy","Sales":25,"Region":"NA","Genre":"Role-Playing","Platform":"3DS"},
        {"ID":133,"Name":"Ever Oasis","Sales":23,"Region":"NA","Genre":"Role-Playing","Platform":"3DS"},
        {"ID":134,"Name":"WarioWare Gold","Sales":19,"Region":"NA","Genre":"Misc","Platform":"3DS"},
        {"ID":135,"Name":"Etrian Mystery Dungeon","Sales":19,"Region":"NA","Genre":"Role-Playing","Platform":"3DS"},
        {"ID":136,"Name":"Etrian Odyssey V: Beyond the Myth","Sales":19,"Region":"NA","Genre":"Role-Playing","Platform":"3DS"},
        {"ID":137,"Name":"The World Ends with You: Final Remix","Sales":25,"Region":"NA","Genre":"Role-Playing","Platform":"NS"},
        {"ID":138,"Name":"Stella Glow","Sales":30,"Region":"NA","Genre":"Role-Playing","Platform":"3DS"},
        {"ID":139,"Name":"Sonic Boom: Fire & Ice","Sales":25,"Region":"NA","Genre":"Platform","Platform":"3DS"},
        {"ID":140,"Name":"Sid Meier's Civilization VI","Sales":21,"Region":"NA","Genre":"Strategy","Platform":"NS"},
        {"ID":141,"Name":"7th Dragon III Code: VFD","Sales":11,"Region":"NA","Genre":"Role-Playing","Platform":"3DS"},
        {"ID":142,"Name":"Attack on Titan 2","Sales":21,"Region":"NA","Genre":"Action","Platform":"NS"},
        {"ID":143,"Name":"Code Name: S.T.E.A.M.","Sales":25,"Region":"NA","Genre":"Strategy","Platform":"3DS"},
        {"ID":144,"Name":"Attack on Titan 2","Sales":16,"Region":"NA","Genre":"Action","Platform":"PS4"},
        {"ID":145,"Name":"Life Is Strange: Before the Storm","Sales":19,"Region":"NA","Genre":"Adventure","Platform":"PS4"},
        {"ID":146,"Name":"Dragon Quest Builders: Revive Alefgard","Sales":13,"Region":"NA","Genre":"Role-Playing","Platform":"NS"},
        {"ID":147,"Name":"Fate/Extella: The Umbral Star","Sales":18,"Region":"NA","Genre":"Action","Platform":"NS"},
        {"ID":148,"Name":"Radiant Historia: Perfect Chronology","Sales":19,"Region":"NA","Genre":"Role-Playing","Platform":"3DS"},
        {"ID":149,"Name":"Valkyria Chronicles 4","Sales":21,"Region":"NA","Genre":"Strategy","Platform":"NS"},
        {"ID":150,"Name":"Project X Zone 2","Sales":11,"Region":"NA","Genre":"Role-Playing","Platform":"3DS"},
        {"ID":151,"Name":"Captain Toad: Treasure Tracker","Sales":11,"Region":"NA","Genre":"Puzzle","Platform":"3DS"},
        {"ID":152,"Name":"Street Fighter 30th Anniversary Collection","Sales":21,"Region":"NA","Genre":"Fighting","Platform":"NS"},
        {"ID":153,"Name":"Resident Evil: Revelations","Sales":11,"Region":"NA","Genre":"Action","Platform":"PS4"},
        {"ID":154,"Name":"Xenoblade Chronicles 2: Torna ~ The Golden Country","Sales":14,"Region":"NA","Genre":"Role-Playing","Platform":"NS"},
        {"ID":155,"Name":"Gravity Rush Remastered","Sales":4,"Region":"NA","Genre":"Action-Adventure","Platform":"PS4"},
        {"ID":156,"Name":"Gear.Club Unlimited","Sales":18,"Region":"NA","Genre":"Racing","Platform":"NS"},
        {"ID":157,"Name":"Metroid Prime: Federation Force","Sales":14,"Region":"NA","Genre":"Action","Platform":"3DS"},
        {"ID":158,"Name":"Rodea the Sky Soldier","Sales":18,"Region":"NA","Genre":"Action-Adventure","Platform":"WiiU"},
        {"ID":159,"Name":"Ys VIII: Lacrimosa of Dana","Sales":6,"Region":"NA","Genre":"Role-Playing","Platform":"NS"},
        {"ID":160,"Name":"Dead or Alive 5 Last Round","Sales":9,"Region":"NA","Genre":"Fighting","Platform":"XOne"},
        {"ID":161,"Name":"Sushi Striker: The Way of Sushido","Sales":4,"Region":"NA","Genre":"Puzzle","Platform":"NS"},
        {"ID":162,"Name":"BlazBlue: Cross Tag Battle","Sales":7,"Region":"NA","Genre":"Fighting","Platform":"NS"},
        {"ID":163,"Name":"RPG Maker: Fes","Sales":6,"Region":"NA","Genre":"Role-Playing","Platform":"3DS"},
        {"ID":164,"Name":"Disgaea 1 Complete","Sales":6,"Region":"NA","Genre":"Role-Playing","Platform":"NS"}]
    };
    var NADataSet = {"children":[]}
    datasetNARegion.children.forEach(d =>{
        NADataSet.children.push(d)
    })

    // Define the div for the tooltip
    var tooltipTest = d3.select("body").append("tooltipTest")
        .attr("class", "tooltip")
        .style("opacity", 0);

    function updateNADonut(platform){
        d3.selectAll("#bubbleNAFinal > *").remove();

        var NADataSet = {"children":[]}
        datasetNARegion.children.forEach(function(d) {
            if (d.Platform === platform){
                NADataSet.children.push(d);
            }
        })
        createBubbleChartNA(NADataSet)
    }

    function updateNA(genre){
        d3.selectAll("#bubbleNAFinal > *").remove();

        var NADataSet = {"children":[]}
        datasetNARegion.children.forEach(function(d) {
            if (d.Genre === genre){
                NADataSet.children.push(d);
            }
        })
        createBubbleChartNA(NADataSet)
    }
    function  createBubbleChartNA(myData){
        var diameter = 1000; //set size of overall chart
        var color = d3.scaleOrdinal()
            .range(["#8da0cb"]);
    
        var bubble = d3.pack(myData) //loading data into D3's bubble functions
            .size([diameter, diameter])
            .padding(1.5);
    
        var svg = d3.select("#bubbleNAFinal")
            .append("svg")
            .attr("width", diameter)
            .attr("height", diameter)
            .attr("class", "bubble");
    
        var nodes = d3.hierarchy(myData)
            .sum(function(d) { return d.Sales; });
    
        var node = svg.selectAll(".node")
            .data(bubble(nodes).descendants())
            .enter()
            .filter(function(d){
                return  !d.children
            })
            .append("g")
            .attr("class", "node")
            .attr("transform", function(d) {
                return "translate(" + d.x + "," + d.y + ")";
            });

        //Removed to open room for the tooltip
        /**
        node.append("title")
            .text(function(d) {
                return d.data.Name + ": " + formatNumber((d.data.Sales)*5790) + " Copies ("  + d.data.Sales+ " copies per 100 000)";
            }); **/
    
        node.append("circle")
            .attr("r", function(d) {
                return d.r;
            })
            .attr("isSelected", false)
            .attr("id", function(d, i) {
                return "na" + i;
            })
            .style("fill", function(d,i) {
                return color(i);
            })
            .on("mouseover", function(d, i) {
                if (d3.select(this).attr("isSelected") === "false") {
                    d3.select(this).style("fill", "#A7EA91");
                    d3.select("#" + "jp" + i)
                        .style("fill", "#A7EA91");
                }
                tooltipTest.transition()
                    .duration(200)
                    .style("opacity", "1");
                tooltipTest	.html( d.data.Name + ": " + formatNumber((d.data.Sales)*5790) + "<br/>" + " Copies ("  + d.data.Sales+ " copies per 100 000)")
                    .style("left", (d3.event.pageX + 220) + "px")
                    .style("top", (d3.event.pageY + 450) + "px");
            })
            .on("mouseout", function(d, i) {
                if (d3.select(this).attr("isSelected") === "false") {
                    d3.select(this).style("fill", function (d, i) {
                        return color(i);
                    })
                    d3.select("#" + "jp" + i)
                        .style("fill", "#FF6347")
                }
                tooltipTest.transition()
                    .duration(500)
                    .style("opacity", 0);
            })
            .on("click", function(d, i){
                if (d3.select(this).attr("isSelected") === "false") {
                    d3.select(this)
                        .attr("isSelected", true)
                        .style("fill", "#54DD74");
                    d3.select("#" + "jp" + i)
                        .attr("isSelected", true)
                        .style("fill", "#54DD74");
                } else {
                    d3.select(this).attr("isSelected", false)
                        .style("fill", function(d,i) {
                            return color(i);
                        })
                    d3.select("#" + "na" + i)
                        .attr("isSelected", false)
                        .style("fill", "#FF6347");
                }
            });
    
        node.append("text") //text for game title
            .attr("dy", ".2em")
            .style("text-anchor", "middle")
            .text(function(d) {
                return d.data.Name.substring(0, d.r / 3);
            })
            .attr("font-family", "sans-serif")
            .attr("font-size", function(d){
                return (d.r)**.55;
            })
            .attr("fill", "white");
    
        // node.append("text") //text for amount of sales
        //     .attr("dy", "1.3em")
        //     .style("text-anchor", "middle")
        //     .text(function(d) {
        //         return d.data.Sales;
        //     })
        //     .attr("font-family",  "Gill Sans", "Gill Sans MT")
        //     .attr("font-size", function(d){
        //         return d.r/4;
        //     })
        //     .attr("fill", "white");
    
        d3.select(self.frameElement)
            .style("height", diameter + "px");
     
    }
    
    // createBubbleChartNA(dataset)
    // // Set Up Tool-tip
    // var tooltip = node.append("g")
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


    var datasetJPRegion = {
        "children": [{"ID":1,"Name":"Grand Theft Auto V","Sales":472,"Region":"JPS","Genre":"Action","Platform":"PS4"},
        {"ID":2,"Name":"Red Dead Redemption 2","Sales":165,"Region":"JPS","Genre":"Action-Adventure","Platform":"PS4"},
        {"ID":3,"Name":"Call of Duty: WWII","Sales":315,"Region":"JPS","Genre":"Shooter","Platform":"PS4"},
        {"ID":4,"Name":"FIFA 18","Sales":118,"Region":"JPS","Genre":"Sports","Platform":"PS4"},
        {"ID":5,"Name":"FIFA 17","Sales":94,"Region":"JPS","Genre":"Sports","Platform":"PS4"},
        {"ID":6,"Name":"Grand Theft Auto V","Sales":8,"Region":"JPS","Genre":"Action","Platform":"XOne"},
        {"ID":7,"Name":"Fallout 4","Sales":213,"Region":"JPS","Genre":"Role-Playing","Platform":"PS4"},
        {"ID":8,"Name":"FIFA 16","Sales":55,"Region":"JPS","Genre":"Sports","Platform":"PS4"},
        {"ID":9,"Name":"Star Wars Battlefront (2015)","Sales":181,"Region":"JPS","Genre":"Shooter","Platform":"PS4"},
        {"ID":10,"Name":"Call of Duty: Advanced Warfare","Sales":110,"Region":"JPS","Genre":"Shooter","Platform":"PS4"},
        {"ID":11,"Name":"Minecraft","Sales":276,"Region":"JPS","Genre":"Misc","Platform":"PS4"},
        {"ID":12,"Name":"FIFA 15","Sales":39,"Region":"JPS","Genre":"Sports","Platform":"PS4"},
        {"ID":13,"Name":"God of War (2018)","Sales":102,"Region":"JPS","Genre":"Action","Platform":"PS4"},
        {"ID":14,"Name":"Call of Duty: Advanced Warfare","Sales":8,"Region":"JPS","Genre":"Shooter","Platform":"XOne"},
        {"ID":15,"Name":"Final Fantasy XV","Sales":827,"Region":"JPS","Genre":"Role-Playing","Platform":"PS4"},
        {"ID":16,"Name":"Fallout 4","Sales":16,"Region":"JPS","Genre":"Role-Playing","Platform":"XOne"},
        {"ID":17,"Name":"Monster Hunter: World","Sales":1709,"Region":"JPS","Genre":"Action","Platform":"PS4"},
        {"ID":18,"Name":"Pokemon: Let's Go, Pikachu!","Sales":646,"Region":"JPS","Genre":"Role-Playing","Platform":"NS"},
        {"ID":19,"Name":"Overwatch","Sales":134,"Region":"JPS","Genre":"Shooter","Platform":"PS4"},
        {"ID":20,"Name":"Star Wars Battlefront (2015)","Sales":16,"Region":"JPS","Genre":"Shooter","Platform":"XOne"},
        {"ID":21,"Name":"Batman: Arkham Knight","Sales":87,"Region":"JPS","Genre":"Action","Platform":"PS4"},
        {"ID":22,"Name":"Far Cry 4","Sales":87,"Region":"JPS","Genre":"Shooter","Platform":"PS4"},
        {"ID":23,"Name":"NBA 2K16","Sales":39,"Region":"JPS","Genre":"Sports","Platform":"PS4"},
        {"ID":24,"Name":"Far Cry 5","Sales":118,"Region":"JPS","Genre":"Action","Platform":"PS4"},
        {"ID":25,"Name":"Assassin's Creed Syndicate","Sales":63,"Region":"JPS","Genre":"Action","Platform":"PS4"},
        {"ID":26,"Name":"NBA 2K17","Sales":24,"Region":"JPS","Genre":"Sports","Platform":"PS4"},
        {"ID":27,"Name":"The Elder Scrolls V: Skyrim Special Edition","Sales":63,"Region":"JPS","Genre":"Role-Playing","Platform":"PS4"},
        {"ID":28,"Name":"NBA 2K18","Sales":31,"Region":"JPS","Genre":"Sports","Platform":"PS4"},
        {"ID":29,"Name":"Assassin's Creed Odyssey","Sales":71,"Region":"JPS","Genre":"Action-Adventure","Platform":"PS4"},
        {"ID":30,"Name":"Tom Clancy's Ghost Recon Wildlands","Sales":173,"Region":"JPS","Genre":"Shooter","Platform":"PS4"},
        {"ID":31,"Name":"Mafia III","Sales":31,"Region":"JPS","Genre":"Action-Adventure","Platform":"PS4"},
        {"ID":32,"Name":"Far Cry: Primal","Sales":55,"Region":"JPS","Genre":"Action-Adventure","Platform":"PS4"},
        {"ID":33,"Name":"Pokemon: Let's Go, Eevee!","Sales":402,"Region":"JPS","Genre":"Role-Playing","Platform":"NS"},
        {"ID":34,"Name":"Need for Speed (2015)","Sales":47,"Region":"JPS","Genre":"Racing","Platform":"PS4"},
        {"ID":35,"Name":"Mario + Rabbids: Kingdom Battle","Sales":173,"Region":"JPS","Genre":"Strategy","Platform":"NS"},
        {"ID":36,"Name":"No Man's Sky","Sales":31,"Region":"JPS","Genre":"Action-Adventure","Platform":"PS4"},
        {"ID":37,"Name":"Need for Speed: Payback","Sales":31,"Region":"JPS","Genre":"Racing","Platform":"PS4"},
        {"ID":38,"Name":"Dragon Quest XI: Echoes of an Elusive Age","Sales":1126,"Region":"JPS","Genre":"Role-Playing","Platform":"PS4"},
        {"ID":39,"Name":"Just Cause 3","Sales":71,"Region":"JPS","Genre":"Action-Adventure","Platform":"PS4"},
        {"ID":40,"Name":"Minecraft","Sales":409,"Region":"JPS","Genre":"Sandbox","Platform":"NS"},
        {"ID":41,"Name":"The Evil Within","Sales":87,"Region":"JPS","Genre":"Action","Platform":"PS4"},
        {"ID":42,"Name":"Forza Horizon 4","Sales":8,"Region":"JPS","Genre":"Racing","Platform":"XOne"},
        {"ID":43,"Name":"Titanfall 2","Sales":47,"Region":"JPS","Genre":"Shooter","Platform":"PS4"},
        {"ID":44,"Name":"Far Cry 4","Sales":16,"Region":"JPS","Genre":"Shooter","Platform":"XOne"},
        {"ID":45,"Name":"The Order: 1886","Sales":55,"Region":"JPS","Genre":"Shooter","Platform":"PS4"},
        {"ID":46,"Name":"Forza Motorsport 7","Sales":8,"Region":"JPS","Genre":"Racing","Platform":"XOne"},
        {"ID":47,"Name":"Minecraft","Sales":299,"Region":"JPS","Genre":"Misc","Platform":"WiiU"},
        {"ID":48,"Name":"Wolfenstein II: The New Colossus","Sales":8,"Region":"JPS","Genre":"Shooter","Platform":"PS4"},
        {"ID":49,"Name":"Fallout 76","Sales":79,"Region":"JPS","Genre":"Role-Playing","Platform":"PS4"},
        {"ID":50,"Name":"The Last Guardian","Sales":102,"Region":"JPS","Genre":"Action-Adventure","Platform":"PS4"},
        {"ID":51,"Name":"Hyrule Warriors","Sales":102,"Region":"JPS","Genre":"Misc","Platform":"WiiU"},
        {"ID":52,"Name":"Metal Gear Solid V: Ground Zeroes","Sales":134,"Region":"JPS","Genre":"Action-Adventure","Platform":"PS4"},
        {"ID":53,"Name":"Shadow of the Colossus","Sales":39,"Region":"JPS","Genre":"Action-Adventure","Platform":"PS4"},
        {"ID":54,"Name":"Sunset Overdrive","Sales":0,"Region":"JPS","Genre":"Action","Platform":"XOne"},
        {"ID":55,"Name":"The Elder Scrolls V: Skyrim","Sales":47,"Region":"JPS","Genre":"Role-Playing","Platform":"NS"},
        {"ID":56,"Name":"Dragon Quest VIII: Journey of the Cursed King","Sales":693,"Region":"JPS","Genre":"Role-Playing","Platform":"3DS"},
        {"ID":57,"Name":"Crash Bandicoot N. Sane Trilogy","Sales":16,"Region":"JPS","Genre":"Platform","Platform":"NS"},
        {"ID":58,"Name":"FIFA 18","Sales":102,"Region":"JPS","Genre":"Sports","Platform":"NS"},
        {"ID":59,"Name":"Disney Magic Castle: My Happy Life","Sales":417,"Region":"JPS","Genre":"Simulation","Platform":"3DS"},
        {"ID":60,"Name":"Ni no Kuni II: Revenant Kingdom","Sales":94,"Region":"JPS","Genre":"Role-Playing","Platform":"PS4"},
        {"ID":61,"Name":"Super Bomberman R","Sales":150,"Region":"JPS","Genre":"Puzzle","Platform":"NS"},
        {"ID":62,"Name":"Paper Mario: Color Splash","Sales":63,"Region":"JPS","Genre":"Action-Adventure","Platform":"WiiU"},
        {"ID":63,"Name":"Mario Party: Star Rush","Sales":157,"Region":"JPS","Genre":"Party","Platform":"3DS"},
        {"ID":64,"Name":"Wii Fit U","Sales":165,"Region":"JPS","Genre":"Misc","Platform":"WiiU"},
        {"ID":65,"Name":"Bayonetta 2","Sales":79,"Region":"JPS","Genre":"Action","Platform":"WiiU"},
        {"ID":66,"Name":"Xenoblade Chronicles X","Sales":118,"Region":"JPS","Genre":"Role-Playing","Platform":"WiiU"},
        {"ID":67,"Name":"The Crew 2","Sales":39,"Region":"JPS","Genre":"Racing","Platform":"PS4"},
        {"ID":68,"Name":"Professor Layton vs Ace Attorney","Sales":236,"Region":"JPS","Genre":"Adventure","Platform":"3DS"},
        {"ID":69,"Name":"LEGO City Undercover","Sales":8,"Region":"JPS","Genre":"Platform","Platform":"PS4"},
        {"ID":70,"Name":"Fire Emblem Echoes: Shadows of Valentia","Sales":165,"Region":"JPS","Genre":"Role-Playing","Platform":"3DS"},
        {"ID":71,"Name":"FIFA 19","Sales":47,"Region":"JPS","Genre":"Sports","Platform":"NS"},
        {"ID":72,"Name":"Sonic Forces","Sales":8,"Region":"JPS","Genre":"Platform","Platform":"NS"},
        {"ID":73,"Name":"Monster Hunter Generations Ultimate","Sales":213,"Region":"JPS","Genre":"Action","Platform":"NS"},
        {"ID":74,"Name":"Astro Bot Rescue Mission","Sales":16,"Region":"JPS","Genre":"Platform","Platform":"PS4"},
        {"ID":75,"Name":"The LEGO Movie Videogame","Sales":8,"Region":"JPS","Genre":"Action-Adventure","Platform":"PS4"},
        {"ID":76,"Name":"Plants vs Zombies: Garden Warfare","Sales":0,"Region":"JPS","Genre":"Shooter","Platform":"XOne"},
        {"ID":77,"Name":"Monster Hunter Stories","Sales":307,"Region":"JPS","Genre":"Role-Playing","Platform":"3DS"},
        {"ID":78,"Name":"The Evil Within","Sales":0,"Region":"JPS","Genre":"Misc","Platform":"XOne"},
        {"ID":79,"Name":"Fortnite","Sales":8,"Region":"JPS","Genre":"Shooter","Platform":"NS"},
        {"ID":80,"Name":"Mario Party: The Top 100","Sales":189,"Region":"JPS","Genre":"Misc","Platform":"3DS"},
        {"ID":81,"Name":"Diablo III: Eternal Collection","Sales":8,"Region":"JPS","Genre":"Action","Platform":"NS"},
        {"ID":82,"Name":"LEGO City Undercover","Sales":24,"Region":"JPS","Genre":"Platform","Platform":"NS"},
        {"ID":83,"Name":"LEGO The Incredibles","Sales":8,"Region":"JPS","Genre":"Action","Platform":"NS"},
        {"ID":84,"Name":"Final Fantasy Explorers","Sales":228,"Region":"JPS","Genre":"Role-Playing","Platform":"3DS"},
        {"ID":85,"Name":"LEGO Worlds","Sales":0,"Region":"JPS","Genre":"Misc","Platform":"NS"},
        {"ID":86,"Name":"Kirby and the Rainbow Curse","Sales":102,"Region":"JPS","Genre":"Platform","Platform":"WiiU"},
        {"ID":87,"Name":"Disney Magic World 2","Sales":181,"Region":"JPS","Genre":"Simulation","Platform":"3DS"},
        {"ID":88,"Name":"Bayonetta 2","Sales":55,"Region":"JPS","Genre":"Action","Platform":"NS"},
        {"ID":89,"Name":"Ultra Street Fighter II: The Final Challengers","Sales":71,"Region":"JPS","Genre":"Fighting","Platform":"NS"},
        {"ID":90,"Name":"Everybody's Golf","Sales":134,"Region":"JPS","Genre":"Sports","Platform":"PS4"},
        {"ID":91,"Name":"Xenoblade Chronicles","Sales":102,"Region":"JPS","Genre":"Role-Playing","Platform":"3DS"},
        {"ID":92,"Name":"Puzzle & Dragons Z + Super Mario Bros. Edition","Sales":276,"Region":"JPS","Genre":"Puzzle","Platform":"3DS"},
        {"ID":93,"Name":"Metroid: Samus Returns","Sales":55,"Region":"JPS","Genre":"Action-Adventure","Platform":"3DS"},
        {"ID":94,"Name":"Bravely Second: End Layer","Sales":157,"Region":"JPS","Genre":"Role-Playing","Platform":"3DS"},
        {"ID":95,"Name":"Poochy & Yoshi's Woolly World","Sales":134,"Region":"JPS","Genre":"Platform","Platform":"3DS"},
        {"ID":96,"Name":"Puyo Puyo Tetris","Sales":94,"Region":"JPS","Genre":"Puzzle","Platform":"NS"},
        {"ID":97,"Name":"Dragon Ball: Xenoverse 2","Sales":150,"Region":"JPS","Genre":"Action","Platform":"NS"},
        {"ID":98,"Name":"Mario Tennis Ultra Smash","Sales":118,"Region":"JPS","Genre":"Sports","Platform":"WiiU"},
        {"ID":99,"Name":"Dragon Ball: Fusions","Sales":189,"Region":"JPS","Genre":"Role-Playing","Platform":"3DS"},
        {"ID":100,"Name":"Fire Emblem Warriors","Sales":79,"Region":"JPS","Genre":"Action","Platform":"NS"},
        {"ID":101,"Name":"Pokemon Art Academy","Sales":134,"Region":"JPS","Genre":"Misc","Platform":"3DS"},
        {"ID":102,"Name":"Story of Seasons: Trio of Towns","Sales":173,"Region":"JPS","Genre":"Simulation","Platform":"3DS"},
        {"ID":103,"Name":"Mario Golf: World Tour","Sales":142,"Region":"JPS","Genre":"Sports","Platform":"3DS"},
        {"ID":104,"Name":"Animal Crossing: Amiibo Festival","Sales":79,"Region":"JPS","Genre":"Party","Platform":"WiiU"},
        {"ID":105,"Name":"Luigi's Mansion","Sales":71,"Region":"JPS","Genre":"Adventure","Platform":"3DS"},
        {"ID":106,"Name":"Detective Pikachu","Sales":94,"Region":"JPS","Genre":"Adventure","Platform":"3DS"},
        {"ID":107,"Name":"Knack 2","Sales":8,"Region":"JPS","Genre":"Platform","Platform":"PS4"},
        {"ID":108,"Name":"Sonic Mania","Sales":8,"Region":"JPS","Genre":"Platform","Platform":"NS"},
        {"ID":109,"Name":"Mario Sports Superstars","Sales":102,"Region":"JPS","Genre":"Sports","Platform":"3DS"},
        {"ID":110,"Name":"Hyrule Warriors: Definitive Edition","Sales":55,"Region":"JPS","Genre":"Action","Platform":"NS"},
        {"ID":111,"Name":"Hey! Pikmin","Sales":134,"Region":"JPS","Genre":"Platform","Platform":"3DS"},
        {"ID":112,"Name":"Star Fox: Zero","Sales":71,"Region":"JPS","Genre":"Shooter","Platform":"WiiU"},
        {"ID":113,"Name":"Dragon Ball FighterZ","Sales":55,"Region":"JPS","Genre":"Fighting","Platform":"NS"},
        {"ID":114,"Name":"NBA 2K18","Sales":24,"Region":"JPS","Genre":"Sports","Platform":"NS"},
        {"ID":115,"Name":"Doom (2016)","Sales":8,"Region":"JPS","Genre":"Shooter","Platform":"NS"},
        {"ID":116,"Name":"Nintendo Labo: Toy-Con 03 Vehicle Kit","Sales":47,"Region":"JPS","Genre":"Racing","Platform":"NS"},
        {"ID":117,"Name":"Wii Sports Club","Sales":31,"Region":"JPS","Genre":"Sports","Platform":"WiiU"},
        {"ID":118,"Name":"Hatsune Miku: Project Mirai DX","Sales":87,"Region":"JPS","Genre":"Misc","Platform":"3DS"},
        {"ID":119,"Name":"Burnout Paradise Remastered","Sales":8,"Region":"JPS","Genre":"Racing","Platform":"PS4"},
        {"ID":120,"Name":"Shin Megami Tensei IV: Apocalypse","Sales":126,"Region":"JPS","Genre":"Role-Playing","Platform":"3DS"},
        {"ID":121,"Name":"Nintendo Labo: Toy-Con 02 Robot Kit","Sales":63,"Region":"JPS","Genre":"Action","Platform":"NS"},
        {"ID":122,"Name":"Dragon Ball Z: Extreme Butoden","Sales":134,"Region":"JPS","Genre":"Fighting","Platform":"3DS"},
        {"ID":123,"Name":"Dead or Alive 5 Last Round","Sales":71,"Region":"JPS","Genre":"Fighting","Platform":"PS4"},
        {"ID":124,"Name":"Disgaea 5 Complete","Sales":39,"Region":"JPS","Genre":"Role-Playing","Platform":"NS"},
        {"ID":125,"Name":"Kirby: Battle Royale","Sales":157,"Region":"JPS","Genre":"Fighting","Platform":"3DS"},
        {"ID":126,"Name":"Tokyo Mirage Sessions #FE","Sales":63,"Region":"JPS","Genre":"Role-Playing","Platform":"WiiU"},
        {"ID":127,"Name":"Dark Souls: Remastered","Sales":24,"Region":"JPS","Genre":"Role-Playing","Platform":"NS"},
        {"ID":128,"Name":"Chibi-Robo! Zip Lash","Sales":55,"Region":"JPS","Genre":"Platform","Platform":"3DS"},
        {"ID":129,"Name":"Monopoly for Nintendo Switch","Sales":8,"Region":"JPS","Genre":"Board Game","Platform":"NS"},
        {"ID":130,"Name":"Naruto to Boruto: Shinobi Striker","Sales":16,"Region":"JPS","Genre":"Action","Platform":"PS4"},
        {"ID":131,"Name":"Overcooked! 2","Sales":8,"Region":"JPS","Genre":"Simulation","Platform":"NS"},
        {"ID":132,"Name":"The Legend of Legacy","Sales":87,"Region":"JPS","Genre":"Role-Playing","Platform":"3DS"},
        {"ID":133,"Name":"Ever Oasis","Sales":39,"Region":"JPS","Genre":"Role-Playing","Platform":"3DS"},
        {"ID":134,"Name":"WarioWare Gold","Sales":102,"Region":"JPS","Genre":"Misc","Platform":"3DS"},
        {"ID":135,"Name":"Etrian Mystery Dungeon","Sales":110,"Region":"JPS","Genre":"Role-Playing","Platform":"3DS"},
        {"ID":136,"Name":"Etrian Odyssey V: Beyond the Myth","Sales":110,"Region":"JPS","Genre":"Role-Playing","Platform":"3DS"},
        {"ID":137,"Name":"The World Ends with You: Final Remix","Sales":24,"Region":"JPS","Genre":"Role-Playing","Platform":"NS"},
        {"ID":138,"Name":"Stella Glow","Sales":47,"Region":"JPS","Genre":"Role-Playing","Platform":"3DS"},
        {"ID":139,"Name":"Sonic Boom: Fire & Ice","Sales":16,"Region":"JPS","Genre":"Platform","Platform":"3DS"},
        {"ID":140,"Name":"Sid Meier's Civilization VI","Sales":8,"Region":"JPS","Genre":"Strategy","Platform":"NS"},
        {"ID":141,"Name":"7th Dragon III Code: VFD","Sales":102,"Region":"JPS","Genre":"Role-Playing","Platform":"3DS"},
        {"ID":142,"Name":"Attack on Titan 2","Sales":63,"Region":"JPS","Genre":"Action","Platform":"NS"},
        {"ID":143,"Name":"Code Name: S.T.E.A.M.","Sales":16,"Region":"JPS","Genre":"Strategy","Platform":"3DS"},
        {"ID":144,"Name":"Attack on Titan 2","Sales":47,"Region":"JPS","Genre":"Action","Platform":"PS4"},
        {"ID":145,"Name":"Life Is Strange: Before the Storm","Sales":16,"Region":"JPS","Genre":"Adventure","Platform":"PS4"},
        {"ID":146,"Name":"Dragon Quest Builders: Revive Alefgard","Sales":55,"Region":"JPS","Genre":"Role-Playing","Platform":"NS"},
        {"ID":147,"Name":"Fate/Extella: The Umbral Star","Sales":31,"Region":"JPS","Genre":"Action","Platform":"NS"},
        {"ID":148,"Name":"Radiant Historia: Perfect Chronology","Sales":47,"Region":"JPS","Genre":"Role-Playing","Platform":"3DS"},
        {"ID":149,"Name":"Valkyria Chronicles 4","Sales":16,"Region":"JPS","Genre":"Strategy","Platform":"NS"},
        {"ID":150,"Name":"Project X Zone 2","Sales":71,"Region":"JPS","Genre":"Role-Playing","Platform":"3DS"},
        {"ID":151,"Name":"Captain Toad: Treasure Tracker","Sales":63,"Region":"JPS","Genre":"Puzzle","Platform":"3DS"},
        {"ID":152,"Name":"Street Fighter 30th Anniversary Collection","Sales":8,"Region":"JPS","Genre":"Fighting","Platform":"NS"},
        {"ID":153,"Name":"Resident Evil: Revelations","Sales":31,"Region":"JPS","Genre":"Action","Platform":"PS4"},
        {"ID":154,"Name":"Xenoblade Chronicles 2: Torna ~ The Golden Country","Sales":16,"Region":"JPS","Genre":"Role-Playing","Platform":"NS"},
        {"ID":155,"Name":"Gravity Rush Remastered","Sales":39,"Region":"JPS","Genre":"Action-Adventure","Platform":"PS4"},
        {"ID":156,"Name":"Gear.Club Unlimited","Sales":8,"Region":"JPS","Genre":"Racing","Platform":"NS"},
        {"ID":157,"Name":"Metroid Prime: Federation Force","Sales":24,"Region":"JPS","Genre":"Action","Platform":"3DS"},
        {"ID":158,"Name":"Rodea the Sky Soldier","Sales":8,"Region":"JPS","Genre":"Action-Adventure","Platform":"WiiU"},
        {"ID":159,"Name":"Ys VIII: Lacrimosa of Dana","Sales":24,"Region":"JPS","Genre":"Role-Playing","Platform":"NS"},
        {"ID":160,"Name":"Dead or Alive 5 Last Round","Sales":8,"Region":"JPS","Genre":"Fighting","Platform":"XOne"},
        {"ID":161,"Name":"Sushi Striker: The Way of Sushido","Sales":24,"Region":"JPS","Genre":"Puzzle","Platform":"NS"},
        {"ID":162,"Name":"BlazBlue: Cross Tag Battle","Sales":8,"Region":"JPS","Genre":"Fighting","Platform":"NS"},
        {"ID":163,"Name":"RPG Maker: Fes","Sales":16,"Region":"JPS","Genre":"Role-Playing","Platform":"3DS"},
        {"ID":164,"Name":"Disgaea 1 Complete","Sales":8,"Region":"JPS","Genre":"Role-Playing","Platform":"NS"}]
    };

    var JPDataSet = {"children":[]}
    datasetJPRegion.children.forEach(d =>{
        JPDataSet.children.push(d)
    })

    function updateJPDonut(platform){
        d3.selectAll("#bubbleJapanFinal > *").remove();

        var JPDataSet = {"children":[]}
        datasetJPRegion.children.forEach(function(d) {
            if (d.Platform === platform){
                JPDataSet.children.push(d);
            }
        })
        createBubbleChartJP(JPDataSet)
    }

    function updateJP(genre){
        d3.selectAll("#bubbleJapanFinal > *").remove();

        JPDataSet = {"children":[]}
        datasetJPRegion.children.forEach(function(d) {
            if (d.Genre === genre){
                JPDataSet.children.push(d);
            }
        })
        createBubbleChartJP(JPDataSet)
    }

function createBubbleChartJP(myData){
    var diameter = 1000;
    var color = d3.scaleOrdinal()
        .range(["#FF6347"]);

    var bubble = d3.pack(myData)
        .size([diameter, diameter])
        .padding(1.5);

    var svg = d3.select("#bubbleJapanFinal")
        .append("svg")
        .attr("width", diameter)
        .attr("height", diameter)
        .attr("class", "bubble");

    var nodes = d3.hierarchy(myData)
        .sum(function(d) { return d.Sales; });

    var node = svg.selectAll(".node")
        .data(bubble(nodes).descendants())
        .enter()
        .filter(function(d){
            return  !d.children
        })
        .append("g")
        .attr("class", "node")
        .attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ")";
        });

    // node.append("title")
    //     .text(function(d) {
    //         return d.Name + ": " + d.Sales;
    //     });

    node.append("circle")
        .attr("r", function(d) {
            return d.r;
        })
        .attr("isSelected", false)
        .attr("id", function(d, i) {
            return "jp" + i;
        })
        .style("fill", function(d,i) {
            return color(i);
        })
        .on("mouseover", function(d, i) {
            if (d3.select(this).attr("isSelected") === "false") {
                d3.select(this).style("fill", "#A7EA91");
                d3.select("#" + "na" + i)
                    .style("fill", "#A7EA91");
            }
            tooltipTest.transition()
                .duration(200)
                .style("opacity", "1");
            tooltipTest	.html( d.data.Name + ": " + formatNumber((d.data.Sales)*5790) + "<br/>" + " Copies ("  + d.data.Sales+ " copies per 100 000)")
                .style("left", (d3.event.pageX + 220) + "px")
                .style("top", (d3.event.pageY + 450) + "px");
        })
        .on("mouseout", function(d, i) {
            if (d3.select(this).attr("isSelected") === "false") {
                d3.select(this).style("fill", function (d, i) {
                    return color(i);
                })
                d3.select("#" + "na" + i)
                    .style("fill", "#8da0cb")
            }
            tooltipTest.transition()
                .duration(500)
                .style("opacity", 0);
        })
        .on("click", function(d, i){
            if (d3.select(this).attr("isSelected") === "false") {
                d3.select(this)
                    .attr("isSelected", true)
                    .style("fill", "#54DD74");
                d3.select("#" + "na" + i)
                    .attr("isSelected", true)
                    .style("fill", "#54DD74");
            } else {
                d3.select(this).attr("isSelected", false)
                    .style("fill", function(d,i) {
                        return color(i);
                    })
                d3.select("#" + "na" + i)
                    .attr("isSelected", false)
                    .style("fill", "#8da0cb");
            }
        });

    node.append("text")
        .attr("dy", ".2em")
        .style("text-anchor", "middle")
        .text(function(d) {
            return d.data.Name.substring(0, d.r / 3);
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", function(d){
            return (d.r)**.55;
        })
        .attr("fill", "white");


    //Removed to open room for the tooltip
    /**
    node.append("title")
            .text(function(d) {
                return d.data.Name + ": " + formatNumber((d.data.Sales)*1270) + " Copies ("  + d.data.Sales+ " copies per 100 000)";
        });
    **/

    d3.select(self.frameElement)
        .style("height", diameter + "px");
}
createBubbleChartJP(datasetJPRegion)
createBubbleChartNA(datasetNARegion)