class RailwayR
{
     bookticket(name1,phno,des)
     {
          this.name1=name1
          this.phno=phno
          this.des=des
     }

     display()
     {
          console.log("your name is :"+this.name1+" your phno is :"+this.phno+" your destination is :"+this.des)
     }

     cancel()
     {
          console.log("your ticket is cancelled")
     }
}

let a=new RailwayR()
a.bookticket("asu",1234,"delhi")
a.display()
a.cancel()