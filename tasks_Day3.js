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
    // TODO
    // Hint: str = str.toLowerCase(); then loop chars and check with 'includes'
    //return 0; // replace
}
 
countVowels("aeiou")