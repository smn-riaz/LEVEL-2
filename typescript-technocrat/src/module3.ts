{
//******** * 3.1  *********//
// OOP - CLASS
class Animal {
    public name:string;
    public species: string;
    public sound:string


    constructor (name:string,species:string,  sound:string) {
        this.name = name
        this.species = species
        this.sound =sound
    }


    makeSound() {
        // console.log(`the ${this.name} says ${this.sound}`);
    }
}


const dog = new Animal('German Shepard', "dog","ghew")
dog.makeSound()



 // USING PARAMETER PROPERTIES : NO NEED TO DEFINE & INITIALIZE


class Animal2 {

    constructor (public name:string,public species:string, public sound:string) {

    }


    makeSound() {
        console.log(`the ${this.name} says ${this.sound}`);
    }
}


const dog2 = new Animal('German Shepard', "dog","ghew")
dog.makeSound()









//******** * 3.2 *********//
//INHERITENCE

class Person {
    name:string;
    age:number;
    address:string



    constructor (name:string, age:number, address:string) {
        this.name = name;
        this.age = age;
        this.address = address
    }


    getSleep(numOfHour:number) {
        console.log(`${this.name} will sleep for ${numOfHour}`);
    }
}





class Student extends Person{

    constructor (name:string, age:number, address:string) {
       super(name,age,address)
    }


}


const student1 = new Student("x",2,"dhaka")




class Teacher extends Person {
   
    
    designation:string


    constructor (name:string, age:number, address:string,designation:string) {
       super(name,age,address)
        this.designation = designation
    }



    takeClass(numOfClass: number) {
        console.log(`${this.name} will take ${numOfClass}`);
    }


}

const teacher = new Teacher("x",2,"dhaka",'Professor')











//******** * 3.2 *********//
//Type guard using typeof & in
type Alpahnumeric = string | number

const add  = (par1:Alpahnumeric, par2: Alpahnumeric):Alpahnumeric => {
    if(typeof par1 === 'number' && typeof par2 ==='number') {
        return par1 + par2
    } else {
        return par1.toString()  + par2.toString()
    }
}

add("2",'3')






//******** * 3.3 *********//
// IN GUARD
type NormalUser = {
    name:string
}

type AdminUser = {
    name:string;
    role:"admin"
}


const getUser = (user:NormalUser | AdminUser) => {
   if('role' in user) {
    // console.log(`${user.name} and ${user.role}`);
   } else {
    // console.log(`${user.name}`)
   }
}

getUser({name:"uu",role:'admin'})













//******** * 3.4 *********//
// Type guard using instance of
class Animal3 {
    public name:string;
    public species: string;



    constructor (name:string,species:string,  ) {
        this.name = name
        this.species = species

    }


    makeSound() {
        // console.log(`the ${this.name} `);
    }
}

class Dog3 extends Animal3 {
    constructor(name:string,species:string) {
        super (name,species)
    }

    makeMew() {
        console.log("I'm mewing");
    }
}


const dog











}