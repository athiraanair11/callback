displayResult=(result)=>{
    console.log(result)
}


div2num=(a,b,callbackFn)=>{
    let c=a/b
    callbackFn(c)
}

div2num(12,6,displayResult)