"use strict";

const getArrayValues = () => {
    return Promise.resolve(["A", "B"]);
};

const doSomething = (v) => {
    return `---${v}---`;
};

getArrayValues()
    .then(([v1, v2]) => {
        console.log(v1 + " " + v2);
        return Promise.all([doSomething(v1), doSomething(v2)]);
    })
    .then((args) => console.log(args));