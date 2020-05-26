const fs = require("fs");
const csv = require("csvtojson");
const highestWicket = require("./func/highestWicket");

const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data1.json";

function main() {
  csv()
    .fromFile(DELIVERIES_FILE_PATH)
    .then(deliveries => {
      const result=highestWicket(deliveries);
      savehighestWicket(result);
    });
}

function savehighestWicket(result) {
  const jsonData = {
    highestWicket: result
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

main();
