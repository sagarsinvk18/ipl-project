const fs = require("fs");
const csv = require("csvtojson");
const wonMatchPerTeam = require("./func/wonMatchPerTeam");
const MATCHES_FILE_PATH="./csv_data/matches.csv";
const JSON_OUTPUT_FILE_PATH= "./public/data1.json";
function main()
{
    csv()
        .fromFile(MATCHES_FILE_PATH)
        .then(matches => {
          let result = wonMatchPerTeam(matches);
          //let result = matchesPlayedPerYear(matches);
          saveMatchesPlayedPerYear(result);
});
}

function saveMatchesPlayedPerYear(result) {
    const jsonData = {
      wonMatchPerTeam: result
    };
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
      if (err) {
        console.error(err);
      }
    });
  }

main();