function matchesPlayedPerYear(matches) {
  const result = {};
  for (let match of matches) {
    const season = match.season;
    if (result[season]) {
      //console.log(result[season]);
    } else {
      result[season] = 1;
      console.log(result);
    }
  }
  return result;
}

module.exports = matchesPlayedPerYear;
