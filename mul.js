displayResult=(result)=>{
    console.log(result)
}


mul2num=(a,b,callbackFn)=>{
    let c=a*b
    callbackFn(c)
}

mul2num(12,6,displayResult)