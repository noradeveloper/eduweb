var w = 200,
    h = 200;

var colorscale = d3.scale.category10();


//Data
var d = [
    [{
        axis: "Analayzer",
        value: 0.43
    }, {
        axis: "Naturalist",
        value: 0.20
    }, {
        axis: "Action-Taker",
        value: 0.22
    }, {
        axis: "Inventor",
        value: 1.00
    }, {
        axis: "Planner",
        value: 0.43
    }, {
        axis: "visionary",
        value: 0.50
    }, {
        axis: "Mentor",
        value: 0.25
    }]
];

//Options for the Radar chart
var mycfg = {
    w: w,
    h: h,
    maxValue: 0.6,
    levels: 4,
    ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);