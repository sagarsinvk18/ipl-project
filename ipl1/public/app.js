function fetchAndVisualizeData() {
    fetch("./data1.json")
      .then(r => r.json())
      .then(visualizeData);
  }
  
  fetchAndVisualizeData();
  function visualizeData(data) {
    visualizeMatchesPlayedPerYear(data.extraRunConceded);
    return;
  }
  
  function visualizeMatchesPlayedPerYear(extraRunConceded) {
    const seriesData = [];
    for (let year in extraRunConceded) {
      seriesData.push([year, extraRunConceded[year]]);
    }
  
    Highcharts.chart("matches-played-per-year", {
      chart: {
        type: "column"
      },
      title: {
        text: "Extra Run Conceded By Each Team"
      },
      subtitle: {
        text:
          'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
          }
      },
      yAxis: {
        min: 0,
        title: {
          text: "Extra-Run"
        },
      },
      series: [
        {
          name: "Years",
          data: seriesData
        }
      ]
    });
  }
  