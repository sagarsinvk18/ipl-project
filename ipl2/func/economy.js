function economy(matches,deliveries)
{
    result={};
    let bowler;
    let mat=matches.filter(a=>a.season=='2015');
    for(let match of mat)
    {
        for(let delivery of deliveries)
        {
            if(match.id==delivery.match_id)
            {
                let bowler=delivery.bowler;
                if(result[bowler])
                {
                    if(delivery.ball=='1')
                        result[bowler][0]+=1
                    result[bowler][1]+=parseInt(delivery.total_runs);
                }
                else{
                    result[bowler]=[1,parseInt(delivery.total_runs)];
                }
            }
        }
    }
    for(let i in result)
    {
        result[i]=parseFloat((result[i][1]/result[i][0]).toFixed(2));
    }
    var arr=sortProperties(result);
    const reslt={};
    for(let i=0;i<10;i++)
        reslt[arr[i][0]]=arr[i][1];
    return reslt;
    
}

module.exports = economy;

function sortProperties(obj)
{
  // convert object into array
	var sortable=[];
	for(var key in obj)
		if(obj.hasOwnProperty(key))
			sortable.push([key, obj[key]]); 
	
	sortable.sort((a, b)=>
	{
	  return a[1]-b[1]; 
	});
	return sortable;
}

/*
for(let match of mat)
    {
        let run=0,i=1;
        for(let delivery of deliveries)
        {
            if(match.id==delivery.match_id)
            {   
                if(delivery.over==i)
                {
                        run+=delivery.total_runs;
                        bowler=delivery.bowler;
                }
                else{
                    i=delivery.over;
                    if(result.hasOwnProperty(bowler))
                    {
                        result[bowler][0]+=1;
                        result[bowler][1]+=run;
                    }
                    else
                    {
                        result[bowler]=[1,run];
                    }
                    run=delivery.total_runs;
                }
            }
        }
    }
    for(let i in result)
    {
        result[i][1]/=result[i][0]
    }
*/