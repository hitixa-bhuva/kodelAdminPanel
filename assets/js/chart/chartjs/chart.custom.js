(function () {
  Chart.defaults.global = {
    animation: true,
    animationSteps: 60,
    animationEasing: "easeOutIn",
    showScale: true,
    scaleOverride: false,
    scaleSteps: null,
    scaleStepWidth: null,
    scaleStartValue: null,
    scaleLineColor: "#eeeeee",
    scaleLineWidth: 1,
    scaleShowLabels: true,
    scaleLabel: "<%=value%>",
    scaleIntegersOnly: true,
    scaleBeginAtZero: false,
    scaleFontSize: 12,
    scaleFontStyle: "normal",
    scaleFontColor: "#717171",
    responsive: true,
    maintainAspectRatio: true,
    showTooltips: true,
    multiTooltipTemplate: "<%= value %>",
    tooltipFillColor: "#333333",
    tooltipEvents: ["mousemove", "touchstart", "touchmove"],
    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
    tooltipFontSize: 14,
    tooltipFontStyle: "normal",
    tooltipFontColor: "#fff",
    tooltipTitleFontSize: 16,
    TitleFontStyle: "Raleway",
    tooltipTitleFontStyle: "bold",
    tooltipTitleFontColor: "#ffffff",
    tooltipYPadding: 10,
    tooltipXPadding: 10,
    tooltipCaretSize: 8,
    tooltipCornerRadius: 6,
    tooltipXOffset: 5,
    onAnimationProgress: function () {},
    onAnimationComplete: function () {},
  };
  var barData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        fillColor: "rgba(28, 27, 32, 0.4)",
        strokeColor: ParisAdminConfig.primary,
        highlightFill: "rgba(28, 27, 32, 0.6)",
        highlightStroke: ParisAdminConfig.primary,
        data: [35, 59, 80, 81, 56, 55, 40],
      },
      {
        label: "My Second dataset",
        fillColor: "rgba(148, 196, 255,0.4)",
        strokeColor: ParisAdminConfig.secondary,
        highlightFill: "rgba(148, 196, 255,0.6)",
        highlightStroke: ParisAdminConfig.secondary,
        data: [28, 48, 40, 19, 86, 27, 90],
      },
    ],
  };
  var barOptions = {
    scaleBeginAtZero: true,
    scaleShowGridLines: true,
    scaleGridLineColor: "rgba(0,0,0,0.1)",
    scaleGridLineWidth: 1,
    scaleShowHorizontalLines: true,
    scaleShowVerticalLines: true,
    barShowStroke: true,
    barStrokeWidth: 2,
    barValueSpacing: 5,
    barDatasetSpacing: 1,
  };
  var barCtx = document.getElementById("myBarGraph").getContext("2d");
  var myBarChart = new Chart(barCtx).Bar(barData, barOptions);
  var polarData = [
    {
      value: 300,
      color: ParisAdminConfig.primary,
      highlight: ParisAdminConfig.primary,
      label: "Yellow",
    },
    {
      value: 50,
      color: "#f8d62b",
      highlight: "#f8d62b",
      label: "Sky",
    },
    {
      value: 100,
      color: "#51bb25",
      highlight: "#333",
      label: "Black",
    },
    {
      value: 40,
      color: "#a927f9",
      highlight: "#a927f9",
      label: "Grey",
    },
    {
      value: 120,
      color: ParisAdminConfig.secondary,
      highlight: ParisAdminConfig.secondary,
      label: "Dark Grey",
    },
  ];
  var polarOptions = {
    scaleShowLabelBackdrop: true,
    scaleBackdropColor: "rgba(255,255,255,0.75)",
    scaleBeginAtZero: true,
    scaleBackdropPaddingY: 2,
    scaleBackdropPaddingX: 2,
    scaleShowLine: true,
    segmentShowStroke: true,
    segmentStrokeColor: "#fff",
    segmentStrokeWidth: 2,
    animationSteps: 100,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: false,
    legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>',
  };
  var polarCtx = document.getElementById("myPolarGraph").getContext("2d");
  var myPolarChart = new Chart(polarCtx).PolarArea(polarData, polarOptions);
  var lineGraphData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        fillColor: "rgba(28, 27, 32, 0.3)",
        strokeColor: ParisAdminConfig.primary,
        pointColor: ParisAdminConfig.primary,
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "#000",
        data: [10, 59, 80, 81, 56, 55, 40],
      },
      {
        label: "My Second dataset",
        fillColor: "rgb(131 131 131 / 30%)",
        strokeColor: ParisAdminConfig.secondary,
        pointColor: ParisAdminConfig.secondary,
        pointStrokeColor: "#fff",
        pointHighlightFill: "#000",
        pointHighlightStroke: ParisAdminConfig.secondary,
        data: [28, 48, 40, 19, 86, 27, 90],
      },
    ],
  };
  var lineGraphOptions = {
    scaleShowGridLines: true,
    scaleGridLineColor: "rgba(0,0,0,.05)",
    scaleGridLineWidth: 1,
    scaleShowHorizontalLines: true,
    scaleShowVerticalLines: true,
    bezierCurve: true,
    bezierCurveTension: 0.4,
    pointDot: true,
    pointDotRadius: 4,
    pointDotStrokeWidth: 1,
    pointHitDetectionRadius: 20,
    datasetStroke: true,
    datasetStrokeWidth: 2,
    datasetFill: true,
    legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
  };
  var lineCtx = document.getElementById("myGraph").getContext("2d");
  var myLineCharts = new Chart(lineCtx).Line(lineGraphData, lineGraphOptions);
  var radarData = {
    labels: ["Ford", "Chevy", "Toyota", "Honda", "Mazda"],
    datasets: [
      {
        label: "My First dataset",
        fillColor: "rgba(28, 27, 32, 0.4)",
        strokeColor: ParisAdminConfig.primary,
        pointColor: ParisAdminConfig.primary,
        pointStrokeColor: ParisAdminConfig.primary,
        pointHighlightFill: ParisAdminConfig.primary,
        pointHighlightStroke: "rgba(28, 27, 32, 0.4)",
        data: [12, 3, 5, 18, 7],
      },
    ],
  };
  var radarOptions = {
    scaleShowGridLines: true,
    scaleGridLineColor: "rgba(0,0,0,.2)",
    scaleGridLineWidth: 1,
    scaleShowHorizontalLines: true,
    scaleShowVerticalLines: true,
    bezierCurve: true,
    bezierCurveTension: 0.4,
    pointDot: true,
    pointDotRadius: 3,
    pointDotStrokeWidth: 1,
    pointHitDetectionRadius: 20,
    datasetStroke: true,
    datasetStrokeWidth: 2,
    datasetFill: true,
    legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
  };
  var radarCtx = document.getElementById("myRadarGraph").getContext("2d");
  var myRadarChart = new Chart(radarCtx).Radar(radarData, radarOptions);
  var pieData = [
    {
      value: 300,
      color: "#ab8ce4",
      highlight: "#ab8ce4",
      label: "Primary",
    },
    {
      value: 50,
      color: "#f5a623",
      highlight: "#f5a623",
      label: "Secondary",
    },
    {
      value: 100,
      color: "#FFC38D",
      highlight: "#FFC38D",
      label: "Danger",
    },
  ];
  var pieOptions = {
    segmentShowStroke: true,
    segmentStrokeColor: "#fff",
    segmentStrokeWidth: 2,
    percentageInnerCutout: 0,
    animationSteps: 100,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: false,
    legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>',
  };

  var doughnutData = [
    {
      value: 300,
      color: ParisAdminConfig.primary,
      highlight: ParisAdminConfig.primary,
      label: "Primary",
    },
    {
      value: 50,
      color: ParisAdminConfig.secondary,
      highlight: ParisAdminConfig.secondary,
      label: "Secondary",
    },
    {
      value: 100,
      color: "#8DD4B4",
      highlight: "#8DD4B4",
      label: "Success",
    },
  ];
  var doughnutOptions = {
    segmentShowStroke: true,
    segmentStrokeColor: "#fff",
    segmentStrokeWidth: 2,
    percentageInnerCutout: 50,
    animationSteps: 100,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: false,
    legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>',
  };
  var doughnutCtx = document.getElementById("myDoughnutGraph").getContext("2d");
  var myDoughnutChart = new Chart(doughnutCtx).Doughnut(doughnutData, doughnutOptions);
  var myLineChart = {
    labels: ["", "10", "20", "30", "40", "50", "60", "70", "80"],
    datasets: [
      {
        fillColor: "rgba(81, 187, 37, 0.2)",
        strokeColor: "#51bb25",
        pointColor: "#51bb25",
        data: [10, 20, 40, 30, 0, 20, 10, 30, 10],
      },
      {
        fillColor: "rgba(247, 49, 100, 0.2)",
        strokeColor: ParisAdminConfig.secondary,
        pointColor: ParisAdminConfig.secondary,
        data: [20, 40, 10, 20, 40, 30, 40, 10, 20],
      },
      {
        fillColor: "rgba(28, 27, 32, 0.2)",
        strokeColor: ParisAdminConfig.primary,
        pointColor: ParisAdminConfig.primary,
        data: [60, 10, 40, 30, 80, 30, 20, 90, 0],
      },
    ],
  };
  var ctx = document.getElementById("myLineCharts").getContext("2d");
  var LineChartDemo = new Chart(ctx).Line(myLineChart, {
    pointDotRadius: 2,
    pointDotStrokeWidth: 5,
    pointDotStrokeColor: "#ffffff",
    bezierCurve: false,
    scaleShowVerticalLines: false,
    scaleGridLineColor: "#eeeeee",
  });
})();
