/*
* Date : 10/06/2015
* GP   : 1
* CLS  : BTB
* 
* This's scripting for managing forums
* 
*
*
*/
$(document).ready(
		function() {
			/*
			 * Start Block of function show and hide content
			 */
			$(".general_setting").show();
			$(".topic_setting").hide();
			$(".comment_setting").hide();
			$(".categories_setting").hide();
			$(".categories_new").hide();
			$(".categories_new").hide();
			$(".general_forum").click(function() {
				$(".general_setting").show();
				$(".topic_setting").hide();
				$(".comment_setting").hide();
				$(".categories_setting").hide();
				$(".categories_new").hide();
			});
			$(".topic_forum").click(function() {
				$(".topic_setting").show();
				$(".general_setting").hide();
				$(".categories_setting").hide();
				$(".comment_setting").hide();
				$(".categories_new").hide();
			});
			$(".comment_forum").click(function() {
				$(".comment_setting").show();
				$(".general_setting").hide();
				$(".topic_setting").hide();
				$(".categories_setting").hide();
				$(".categories_new").hide();
			});
			$(".categories_forum").click(function() {
				$(".categories_setting").show();
				$(".general_setting").hide();
				$(".comment_setting").hide();
				$(".topic_setting").hide();
				$(".categories_new").hide();
			});
			$(".btn_new_categories").click(function() {
				$(".categories_setting").hide();
				$(".categories_new").show();
			});
			$(".category_btn_submit,.category_btn_cancel").click(function() {
				$(".categories_setting").show();
				$(".categories_new").hide();
			});
			/*
			 * End Block of function show and hide content
			 */

			/* Change Button */
			var i = 0;
			$("#categories_btn_disable").click(
					function() {
						if (i == 0) {
							$(this).attr("class", "btn btn-success btn-xs")
									.text("Enable");
							i++;
						} else if (i != 0) {
							$(this).attr("class", "btn btn-danger btn-xs")
									.text("Disable");
							i--;
						}
					});
			var j = 0;
			$("#categories_btn_disable1").click(
					function() {
						if (j == 0) {
							$(this).attr("class", "btn btn-success btn-xs")
									.text("Enable");
							j++;
						} else if (j != 0) {
							$(this).attr("class", "btn btn-danger btn-xs")
									.text("Disable");
							j--;
						}
					});
			var k = 0;
			$("#categories_btn_disable2").click(
					function() {
						if (k == 0) {
							$(this).attr("class", "btn btn-success btn-xs")
									.text("Enable");
							k++;
						} else if (k != 0) {
							$(this).attr("class", "btn btn-danger btn-xs")
									.text("Disable");
							k--;
						}
					});
			var l = 0;
			$("#categories_btn_disable3").click(
					function() {
						if (l == 0) {
							$(this).attr("class", "btn btn-success btn-xs")
									.text("Enable");
							l++;
						} else if (l != 0) {
							$(this).attr("class", "btn btn-danger btn-xs")
									.text("Disable");
							l--;
						}
					});
			/* Button topic add action */
			$("#topic_add,#announce_add").click(
					function() {
						$("#topic_add,#announce_add").attr("data-toggle",
								"modal").attr("data-target", "#myModal");
						$("#myModalLabel").text("Topics");
						$("#modal_title").text("New Topic");
					});
			$("#announce_add").click(
					function() {
						$("#announce_add").attr("data-toggle", "modal").attr(
								"data-target", "#myModal");
						$("#myModalLabel").text("Announcement");
						$("#modal_title").text("New Announcement");
					});
		});
/*
* Creating Graph using canvasJS
* Start Block of creating
*/
window.onload = function() {
			var chart = new CanvasJS.Chart(
					"chartContainer",
					{
						title : {
							text : "Graph details",
							fontFamily : "Arial",
							fontColor : "Peru",
							fontSize : 24

						},
						animationEnabled : true,
						axisY : {
							tickThickness : 0,
							lineThickness : 0,
							valueFormatString : " ",
							gridThickness : 0
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

			chart.render();
		}
/*
* End block of creating Graph
*
*/