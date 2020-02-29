// const data = [
//     {
//         id: 1,
//         name: 'Noman',
//         father: 'Ishaq',
//         classs: 12,
//         done: true
//     },
//     {
//         id: 2,
//         name: 'Tahir',
//         father: 'Ishaq',
//         classs: 10,
//         done: true

//     },
//     {
//         id: 3,
//         name: 'Hamza',
//         father: 'Tahir',
//         classs: 0,
//         done: false
//     }
// ];

// for (let todo of data) {
//     console.log(todo.id);
// }

// for (let i = 0; i< data.length; i++) {
//     console.log(data[i].name);
// }

// data.forEach((tudo)=>console.log(tudo.name));


// let text = data.filter((te)=>{
//     return te.done == true;
// }).map((te)=>{
//     return te.name;
// })
// console.log(text);


// let text = data.filter((te)=>{
//     return te.done == true;
// });
// console.log(text);



// let color = prompt("Enter Color Name");
// let res = color == 'red' ? 'true' : 'false';
// switch (res) {
//     case 
//     'true':
//     console.log('color is red')
//         break;

//         case
//         'false':
//         console.log('color not red')
//             break;
    
//         default :
//         console.log('color not red');
//         break;
// }

// console.log(res);

// function Person(name,fname,dob) {
//     this.name = name;
//     this.fname = fname;
//     this.dob = new Date(dob);
//     this.fullname = function () {
//     return `${this.name}  ${this.fname}`;
//     }
// }
// Person.prototype.bithmonth = function () {
//     return this.dob.getFullYear();
// }
// // Person.prototype.fullname = function () {
// //     return `${this.name}  ${this.fname}`;
// // }
// let Person1 = new  Person('Noman','ishaq','2000');
// console.log(Person1);
// let Person2 = new  Person('ali','ishaq','2000');
// console.log(Person2);
// console.log(Person2.bithmonth());

// class Person{
//     constructor(name,fname,dob){
//         this.name = name;
//         this.fname = fname;
//         this.dob = new Date(dob);
//     }

// }

// let member1 = new Person("Noman","Ishaq",200)

// console.log(member1);




let txt = document.querySelector('#txt');
let btn = document.querySelector('#btn');
let form = document.querySelector('form');
let msg = document.querySelector('#error_massge');
let ul = document.querySelector('#ul');
btn.addEventListener('click',onsubmi); 

function onsubmi(e) {
    e.preventDefault();
    // e.run();
if (txt.value === '' ) {
    msg.classList.add("error");
    msg.innerHTML= 'please write some thing..';
    setTimeout(()=>msg.remove(),1000);
}
else if (txt.value === '' ) {
    msg.classList.add("error");
    msg.innerHTML= 'please write some thing..';
    setTimeout(()=>msg.remove(),1000);
}
else{
   const li = document.createElement('li');
   li.appendChild(document.createTextNode(`${txt.value}`));
   ul.appendChild(li);

   txt.value = '';
}
    
}