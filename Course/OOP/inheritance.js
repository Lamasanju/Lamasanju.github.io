class Car{

    setName(name){
        this.name = name;
    }

    startEngine() {
        console.log('Engine started for' + ' ' +this.name);
    }
    
    stopEngine() {
            console.log('Engine stopped for'+ ' ' +this.name);
        }
    
}

class Toyota extends Car{

    topSpeed(speed){
        console.log('Top speed for' + ' '+this.name+' is '+speed);
    }
}

let myCar = new Toyota();
myCar.setName('Camry');
// myCar.startEngine();
myCar.startEngine();
myCar.stopEngine();
myCar.topSpeed(200);


// class Student{
//     constructor(name){
//         this.name = name;
//     }
// }

// var student1 = new Student("Ajay");
// console.log(student1);

// let student2 = {name:"Shyam"};
// console.log(student2);