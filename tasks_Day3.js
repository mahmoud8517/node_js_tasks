// Task 1
function countVowels(str) 
{
    str = str.toLowerCase();

    let count = 0;
    let vowels = "aeiou";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    console.log(count) 
}
 
countVowels("aeiou")

// task 2
function invertCase(str) {
    let result = "";

    for (let i = 0; i < str.length; i++)
        {
        let ch = str[i];

        if (ch >= "A" && ch <= "Z")
        {
            result += ch.toLowerCase();
        } 
        else if (ch >= "a" && ch <= "z")
        {
            result += ch.toUpperCase();
        } 
        else 
        {
            result += ch;
        }
    }

    console.log(result); 
}

invertCase("MaHMouD");


// task 3
function uniqueMerge(a, b) {
    let result = [];

    for (let i = 0; i < a.length; i++) 
    {
        if (result.indexOf(a[i]) === -1)
        {  
            result.push(a[i]); 
        }
    }

    for (let j = 0; j < b.length; j++) 
    {
        if (result.indexOf(b[j]) === -1) 
        {  
            result.push(b[j]); 
        }
    }

    console.log(result); 
}

uniqueMerge([1, 2, 3], [3, 4, 5]);

// task 4
function findFirstIndexDivisibleBy(nums, x, y)
{
    for (let i = 0; i < nums.length; i++) 
    {
        if (nums[i] % x === 0 && nums[i] % y === 0) 
        {
            return i; 
        }
    }
    return -1; 
}

console.log(findFirstIndexDivisibleBy([7, 11, 13], 2, 3));



