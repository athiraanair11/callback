displayResult=(result)=>{
    console.log(result)
}



small2num=(a,b,callbackFn)=>
{
    if(a<b)
    {
        callbackFn(a)
    }
    else
    {
        callbackFn(b)
    
    }
}
    small2num(5,8,displayResult)



