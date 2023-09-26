//For Loop

const forLoop = {
    name: "raj",
    age: 25,
    city: "Chennai"
};

const keys = Object.keys(forLoop);

for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = forLoop[key];
    console.log(key + ": " + value);
}

// For in

const forIn = {
    name: "rajkumar",
    age: 25,
    city: "chennai"
};

for (let key in forIn) {
    console.log(key + ": " + forIn[key]);
}

// For of

const forof = {
    name: "rajkumar",
    age: 25,
    city: "Chennai"
};

const a = Object.entries(forof);

for (let [key, value] of a) {
    console.log(key + ": " + value);
}

// For Each

const foreach = {
    name: "rajkumar",
    age: 25,
    city: "Chennai"
};

Object.keys(foreach).forEach(key => {
    console.log(key + ": " + foreach[key]);
});