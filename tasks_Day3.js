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

