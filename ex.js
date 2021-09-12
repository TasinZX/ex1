// let login = 0;

// //if else*******

// if (login == 0) {
//   document.write("login");
// } else {
//   document.write("logout");
// }
// let option = login == 1 ? "logout" : "login";

// document.write(option);
// let user;
// user = "abdullah al bin tasin";
// document.write(user ?? "guest user");

// //switch statement**********

// input = 2;

// if (input === 1 || input === "y" || input === "yes") {
//   document.write("continue...");
// } else if (input === 0 || input === "n" || input === "no") {
//   document.write("End...");
// } else {
//   document.write("Wrong input");
// }

// input = 5;

// switch (input) {
//   case 1:
//   case 2:
//   case "y":
//     document.write("continue...");
//     break;
//   case 4:
//   case 5:
//   case "n":
//     document.write("end...");
//     break;
//   default:
//     document.write("wrong input");
// }

// //Do while *******

// let counter = 1;

// while (counter <= 10) {
//   document.write("tasin");
//   // counter = counter + 2;
//   counter++;
// }

// let counter = 1;
// let sum = 0;

// while (counter <= 2200) {
//   if (counter % 2 == 0) {
//     sum = sum + counter;
//   }
//   counter++;
// }
// document.write(sum);

// for loop ********

// for (let counter = 1; counter <= 10; counter++) {
//   document.write("tasin");
// }

// outer: for (let counter = 1; counter <= 10; counter++) {
//   document.write(counter);
//   document.write("<br>");
//   for (let counter2 = 1; counter2 < 3; counter2++) {
//     if (counter == 3) {
//       break outer;
//     }
//     document.write("tasin");
//     document.write("<br>");
//   }
// }

// //alert confirm & prompt *******

// alert("welcome");

// let age = prompt("alert your age", 18);

// if (age != null) {
//   document.write(`your age is ${age}`);
// } else {
//   document.write("age field was blank");
// }

// let response = confirm("Are you sure, you want to delete?");
// if (response) {
//   document.write("deleted");
// } else {
//   document.write("not deleted");
// }

// //type of********

// let ty = 2;
// let ty = "type";
// let ty = true;
// alert(typeof ty);

// let type = true;
// console.log(typeof type);

// let newtype = Number(type);
// console.log(typeof newtype);
// console.log(newtype);

// let new1 = 0;

// console.log(typeof new1);

// let new2 = Boolean(new1);
// console.log(typeof new2);
// console.log(new2);

// // string manipulation******

// let str = "abdullah al tasin";
// console.log(str[3]);
// let s = "tasin";
// let m = "abdullah";

// console.log(m + " " + s);

// let names = "abdullah tasin";
// if ("abdullah tasin" == names) {
//   console.log("equal");
// } else {
//   console.log("not equal");
// }

// let str = "abdullah";
// let str2 = "al";
// let str3 = "tasin";

// let mixed = str.concat(str2, str3);
// console.log(mixed);

// let str = "hello this is tasin here. I am a good person and humble man";
// let subs = str.substr(2, 3);
// let subs = str.substring(3,4);
// console.log(subs);

// let str = " this is tasin,he is a stupid man";

// let position = str.indexOf("is", 4);
// let position = str.lastIndexOf("is", 4);

// let match = str.trim();

// console.log(match);
// console.log(str);

// let strm = str.replace("tasin", "abdullah");
// console.log(strm);

// let book = ["last", "math", "science", 23, "bio", "mad", "cow", "fit", "grow"];

// book[1] = "english";
// book.push("bangla");
// book.unshift("science");
// book.pop();
// book.shift();
// book.splice(2, 2);

// document.write(book);
// // document.write("<br>");
// console.log(Array.isArray(book));

// console.log(book[2]);
// console.log(book.length);

// let book = ["last", "math", "science", 23, "bio", "mad", "cow", "fit", "grow"];

// let books = book.join(" ");
// console.log(books);

// let text = "this is a random text";
// let wordarray = text.split(" ");
// wordarray.push("007");

// console.log(wordarray);

// let book = [
//   ["man", "300"],
//   ["woman", "200"],
//   [("boy", "400")],
//   [("girl", "300")],
// ];

