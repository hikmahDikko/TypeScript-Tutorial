// //if we're sort of sure that there exist a link in the anchor html tag we use ! else wrap it in an if else statement when not sure.
// const anchor = document.querySelector('a')!;

// if(anchor){
//     console.log(anchor.href)
// }
// console.log(anchor.href)

import {Invoice} from './classes/invoice.js'
import {Payment} from './classes/payment.js'
import {HasFormatter} from './interfaces/hasFormatter.js'
import { ListTemplate } from './classes/listTemplate.js';

// let docOne : hasFormatter;
// let docTwo : hasFormatter;

// docOne = new Invoice("Hikmah", "item watch", 300);
// docTwo = new Payment("Hikmah", "plumbing work", 600);

// let docs : hasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);


// let invoices : Invoice[] = []


//List template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul)

//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;

//console.log(form.children);

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber]

    let doc: HasFormatter;
    if(type.value === "invoice") {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end')
})


const addUId = <T extends object>(obj : T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne =  addUId({name: "hikmah", age : 10})
//let docTwo =  addUId("hikmah")
console.log(docOne.name);

//Enum
enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}

//Generic
interface Resource<T> {
    uid : number;
    resourceName : ResourceType;
    data : T;
}

const docThree : Resource <object> = {
    uid : 10,
    resourceName : ResourceType.BOOK,
    data : {name : "hikmat"},
} 

console.log(docThree);


//interface
interface isPerson {
    name : string,
    age : number,
    speak (a : string) : void;
    spend (a : number) : number;
}

const me : isPerson = {
    name : 'hikmah',
    age : 30,
    speak (a : string) : void {
        console.log(a)
    },
    spend (a : number) : number {
        console.log("I spent " + a)
        return a
    }
}

const greetPerson = (person : isPerson) => {
    console.log("Hello ", person.name)
}

console.log(me);
greetPerson(me);

//Tuples

let arr = ['ryu', 34, true];
arr[0] = false;
arr[1] = 'ret';
arr[2] = 4;
arr = [34, true, "wert"];

let tup: [string, number, boolean] = ["sdf", 34, true];
tup[2] = false
