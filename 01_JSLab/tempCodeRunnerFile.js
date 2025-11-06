const abc = {
    name: "vishal",
    age: 22,
    address: "india" 
};

let xyz = {
    ...abc,
    name: "Ankit",
};

const {name, ...pqr} = abc;
console.log(pqr);