// let books = book[1][0];

// console.log(books);

// let book = ["last", "math", "science", 23, "bio", "mad", "cow", "fit", "grow"];

// let books = book.length;

// for (i = 0; i < books; i++) {
//   console.log(`element ${i} is ${book[i]} \n`);
// }

// function multi(num) {
//   for (i = 1; i <= 10; i++) {
//     document.write(`${num} x ${i} = ${num * i}`);
//     document.write("<br>");
//   }

//   document.write("<br><br>");
// }

// multi(2);

// document.write("hello <br>");

// multi(4);

// function add(num1, num2) {
//   document.write(num1 + num2);
// }

// add(5, 6);

// function add() {
//   if (arguments.length == 0) {
//     console.log("unvalid");
//   } else {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//       sum = sum + arguments[i];
//     }
//     console.log(sum);
//   }
// }
// let addition = add;
// addition(22, 3, 3);
// add(5, 6, 3);

// function add(a, b) {
//   return a + b;
// }

// let c = add(5, 6);

// console.log(c);

// function compare(a, b) {
//   if (a > b) {
//     return 1;
//   } else if (b > a) {
//     return -1;
//   } else {
//     return 0;
//   }
// }
// let c = compare(5, 6);

// document.write(c);

// function show() {
//   console.log("hello world !");
// }
// setTimeout(show, 3000);

// (function () {
//   console.log("hello world");
//   alert("hello");
// })();

// let person = {
//   firstname: "Abdulllah",
//   lastname: "Tasin",
// };

// person.height = 5;
// person.middle = "bin";
// person.age = 25;
// person.firstname = "Abdullah al";

// delete person.middle;

// console.log(person);
// console.log("height" in person);

// let person = {
//   firstname: "abdullah al",
//   lastname: "tasin",
// };

// person.age = 21;

// for (let key in person) {
//   // console.log(key);
//   console.log(key + ": " + person[key]);
// }

// let person = {
//   firstname: "Abdullah al",
//   lastname: "Tasin",
//   sayhello() {
//     console.log(`hello i am ${this.firstname}`);
//   },
// };

// person.sayhello();

// let jett = Math.round(4.7);
// let jett = Math.ceil(4.5);
// let jett = Math.floor(4.9);
// let jett = Math.trunc(6.5);
// let jett = Math.pow(2, 3);
// let jett = Math.sqrt(3222);
// let jett = Math.min(5, 23, 235, 2, 1234, 5);
// let jett = Math.max(23, 235, 254, 25);

// console.log(jett);

// let x = Math.floor(Math.random() * 10 + 1);
// console.log(x);

// let x = Math.floor(Math.random() * (25 - 15)) + 15;
// console.log(x);

// let x = new Date(1999, 09, 6);
// console.log(x);

// let x = new Date("october 13,2022 11:12:33");
// let y = new Date();

// if (y > x) {
//   console.log("paste date");
// } else if (x > y) {
//   console.log("future date");
// } else {
//   console.log(today);
// }

// let person = new Object();
// person.name = "abdullah al tasin";
// person.age = 21;

// console.log(person.name);

// let person = {
//   name: "abdullah al tasin",
//   age: 21,

//   //   get getname() {
//   //     return this.name.toUpperCase();
//   //   },
//   set setname(n) {
//     this.name = n.toUpperCase();
//   },
// };

// person.setname = "tasin";
// console.log(person);

// let student = {
//   firstname: "abdullah",
//   lastname: "tasin",
//   age: 21,
//   class: 5,
// };

// function student(first, last, age, cls) {
//   this.firstname = first;
//   this.lastname = last;
//   this.age = age;
//   this.class = cls;
//   this.name = function () {
//     return this.firstname + " " + this.lastname;
//   };
// }

// student.prototype.nationality = "bangladesh";

// let student1 = new student("abdullah", "tasin", 23, 5);

// student1.region = "muslim";
// console.log(student1);

// let user = {
//   id: 1023,
//   email: "abc@gmail.com",
//   personalinfo: {
//     name: "abdullah tasin",
//     age: 21,
//     address: {
//       country: "bangladesh",
//       street: "bandar,narayanganj",
//     },
//   },
// };

