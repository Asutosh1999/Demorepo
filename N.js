alert("hii")
alert("by using while loop")
var n=[10,20,30,40,50]
var i=0
while(i<n.length)
{
    console.log(n[i])
    i++
}
alert("by using for loop")
for(var x=0;x<n.length;x++)
{
    console.log(n[x])
}
alert("by using for of loop")
for (x of n)
{
    console.log(x)
}
alert("by using for each element method")
function xyz(b)
{
    console.log(b)
}
n.forEach(xyz)

