const tests = [
"testcase 0",
"testcase 1",
"testcase 2",
"testcase 3",
];

const numbers = {
    "first": {
        a: 0,
        b: 0,
        c: 0
    },
    "second": {
        a: 0,
        b: 0,
        c: 0
    },
    "third": {
        a: 0,
        b: 0,
        c: 0
    },
}

let spreadMapped: any = {};
const jsonMapped: any = {};
const objectAssignMapped: any = {};


tests.forEach(testCase => {
    spreadMapped[testCase] = {
        ...numbers,
    };
    jsonMapped[testCase] = JSON.parse(JSON.stringify(numbers))
    objectAssignMapped[testCase] = Object.assign({}, numbers);
});


spreadMapped["testcase 0"].first.a = 23;
spreadMapped["testcase 0"].first.b = 42;
spreadMapped["testcase 0"].first.c = 13;

jsonMapped["testcase 0"].first.a = 23;
jsonMapped["testcase 0"].first.b = 42;
jsonMapped["testcase 0"].first.c = 13;

objectAssignMapped["testcase 0"].first.a = 23;
objectAssignMapped["testcase 0"].first.b = 42;
objectAssignMapped["testcase 0"].first.c = 13;

console.log("Spread:", spreadMapped);
console.log("JSON:", jsonMapped);
console.log("Object assign:", objectAssignMapped);

// console.log("##############")

// spreadMapped["testcase 0"] = {
//     ...spreadMapped["testcase 0"],
//     first: {
//         ...spreadMapped["testcase 0"].first,
//         a: 23
//     }
// }
// console.log(spreadMapped)