// console.log(user);
// console.log(user.personalinfo);

// let person = {
//   name: "abdullah al bin tasin",
//   age: 21,
//   birth: "06/10/1999",
// };

// person.name = "abdullah al tasin";

// console.log(person);

// let person = {
//   name: "abdullah al bin tasin pakna tasin man is so great",
//   age: 21,
//   birth: "06/10/1999",
// };
// person.name = "abdullah al bin tasin";

// console.log(person);

// let fak = {
//   name: "sunny leone",
//   age: 31,
// };

// console.log(fak);

// let colors = ["red", "blue", "white"];
// colors[2] = "black";
// console.log(colors[2]);

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }
// function square(number) {
//   return number * number;
// }

// console.log(square(4));

// let counter = 1;
// let sum = 0;

// while (counter <= 100) {
//   if (counter % 2 == 0) {
//     sum = sum + counter;
//   }
//   counter++;
// }

// function tasin(a, b) {
//   if (a > b) {
//     return a;
//   } else return b;
// }
// console.log(tasin(7, 5));

// function tasin(width, height) {
//   if (width > height) {
//     return "this is a landscape picture";
//   } else return "this is a portrait picture";
// }

// let x = tasin(233, 30);

// console.log(x);

// function tasin(width, height) {
//   return width > height ? "this is landscape" : "this is portrait";
// }

// console.log(tasin(24, 23));

// function tasin(input) {
//   if (typeof input !== "number") return NaN;
//   else return "x";
// }

// console.log(tasin(7));

// const speedlimit = 70;
// const kmp = 5;

// function tasin(speed) {
//   if (speed < speedlimit) console.log("ok");
//   else {
//     let points = Math.floor(speed - speedlimit) / kmp;
//     if (points )
//   }
// }

// function chks(speed) {
//   const speedlimit = 70;
//   const kmp = 5;

//   if (speed < speedlimit + kmp) console.log("ok");
//   else {
//     const points = Math.floor((speed - speedlimit) / kmp);
//     if (points >= 12) console.log("licence canceled");
//     else console.log("points", points);
//   }
// }

// chks(745);

// function checkSpeed(speed) {
//   const speedlimit = 70;
//   const kmp = 5;

//   if (speed < speedlimit + kmp) console.log("ok");
//   else {
//     const points = Math.floor((speed - speedlimit) / kmp);
//     if (points >= 12) console.log("suspended");
//     else console.log("points", points);
//   }
// }

// checkSpeed(72);

// function show(limit) {
//   if (limit % 2 == 0) console.log("even");
//   else console.log("odd");
// }

// show(111);

// function show(limit) {
//   for (let i = 0; i <= limit; i++) {
//     if (i % 2 == 0) console.log(i, "Even");
//     else console.log(i, "Odd");
//   }
// }

// show(32);

// function table(number) {
//   for (let i = 1; i <= 10; i++) {
//     let x = number * i;
//     console.log(`${number} x ${i} = ${x}`);
//   }
// }

// table(2);

// function tasin(number) {
//   for (i = 1; i <= 10; i++) {
//     const x = i * number;
//     console.log(`${number} x ${i} = ${x}`);
//   }
// }

// tasin(3);

// function countTruthy(array) {
//   let count = 0;
//   for (let value of array) {
//     if (value) count++;
//     return count;
//   }
// }

// console.log(countTruthy([23], [25], [234], "f", null, 2, 3));
// const movie = {
//   title: "Money Heist",
//   releaseYear: 2017,
//   rating: 8.4,
//   director: "Alex Pina",
// };

// function show(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "string") console.log(key, ":", obj[key]);
//   }
// }

// show(movie);
// function marks(number) {
//   const f = 59;
//   const d = 69;
//   const c = 79;
//   const b = 89;
//   const a = 100;

//   if (number <= f) console.log("fail");
//   else if (number <= d) {
//     console.log("you're pass");
//   } else if (number <= c) {
//     console.log("you're got c");
//   } else if (number <= b) {
//     console.log("you're got b");
//   } else if (number <= a) {
//     console.log("you're got a");
//   }
// }

