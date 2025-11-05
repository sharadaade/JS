// • Object creation and access
// • Add, update, delete properties
// • Nested objects
// • Loop through objects (for...in)
// • Object methods: keys(), values(), entries()
// • Mini Project: User Profile System

// Start

const mySym = Symbol("key1")
// Object literals
const User = {
    name: "Demon",
    age: 22,
    mySym: "mykeyy",
    location: "MH",
    email: "aadesh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"],
}
// console.log(User);
// console.log(User.lastLoginDays);
// console.log(User.email);
// console.log(User["email"]);
// console.log(User.mySym);
// console.log(User["mySym"]);
// console.log(typeof User.mySym);


User.email = "autumnhq@gmail.com";
console.log(User.email);





