class Employee{


Employee1(name,age,basicsal)
{
    this.name=name
    this.age=age
    this.basicsal=basicsal
    let bonus=3000
    let cfinalsal=function(){
        final=basicsal+bonus
        console.log("final salary: "+final)
    }
    this.displayinfo=function(){
        console.log("name :"+this.name+"  "+"age :"+this.age)
        cfinalsal()
    }
}
}

let emp1=new Employee("asu",23,2000)
emp1.displayinfo()


