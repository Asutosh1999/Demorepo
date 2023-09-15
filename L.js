function show(name1="xyz")
{
    alert("welcome "+name1+" to my webpage")
    console.log("welcome "+name1+" to my webpage")
}
function xyz(a,b){
    return a*b
}
function prime(n)
{
    var count=0
    for(var p=1;p<=n;p++)
    {
        if (n%p==0)
        {
            count++
        }
    }
    if (count==2)
    {
        return true
    }
    else{
        return false
    }
}

x=Number(prompt("enter your number :"))
if (prime(x))
{
    alert("prime number")
}
else{
    alert("not prime number")
}
