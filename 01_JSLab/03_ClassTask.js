// 1. Generate random 6 digit OTP
console.log(Math.floor(Math.random() * 1000000));

// write a basic calculator to find total price of item including GST(round up two digit)
// category       GST
// Luxury         18%
// milk           5%
// Insurance      0%
// groceries      5%
// electronics    12%
// Eg. cost: 12000;
// category: luxury
// output: total is 12000+18%of 12000

let cost = +12000;
console.log('1.Luxury =>18% \n2.milk=>5% \n3.Insurance=>0% \n4.groceries=>5% \n5.electronics=>12%');
let ch = 1;

switch (ch) {
    case 1:
        let gstLux = (cost * 18) / 100;
        console.log(`total is ${cost+gstLux} including GST`);
        break;

    case 2:
        let gstMilk = (cost * 5) / 100;
        console.log(`total is ${cost+gstMilk}  including GST`);
        break;

    case 3:
        let gstIns = (cost * 0) / 100;
        console.log(`total is ${cost+gstMilk} including GST`);
        break;
    case 4:
        let gstGross = (cost * 5) / 100;
        console.log(`total is ${cost+gstGross}  including GST`);
        break;
    case 5:
        let gstElect = (cost * 12) / 100;
        console.log(`total is ${cost+gstElect}  including GST`);
        break;
    default:
        console.log('Enter valid input!!!');
        break;
}

