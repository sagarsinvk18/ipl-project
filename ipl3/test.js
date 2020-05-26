const a=[1,2,5,7,9,11];
const b={1:'s',3:'4'}
for(let i=0;i<a.length;i++)
{
    if(a[i] in b)
    {
        console.log("true");
    }
}