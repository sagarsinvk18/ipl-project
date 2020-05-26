function fetchAndVisualizeData() {
    fetch("./data1.json")
      .then(r => r.json())
      .then(visualizeData);
  }
  
  fetchAndVisualizeData();
  function visualizeData(data) {
    visualizeMatchesPlayedPerYear(data.economy);
    return;
  }
  
  function visualizeMatchesPlayedPerYear(economy) {
    const seriesData = [];
    for (let year in economy) {
      seriesData.push([year, economy[year]]);
    }
    
    Highcharts.chart("economyrate", {
      chart: {
        type: "column"
      },
      title: {
        text: "Match Won By Each Team"
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
          text: "match won"
        }
      },
      series: [
        {
          name: "data",
          data: seriesData
        }
      ]
    });
  }
  