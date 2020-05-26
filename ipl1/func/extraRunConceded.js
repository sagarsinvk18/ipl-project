function extraRunConceded(matches,deliveries) {
    const result = {
        "Royal Challengers Bangalore":0,
        "Sunrisers Hyderabad":0,
        "Mumbai Indians": 0,
        "Rising Pune Supergiants": 0,
        "Gujarat Lions": 0,
        "Delhi Daredevils": 0,
        "Kolkata Knight Riders": 0,
        "Kings XI Punjab": 0
    };
    for (let match of matches) {
        const season = match.season;
        if(season=='2016')
        {
            for(let delivery of deliveries)
            {
              if(delivery.match_id==match.id)
               {
                    const bowling_team=delivery.bowling_team;
                    switch(bowling_team)
                    {
                        case "Royal Challengers Bangalore": result[bowling_team]+=parseInt(delivery.extra_runs)
                                                     break;
                        case "Sunrisers Hyderabad": result[bowling_team]+=parseInt(delivery.extra_runs);
                                             break;    
                        case "Mumbai Indians": result[bowling_team]+=parseInt(delivery.extra_runs);
                                        break;
                        case "Rising Pune Supergiants": result[bowling_team]+=parseInt(delivery.extra_runs);
                                                break;
                        case "Gujarat Lions": result[bowling_team]+=parseInt(delivery.extra_runs);
                                        break;
                        case "Delhi Daredevils": result[bowling_team]+=parseInt(delivery.extra_runs);
                                            break;
                        case "Kolkata Knight Riders": result[bowling_team]+=parseInt(delivery.extra_runs);
                                                break;
                        case "Kings XI Punjab": result[bowling_team]+=parseInt(delivery.extra_runs);
                                            break;
                    }
                }
            }
        }
    }
    console.log(result);
    return result;
  }
  module.exports = extraRunConceded;