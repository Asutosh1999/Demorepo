class A
{
    xyz(p)
    {
        console.log("first")
    }
    xyz(p,q)
    {
        console.log("second")
    }
}
let obj=new A()
obj.xyz(10,20,40)