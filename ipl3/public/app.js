function fetchAndVisualizeData() {
    fetch("./data1.json")
      .then(r => r.json())
      .then(visualizeData);
  }
  
  fetchAndVisualizeData();
  function visualizeData(data) {
    visualizeMatchesPlayedPerYear(data.wonMatchPerTeam);
    return;
  }
  
  function visualizeMatchesPlayedPerYear(wonMatchPerTeam) {
    const seriesData = [];
    const obj={};
    const years=[]
    for (let year in wonMatchPerTeam) {
      years.push(year);
      for(let team in wonMatchPerTeam[year])
      {
        if(obj.hasOwnProperty(team))
        {
          obj[team].push(wonMatchPerTeam[year][team]);
        }
        else
        {
          obj[team]=[]
          obj[team].push(wonMatchPerTeam[year][team]);
        }
      }
    }
    let a=Object.keys(obj);
    let j=0;
    for (let year in wonMatchPerTeam)
    {
      for(let i=0;i<a.length;i++)
      {
        if(a[i] in wonMatchPerTeam[year])
          continue;
        else
          obj[a[i]].splice(j,0,0);
      }
      j++;
    }
    /*for(let i in obj)
    {
      const ob={};
      ob[i]=obj[i];
      seriesData.push(ob);
    }*/
    let i=0;
    for(let team in obj)
    {
      seriesData[i]={};
      if(seriesData[i].hasOwnProperty("name")==false)
        seriesData[i]["name"]=team;
      seriesData[i]["data"]=obj[team];
      i++;
    }
    console.log(seriesData);
    //console.log(obj);
    //console.log(years)
  
    Highcharts.chart("wonmatch", {
      chart: {
          type: 'column'
      },
      title: {
          text: 'Match Won By Each Team In A Year'
      },
      subtitle: {
          text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
          categories: years,
          crosshair: true
      },
      yAxis: {
          min: 0,
          title: {
              text: 'no. of matches won'
          }
      },
      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
      },
      series:seriesData
  });
}