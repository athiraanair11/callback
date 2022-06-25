displayResult=(result)=>{
    console.log(result)
}


checkEvenOrOdd=(num,callbackFn)=>{

    if (num%2==0)

    {
        callbackFn("The num is Even")
    }
    else
    {
        callbackFn("The num is Odd")
    }

}
checkEvenOrOdd(34,displayResult)
