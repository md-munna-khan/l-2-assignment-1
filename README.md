## Blog 1
##  What is the use of the keyof keyword in TypeScript?

the keyof keyword as like work union of all properties names.its very helpful for creating type safe access to object properties

 ## use case========
keyof ensure that you can  only  access valid  key of objects
## Example
type User = {
  name: string;
  age: number;
  email: string;
};

// keyof User gives: "name" | "age" | "email"
type UserKeys = keyof User;

const key: UserKeys = "name"; //  Valid
// const invalidKey: UserKeys = "address"; //  Error
# summary
The keyof keyword lets you extract the property names (keys) of a type as a union of string literals. By using keyof, you ensure that you're only accessing valid object keys, which helps prevent errors and makes your code more type-safe.



## Blog 2 
## Provide an example of using union and intersection types in TypeScript.
====================== type union=============
A union type allows a variable to hold values of multiple types. You can specify a union type by separating the types with the | (pipe) operator.

## example===========

// union types (|)

type FrontendDeveloper= 'fakibazDev'| "goodDev"
type FullStackDeveloper= 'Mern Dev'| "goodDev"
type Developer = FrontendDeveloper | FullStackDeveloper

const newDeveloper:FrontendDeveloper= 'fakibazDev'

type User={
    name:string;
    email?:string;
    gender:"male"|"female";
    bloodGroup:'A+'|"B+"|"AB+"
}
//

const person:User={
name:"munna",
gender:"male",
bloodGroup:"B+"
}
## type  Intersection ================

An intersection type is used when you want to combine multiple types into one. A value of an intersection type must satisfy all the types involved. You use the & (ampersand) operator to define an intersection type.

## intersection example ===============

type FrontendDeveloper={
    skills:string[];
    roll1:"Frontend Developer"

}
type BackendDeveloper={
    skills:string[];
    roll2:"Backend Developer"

}

type FullStackDeveloper= FrontendDeveloper & BackendDeveloper

const fullStackDeveloper:FullStackDeveloper={
    skills:["html","css","js"],
    roll1:"Frontend Developer",
    roll2:"Backend Developer"
}
