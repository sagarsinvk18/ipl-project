const fs = require("fs");
const csv = require("csvtojson");
const economy = require("./func/economy");
const MATCHES_FILE_PATH="./csv_data/matches.csv";
const DELIVERIES_FILE_PATH="./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH= "./public/data1.json";
function main()
{
    csv()
        .fromFile(MATCHES_FILE_PATH)
        .then(matches => {
          csv()
            .fromFile(DELIVERIES_FILE_PATH)
            .then(deliveries => {
                //matchesPlayedPerYear(matches,deliveries);
                let result = economy(matches,deliveries);
                saveMatchesPlayedPerYear(result);
                //console.log(deliveries.slice(0,2));
                //console.log(matches.slice(0,2));
            });
          //console.log(deliveries.slice(0,2));
          //matchesPlayedPerYear(matches.slice(0,75));
          //let result = matchesPlayedPerYear(matches);
          //saveMatchesPlayedPerYear(result);
});
}

function saveMatchesPlayedPerYear(result) {
    const jsonData = {
      economy: result
    };
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
      if (err) {
        console.error(err);
      }
    });
  }

main();