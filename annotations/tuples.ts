const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// represent above object with a tuple; say exactly what type each
// item in the array will be
const pepsi: [string, boolean, number] = ["brown", true, 40];

// different syntax, but same meaning as above
type Drink = [string, boolean, number];
