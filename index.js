function generator() {
   
var who = ['The cat','My grandma','His bunny','My bird'];
var  what = ['my homework', 'the keys', 'the car'];
var when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];


     
        

        var msg =
          who[Math.floor(Math.random() * who.length)] +
          " " +
          what[Math.floor(Math.random() * what.length)] +
          " " +
          when[Math.floor(Math.random() * when.length)];
          
        document.getElementById("excuse").innerHTML = msg;
       
      


}