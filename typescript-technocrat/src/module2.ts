{

//******** * 2.1*********//
// TYPE ASSERTION : we can set the type last part easily like result1  and result2


    let anything : any;
    anything = "Next Level Web Development";

    anything = 222;

    // (anything as number)


    const kgtogm = (v:string | number): string | number | undefined => {
        if(typeof v ==='string') {
            const convertedValue = parseFloat(v)
            return `The converted Value is ${convertedValue}`
        }

        if(typeof v === 'number') {
            return v*1000
        }
    }

    const result1 = kgtogm(1000) as string
    const result2 = kgtogm("1000") as number







//******** * 2.2*********//

// INTERFACE : only string / single line data can't be assigned using it

type RollNumber = number

interface User1 {
    name:string;
    age:number
}


const user:User1 = {
    name:'s',
    age:2
}

// TYPE CAN BE EXTENDED 
type UserWithRole1  = User1 & {role:string}


const user2:UserWithRole1 = {
    name:'s',
    age:2,
    role:"frontend"
}



// INTERFACE CAN BE EXTENDED
interface UserWithRole2 extends User1 {
    role:string
}




// JS ---> OBJ, ARRAY --> OBJ FUNCTION -->OBJ
type Roll1 = number[]

const rollNumber:Roll1 = [1,2,3]


interface Roll2 {
    [index:number]:number
}



// INTERFACE IN FUNCTION

interface Add  {
    (num1:number,num2:number): number
}

const add:Add = (num1, num2) => num1+num2





//******** * 2.3*********//

//GENERIC type

const numArray:Array<number> = [1,2,3]

// or


type NumArray = Array<number>


const numArray2:NumArray = [1,2,3]



type GenericArray<T> = Array<T>
const numArray3:GenericArray<number> = [1,2,3]


// GENERIC TUPLE
const manush:[string,...number[]] = [
    'mrx',1,2
]


type GenericTuple<X,Y> = [X,Y]

const manush1 : GenericTuple<string,string> = ['x','y']


const userWithId:GenericTuple<number,{name:string;email:string}> = [123, {name: "riaz",email:"h@gmail.com"}]





//******** * 2.4*********//
// Generic with Interface

interface Developer<T,X=null> {
    name:string;
    computer:{
        brand:string;
        model:string;
        releaseYear:number
    }
    smartW: T
    bike?: X
}


const poorDev:Developer<{brand:string,model:string}> = {
    name:'riaz',
    computer:{
        brand:"s",
        model:'ky',
        releaseYear:2023
    },
    smartW: {
        brand: 'sd',
        model:'e'
    }
}


type RichDev = {brand:string,model:string}

interface BikeInfo {
    brand:string;
    model:string;
    year:number;
}

const richDev:Developer<RichDev> = {
    name:'riaz',
    computer:{
        brand:"s",
        model:'ky',
        releaseYear:2023
    },
    smartW: {
        brand: 'sd',
        model:'e'
    }
}







//******** * 2.5 *********//
//function with generics

const createArray = (param: string) : string[] => {
    return [param]
}
const createArrayWithGeneric = <T>(param: T) : T[] => {
    return [param]
}


const res1 = createArray('bd')
const res2 = createArrayWithGeneric<boolean>(true)
const res3 = createArrayWithGeneric<{name:string; id:number}>({id:23,name:'riaz'})



//function with generics tuple

const createArrayWithTuple = <T,Q>(param1:T, param2:Q):[T,Q] => {
    return[param1,param2]
}

const res4 = createArrayWithTuple<string,number>("hello",45)






//******** * 2.6 *********//
//Constraints in typescript

const addCourseToStudent = <T extends {name:string,id:number}>(student:T) => {
    const course = 'Next';
    return {
        ...student,
        course
    }
}


const student5 = addCourseToStudent ({id:22, name:'er'})





//******** * 2.7 *********//
// Constraint using key of


type Vehicle = {
    bike:string;
    car:string;
    ship:string
}


type Owner = "bike" | "car" | "ship" // manually


type Owner2 = keyof Vehicle



const getPropertyValue = <X,Y extends keyof X> (obj:X, key:Y) => {
    return obj[key]
}

const car = {
    model:'Toyota 100',
    year: 200
}

const res5 = getPropertyValue(car,"year")






//******** * 2.8 *********//
// Asynchronous typescript
const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data:string = 'something'
        if(data) {
            resolve(data)
        } else {
            reject('Failed to load data')
        }
    })
}

const showData = async() :Promise<string> => {
    const data = await createPromise()
    return data
}

showData()


type Todo = {
    id:number;
    userId:number;
    title:string;
    completed:boolean
}

const getTodo = async(): Promise<Todo> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    const data = await response.json()
    return data
}

getTodo()





//******** * 2.9 *********//
// Conditional types , in this way the types value can be set
type a1 = null
type a2 = undefined
type a3 = number

type x = a1 extends null ? true :false


type y = a3 extends null ? true : a2 extends undefined ? undefined: any







type sheikh = {
    bike:string;
    car:string;
    ship:string
}

type CheckVehicle<T> = T extends "bike" | "car" |"ship" ? true : false


type HasBike = CheckVehicle<"car">



type sheikh2 = {
    bike:string;
    car:string;
    ship:string
    plane:string
}

type CheckVehicle2<T> = T extends keyof sheikh2 ? true : false


type HasPlance= CheckVehicle2<"plane">








//******** * 2.10 *********//
//MAPPED TYPES

const arrofNUmbers: number[] = [1,2,3]

// const arrOfStrings: string[] = ['1','2','3']


const arrOfStrings:string[] = arrofNUmbers.map(number => number.toString())


type AreaNumber = {
    height: number;
    width:number
}

type Height = AreaNumber['height'] // look up type



type AreaString<T> = {
    [key in keyof T] : T[key]
}


const area1: AreaString<{height:string; width:number}> = {
 height: "100",
 width:100
}


console.log(area1);












//******** * 2.11 *********//
// Utility types

//PICK
 type Person = {
    name:string;
    age:number;
    email?:string;
    contactNo:string
 }


 type Name = Pick<Person, "name">
 type NameAge = Pick<Person, "name"|"age">



 // OMIT  -- opposite of Pick
 type ContactInfo = Omit<Person,"name"|"age">



 // REQUIRED -- not optional ?
 type PersonRequired = Required<Person>



 // PARTIAL
 type PersonPertial = Partial<Person>



 //READONLY
type ReadOnlyPerson = Readonly<Person>



//RECORD
type MyObj = Record<string,string>
const obj1 : MyObj = {
    a:"a",
    b:'b',
    c:'c'
}


const EmptyObj:Record<string,unknown> = {}








}