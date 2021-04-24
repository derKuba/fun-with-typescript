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

const spreadMapped: any = {};
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
jsonMapped["testcase 0"].first.a = 23;
objectAssignMapped["testcase 0"].first.a = 23;

console.log(spreadMapped);

console.log(jsonMapped);

console.log(objectAssignMapped);
