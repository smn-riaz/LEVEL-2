export interface IUser {
    name:string,
    email:string
    age:number
    photo?:string | null
    role:string
    status: "user" | "admin"
    userStatus:"active" | "inactive"
}