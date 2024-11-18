//******** * 1.4*********//
let friends:string[] = ['a','b','c']


// tuple
let a:[number,number, string,boolean] = [1,3,'a',true]





//******** * 1.5*********//
const user:{
    fName:string;
    lName:string;
    mName?:string   //optional type
} = {
    fName:'riaz',
    lName:'shahman'
}






//******** * 1.6*********//
function add(a:number,b:number):number {
    return a+b
}

add(2,3)





//arrow function

const difference = (c:number, d:number):number => c-d




//object ---> function ----> method

const pUser = {
    name:'a',
    balance: 0,
    addBalance(balance:number):string {
        return `My new balance is ${this.balance} + ${balance}`
    }
}
// console.log(pUser.addBalance);



// for array
const num : number[] = [1,2,3,4]
const newArray:number[] = num.map((e:number):number => e*e)






//******** * 1.7*********//

//SPREAD OPERATOR for ARRAY

const bros1:string[] = ['ab','cd','ed']

const bros2:string[] = [...bros1,'ef','ge','fh'] //1ST WAY


const bros3:string[] = ['t','f','c']
bros1.push(...bros3) //2ND WAY


//SPREAD OPERATOR for OBJ           
const b = {
    name:'riaz',
    age: 24
}

const c = {
    name:"sr",
    age:25
}

const d = {
    ...a,
    ...b
}



// REST OPERATOR


const greetFriends = (...frnd:string[]) => {
    // console.log(`hi ${frnd}`);

    frnd.forEach((fr:string) => console.log(fr))
}




//******** * 1.8*********//
// Destructuring in typescript


const e = {
    id: 23,
    name: {
         f:'shahman',
         m:"",
         l:'riaz'
    },
    contact:'017'
}

//l is changed to lastName, here type cant be assigned
const {contact, name: {l: lastName}} = e


const myFriends = ['a','b','c','d','f','g']

const [, , bestF, ...restFriend] = myFriends








//******** * 1.9*********//
//Type alias


type Student = {
    name:string;
    age:number;
    address:string
}


const student:Student = {
    name: 'sri',
    age: 23,
    address: 'sf'
}



type Add1 = (num3:number,num4:number) => number

const add1:Add1 = (num3, num4) => num3+num4








//******** * 1.10*********//
// Union 

type FrontendDev = 'fakibaz' |"juniorDev"
const newDeveloper:FrontendDev = 'juniorDev'


type BackendDev = 'django' | 'node'

type FullS = FrontendDev | BackendDev


//Intersection types

type FullStack = FrontendDev & BackendDev


type FrontD = {
    skills: string[];
    designation1:'Frontend Developer'
}


type BackD = {
    skills: string[];
    designation2:'Backend Developer'
}

type FullD = FrontD & BackD

const fullStackDeveloper:FullD = {
    skills : ['html'],
    designation1: 'Frontend Developer',
    designation2: 'Backend Developer'
}





//******** * 1.11*********//
//Ternary, optional chaining &

const age: number = 15
if(age>=18) {
    // console.log('adult');
} else {
    // console.log('not adult');
}


const isAdult = age>= 18 ? 'adult' : 'not adult'



//nullish coalescing operator:?? it will work for only null and undefined.

const isAuthenticated = null

const result1 = isAuthenticated ?? 'Guest'


const isAuthenticated2 = ''
const result2 = isAuthenticated2? isAuthenticated2:'Guest'



type User5 = {
    name:string;
    address: {
        city:string;
        presentAdd:string;
        permanentAdd?:string
    }
}

const user5:User5 = {
    name:'r',
    address: {
        city:'Dhaka',
        presentAdd:'puran Dhaka'
    }
}

const permanentAddress = user5?.address?.permanentAdd??"No permanent address"

// console.log({permanentAddress});






//******** * 1.12*********//

// nullable type

const searchName = (v:string | null) => {
    if(v) {
        console.log('searching');
    } else {
        console.log("NOthing");
    }
}

// searchName(null)



// UNKNOWN tyPE
const getSpeedInMeterPerSecond = (v:unknown) => {
    if(typeof v === 'number') {
        console.log(v*100);
    }
}



// NEVER
const  throwError = (msg:string):never => {
    throw new Error(msg)
}


throwError('m')