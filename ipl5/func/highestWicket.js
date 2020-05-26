function highestWicket(deliveries)
{
    const result={};
    for(let delivery of deliveries)
    {
        const bowler=delivery.bowler;
        //console.log(bowler)
        const dismissed=delivery.player_dismissed;
        if(dismissed && delivery.dismissal_kind!="run out")
        {
            //console.log("hi");
            if(result.hasOwnProperty(bowler))
            {
                result[bowler]+=1;
            }
            else{
                result[bowler]=1;
            }
        }
    }
    var arr=sortProperties(result);
    const reslt={};
    for(let i=0;i<10;i++)
        reslt[arr[i][0]]=arr[i][1];
    return reslt;
}

module.exports=highestWicket;

function sortProperties(obj)
{
  // convert object into array
	var sortable=[];
	for(var key in obj)
		if(obj.hasOwnProperty(key))
			sortable.push([key, obj[key]]); 
	
	sortable.sort((a, b)=>
	{
	  return b[1]-a[1]; 
	});
	return sortable;
}