// Task 1
function countVowels(str) {
  str = str.toLowerCase();

  let count = 0;
  let vowels = "aeiou";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  console.log(count);
}

countVowels("aeiou");

// task 2
function invertCase(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch >= "A" && ch <= "Z") {
      result += ch.toLowerCase();
    } else if (ch >= "a" && ch <= "z") {
      result += ch.toUpperCase();
    } else {
      result += ch;
    }
  }

  console.log(result);
}

invertCase("MaHMouD");

// task 3
function uniqueMerge(a, b) {
  let result = [];

  for (let i = 0; i < a.length; i++) {
    if (result.indexOf(a[i]) === -1) {
      result.push(a[i]);
    }
  }

  for (let j = 0; j < b.length; j++) {
    if (result.indexOf(b[j]) === -1) {
      result.push(b[j]);
    }
  }

  console.log(result);
}

uniqueMerge([1, 2, 3], [3, 4, 5]);

// task 4
function findFirstIndexDivisibleBy(nums, x, y) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % x === 0 && nums[i] % y === 0) {
      return i;
    }
  }
  return -1;
}

console.log(findFirstIndexDivisibleBy([7, 11, 13], 2, 3));

//task 5

function allTruthy(values) {
  for (let i = 0; i < values.length; i++) {
    if (!values[i]) {
      return 0;
    }
  }
  return 1;
}
console.log(allTruthy([1, "x", {}, []]));
console.log(allTruthy([1, 0, "x"]));

// task 6

function pickEveryNth(arr, n) {
  let r = [];
  for (let i = 0; i < arr.length; i += n) {
    r.push(arr[i]);
  }
}
console.log(pickEveryNth(["a", "b", "c", "d", "e", "f"], 2));

// task 7

function ticketPrice(customer) {
  let price;

  if (customer.age < 6) {
    price = 0;
  } else if (customer.age <= 18 || customer.isStudent) {
    price = 8;
  } else if (customer.age >= 65) {
    price = 6;
  } else {
    price = 12;
  }

  if (customer.hasCoupon) {
    price = price - 2;
    if (price < 0) {
      price = 0;
    }
  }

  return price;
}

console.log(ticketPrice({ age: 4, isStudent: false, hasCoupon: false }));
console.log(ticketPrice({ age: 15, isStudent: false, hasCoupon: true }));
console.log(ticketPrice({ age: 20, isStudent: true, hasCoupon: true }));
console.log(ticketPrice({ age: 70, isStudent: false, hasCoupon: true }));
console.log(ticketPrice({ age: 30, isStudent: false, hasCoupon: true }));

// task 8
function normalizeNames(names) {
  let s = [];

  for (let i = 0; i < names.length; i++) {
    let name = names[i].trim().toLowerCase();
    let formatted = name.charAt(0).toUpperCase() + name.slice(1);
    s.push(formatted);
  }

  return s;
}

console.log(normalizeNames(["   aMMaR massOUD  ", " SARA ", "oMaR"]));

// task 9

const productProto = {
  isAvailable: function () {
    return this.stock > 0;
  },
  label: function () {
    return (this.brand || "Generic") + " " + this.name;
  },
};

function buildProductCatalog(rawItems) {
  let s = [];

  for (let i = 0; i < rawItems.length; i++) {
    let obj = Object.create(productProto);
    obj.name = rawItems[i].name;
    obj.brand = rawItems[i].brand;
    obj.stock = rawItems[i].stock;
    s.push(obj);
  }

  return s;
}
const items = [
  { name: "Mouse", brand: "Logi", stock: 10 },
  { name: "SSD", stock: 0 },
  { name: "Keyboard", brand: "KeyCo", stock: 3 },
];

const catalog = buildProductCatalog(items);
console.log(
  catalog.map((p) => ({ label: p.label(), available: p.isAvailable() }))
);

// task 10 

function sumUntilLimit(nums, limit) {
    let sum = 0;
    let i = 0;

    while (i < nums.length && sum + nums[i] <= limit) 
    {
        sum += nums[i];
        i++;
    }
    return sum; 
}
console.log(sumUntilLimit([5, 7, 4], 12)); 
console.log(sumUntilLimit([3, 4, 6], 10)); 
console.log(sumUntilLimit([1, 2, 3, 4], 15)); 

