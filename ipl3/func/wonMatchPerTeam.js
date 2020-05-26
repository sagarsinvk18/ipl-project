function wonMatchPerTeam(matches)
{
    result={};
    for(let match of matches)
    {
        let season=match.season;
        let winner=match.winner;
        if(result[season])
        {
            if(result[season].hasOwnProperty(winner) && match.result=='normal')
            {
                result[season][winner]+=1;
                //console.log(result[season][winner]);
            }
            else
            {
                if(match.result=='normal')
                    result[season][winner]=1;
                //console.log(result[season][winner]);
            }
        }
        else
        {
            result[season]={}
            if(result[season].hasOwnProperty(winner)==false)
            {
                if(match.result=='normal')
                    result[season][winner]=1;
            }
        }
    }
    //console.log(result);
    return result;
}
module.exports = wonMatchPerTeam;