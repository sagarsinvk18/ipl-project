function fetchAndVisualizeData() {
    fetch("./data1.json")
      .then(r => r.json())
      .then(visualizeData);
  }
  
  fetchAndVisualizeData();
  function visualizeData(data) {
    visualizeMatchesPlayedPerYear(data.highestWicket);
    return;
  }
  
  function visualizeMatchesPlayedPerYear(highestWicket) {
    const seriesData = [];
    for(let bowler in highestWicket)
    {
      seriesData.push([bowler,highestWicket[bowler]]);
    }
  
    Highcharts.chart("highestWicket", {
      chart: {
        type: "column"
      },
      title: {
        text: "top 10 highest wicket taker bowler"
      },
      subtitle: {
        text:
          'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
        type: "category"
      },
      yAxis: {
        min: 0,
        title: {
          text: "wickets"
        }
      },
      series: [
        {
          name: "Top Bowlers",
          data: seriesData
        }
      ]
    });
  }