// marks(88);

// const marks = [80, 95, 92, 100];
// console.log(grade(marks));

// function grade(marks) {
//   let sum = 0;
//   for (let mark of marks) sum += mark;
//   let average = sum / marks.length;

//   if (average < 60) return "f";
//   if (average < 70) return "d";
//   if (average < 80) return "c";
//   if (average < 90) return "b";
//   return "A";
// }

// const marks = [20, 64, 75, 23];

// function grade(marks) {
//   let sum = 0;
//   for (let mark of marks) {
//     sum += mark;
//     let average = sum / marks.length;

//     if (average < 60) return "F";
//     if (average < 70) return "D";
//     if (average < 80) return "C";
//     if (average < 90) return "B";
//     return "A";
//   }
// }

// console.log(grade(marks));

// function start(rows) {
//   for (let row = 1; row <= rows; row++) {
//     let pattern = "";
//     for (let i = 0; i < row; i++) pattern += "*";
//     console.log(pattern);
//   }
// }

// start(6);

// function start(rows) {
//   for (let row = 1; row <= rows; row++) {
//     let pattern = "";
//     for (let i = 0; i < row; i++) pattern += "*";
//     console.log(pattern);
//   }
// }

// start(7);

// function show(limit) {
//   for (let i = 0; i < limit; i++) {
//     if (i % 2 === 0) console.log("even", i);
//     else console.log("odd", i);
//   }
// }
// show(45);

// const movie = {
//   title: "a",
//   releaseYear: 2018,
//   rating: 5.6,
//   director: "b",
// };

// function show(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "string") console.log(key, obj[key]);
//   }
// }

// show(movie);
// function start(rows) {
//   for (let row = 1; row <= rows; row++) {
//     let pattern = "";
//     for (let i = 0; i < row; i++) pattern += "#";
//     console.log(pattern);
//   }
// }

// start(8);

// function show(limit) {
//   for (let i = 0; i <= limit; i++) {
//     if (i % 2 === 0) console.log(i, "EVEN");
//     else console.log(i, "ODD");
//   }
// }

// show(23);
// function max(a, b) {
//   if (a < b) console.log(b);
//   else console.log(a);
// }

// max(23, 22);

// function max(width, height) {
//   if (width < height) return console.log("this is a portrait picture");
//   else if (width == height) return console.log("this is a square picture");
//   else return console.log("this is a landscape picture");
// }

// max(24, 24);

// function checkSpeed(speed) {
//   const speedLimit = 70;
//   const kmp = 5;

//   if (speed < speedLimit + kmp) console.log("ok");
//   else {
//     let points = Math.floor((speed - speedLimit) / kmp);
//     if (points >= 12) console.log("license suspended");
//     else console.log("points", points);
//   }
// }
// checkSpeed(744);

// function tasin(star) {
//   for (let start = 1; start <= star; start++) {
//     let coin = "";
//     for (let i = 1; i < start; i++) coin += "%";
//     console.log(coin);
//   }
// }

// tasin(3);

// function tasin(a, b) {
//   for (let i = a; i < b; i++) console.log(i);
// }

// tasin(2, 5);

// const circle = {
//   tasin: 5,
//   mad: 2,
//   location: {
//     x: 1,
//     y: 2,
//     draw: function mf(k, v) {
//       if (k < v) console.log("stupid person");
//       else if ((k = v)) console.log("hero");
//       else console.log("humble person");
//       console.log("lets learn javascript as soon as i can simply like a hero");
//     },
//   },
// };

// circle.location.draw(2, 2);

// Factory Function

// function createCircle(radius, location) {
//   return {
//     radius: 1,
//     location: {
//       x: 1,
//       y: "wx",
//     },
//     isVisible: true,
//     draw: function () {
//       console.log("wtf");
//     },
//   };
// }
// function createCircle(radius) {
//   return {
//     radius,
//     draw() {
//       console.log("draw");
//     },
//   };
// }

// const circle = {
//   radius: 1,
//   tasin: "kire",
// };

// circle.color = "gray";
// circle.draw = function (a, b) {
//   if (a > b) return a;
//   else return b;
// };
// circle.man = "tasin";

