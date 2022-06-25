displayResult=(result)=>{
    console.log(result)
}



large2num=(a,b,callbackFn)=>
{
    if(a>b)
    {
        callbackFn(a)
    }
    else
    {
        callbackFn(b)
    
    }
}
    large2num(5,8,displayResult)



