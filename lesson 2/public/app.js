// //if we're sort of sure that there exist a link in the anchor html tag we use ! else wrap it in an if else statement when not sure.
// const anchor = document.querySelector('a')!;
// if(anchor){
//     console.log(anchor.href)
// }
// console.log(anchor.href)
import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payment.js';
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
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
//console.log(form.children);
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
const addUId = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUId({ name: "hikmah", age: 10 });
//let docTwo =  addUId("hikmah")
console.log(docOne.name);
//Enum
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docThree = {
    uid: 10,
    resourceName: ResourceType.BOOK,
    data: { name: "hikmat" },
};
console.log(docThree);
const me = {
    name: 'hikmah',
    age: 30,
    speak(a) {
        console.log(a);
    },
    spend(a) {
        console.log("I spent " + a);
        return a;
    }
};
const greetPerson = (person) => {
    console.log("Hello ", person.name);
};
console.log(me);
greetPerson(me);
//Tuples
let arr = ['ryu', 34, true];
arr[0] = false;
arr[1] = 'ret';
arr[2] = 4;
arr = [34, true, "wert"];
let tup = ["sdf", 34, true];
tup[2] = false;