// delete circle.tasin;

// console.log(circle);

// let x = {
//   circle: "tasin",
// };

// console.log(x.circle);

// function circle(radius) {
//   this.radius;
// }

// let x = { value: 10 };
// let y = x;
// x.value = 20;
// let obj = { value: 10 };
// function increase(obj) {
//   obj.value++;
// }

// increase(obj);
// console.log(obj);

// function start(star) {
//   for (let row = 1; row <= star; row++) {
//     let increase = "";
//     for (let i = 0; i < row; i++) increase += "$";
//     console.log(increase);
//   }
// }

// start(34);

// function tasin(number) {
//   for (let i = 1; i <= number; i++) {
//     if (i % 2 == 0) {
//       console.log(i, "The number is even.");
//     } else console.log(i, "The number is odd");
//   }
// }

// tasin(53);

// function getrandom(a) {
//   return Math.random();
// }

// console.log(getrandom(10));

// function getrandom(a, b) {
//   for (let i = a; i <= b; i++) return Math.floor(Math.random() * i);
// }

// console.log(getrandom(12, 15));

// function tasin(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }

// console.log(tasin(9, 16));

// const message = "this is my first try of javascript";

// const tasin = message.startsWith("this");
// console.log(tasin);

// const name = "tasin";

// const another = `Hi ${name}
// Thank You for joining my discord server
// Regards from
// Pinik`;
// console.log(another);

// let now = new Date();

// console.log(now);

// const address = {
//   street: "24/6 pic",
//   city: "narayganj",
//   zipCode: 1410,
// };

// function showAddress(address) {
//   for (let key in address) console.log(key, ":", address[key]);
// }

// showAddress(address);

// Factory Function

// let address = createAddress(1, 2, 33);

// console.log(address);

// function createAddress(street, city, zipCode) {
//   return {
//     street,
//     city,
//     zipCode,
//   };
// }

// Constructor Function

// function Address(street, city, zipCode) {
//   this.street = street;
// }

// let address1 = new Address(1, 2, 3);
// let address2 = new Address(1, 2, 3);

// console.log(areEqual(address1, address2));
// console.log(areSame(address1, address2));

// function Address(street, city, zipCode) {
//   this.street = street;
//   this.city = city;
//   this.zipCode = zipCode;
// }

// function areEqual(address1, address2) {
//   return (
//     address1.street === address2.street &&
//     address1.city === address2.city &&
//     address1.zipCode === address2.zipCode
//   );
// }
// function areSame(address1, address2) {
//   return address1 === address2;
// }

// let post = {
//   title: "a",
//   body: "b",
//   author: "c",
//   views: 10,
//   comments: [
//     { author: "a", body: "b" },
//     { author: "c", body: "d" },
//   ],
//   islive: true,
// };

// console.log(post);

// let priceRange = [
//   { label: "$", tooltip: "inecpecsive", minperPerson: 0, maxperperson: 10 },
//   { label: "$$", tooltip: "moderate", minperPerson: 11, maxperperson: 20 },
//   { label: "$$", tooltip: "expensive", minperPerson: 21, maxperperson: 50 },
// ];

// let resturants = [{ averageperperson: 5 }];

// const numbers = [1, 2, 3, 4];

// console.log(numbers.indexOf(3));

// console.log(numbers.indexOf(1) !== -1);

// console.log(numbers.includes(1));
// const courses = [
//   { id: 1, name: "a" },
//   { id: 2, name: "b" },
// ];

// console.log(courses.includes({ id: 1, name: "a" }));

// const course = courses.find(function (course) {
//   return course.name === "a";
// });

// console.log(course);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// let another = numbers;
// numbers = [];
// console.log(another);

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const joined = first.concat(second);
// const slice = joined.slice(2);
// console.log(joined);
// console.log(slice);
// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const joined = [
//   ...first,
//   {
//     country: "Bangladesh",
//     language: ["bangla", "hindi", "english"],
//   },
//   34,
//   ...second,
// ];

// console.log(joined);
// let man = [
//   long:"5feet",
// ]
console.log("tasin");
