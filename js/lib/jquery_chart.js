/*
* Date : 10/06/2015
* GP   : 1
* CLS  : BTB
* 
* This's scripting for creating article chart
* 
*
*
*/
$(document).ready(function() {

  
  window.onload = function() {
			var chartArt = new CanvasJS.Chart(
					"chartContainerArt",
					{
						title : {
							text : "Article details",
							fontFamily : "Arial",
							fontColor : "Peru",
							fontSize : 18

						},
						animationEnabled : true,
						axisY : {
							tickThickness : 1,
							lineThickness : 1,
							valueFormatString : "00",
							gridThickness : 1
						},
						axisX : {
							tickThickness : 0,
							lineThickness : 0,
							labelFontSize : 14,
							labelFontColor : "Peru"

						},
						data : [ {
							indexLabelFontSize : 18,
							toolTipContent : "<span style='\"'color: {color};'\"'><strong>{indexLabel}</strong></span><span style='\"'font-size: 20px; color:peru '\"'><strong>{y}</strong></span>",

							indexLabelPlacement : "inside",
							indexLabelFontColor : "white",
							indexLabelFontWeight : 300,
							indexLabelFontStyle : "italic",
							type : "pie", // Change to other type of graph {pie, line, column ...}
							dataPoints : [ {
								y : 21,
								label : "21",
								indexLabel : "Total Article "
							}, {
								y : 25,
								label : "25",
								indexLabel : "Topi View "
							}, {
								y : 33,
								label : "33",
								indexLabel : "Recently Add "
							}                
                            ]
                
						} ]
					});

			chartArt.render();
        var chartUser = new CanvasJS.Chart("chartContainerUser", {

			title:{
				text:"User information"				

			},
                        animationEnabled: true,
			axisX:{
				interval: 1,
				gridThickness: 0,
				labelFontSize: 12,
				labelFontStyle: "normal",
				labelFontWeight: "normal",
				labelFontFamily: "Lucida Sans Unicode"

			},
			axisY2:{
				interlacedColor: "rgba(1,77,101,.2)",
				gridColor: "rgba(1,77,101,.1)"

			},

			data: [
			{     
				type: "bar",
                name: "companies",
				axisYType: "secondary",
				color: "#16A085",				
				dataPoints: [
				
				{y: 1002, label: "Online"  },
				{y: 98, label: "Offline"  },
				{y: 509, label: "Guest user"  },
				{y: 59, label: "De-activated"  },
				{y: 100, label: "Recently user"  },
				{y: 302, label: "Total user" }
				]
			}
			
			]
		});

			chartUser.render();
       
    var chartForum = new CanvasJS.Chart(
					"chartContainerForum",
					{
						title : {
							text : "Graph details",
							fontFamily : "Arial",
							fontColor : "Peru",
							fontSize : 24

						},
						animationEnabled : true,
						axisY : {
							tickThickness : 1,
							lineThickness : 1,
							valueFormatString : "00",
							gridThickness : 1
						},
						axisX : {
							tickThickness : 1,
							lineThickness : 1,
							labelFontSize : 14,
							labelFontColor : "Peru"

						},
						data : [ {
							indexLabelFontSize : 18,
							toolTipContent : "<span style='\"'color: {color};'\"'><strong>{indexLabel}</strong></span><span style='\"'font-size: 20px; color:peru '\"'><strong>{y}</strong></span>",

							indexLabelPlacement : "inside",
							indexLabelFontColor : "white",
							indexLabelFontWeight : 300,
							indexLabelFontStyle : "italic",
							type : "column", // Change to other type of graph {pie, line, column ...}
							dataPoints : [ {
								y : 21,
								label : "21%",
								indexLabel : "Topic "
							}, {
								y : 25,
								label : "25%",
								indexLabel : "Questions "
							}, {
								y : 33,
								label : "33%",
								indexLabel : "Answers "
							}, {
								y : 36,
								label : "36%",
								indexLabel : "Un-answers "
							}, {
								y : 10,
								label : "10%",
								indexLabel : "Vote "
							}, {
								y : 49,
								label : "49%",
								indexLabel : "Report "
							}, {
								y : 50,
								label : "50%",
								indexLabel : "Share "
							} ]
						} ]
					});

			chartForum.render();
    
    
		}
        
  /*****/
});

/* 
* Start Block of creating
*/
/*
* End block of Graph
*
*/
/*------------------------------*/