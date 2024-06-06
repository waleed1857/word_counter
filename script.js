let text = document.getElementById("myText");
let disChar = document.getElementById("dis1");
let disWord = document.getElementById("dis2");
let disChar2 = document.getElementById("dis3");
let disWord2 = document.getElementById("dis4");
let toUpper = document.getElementById("toUpper");
let toLower = document.getElementById("toLower");
let toCapitalize = document.getElementById("toCapitalize");


text.addEventListener("input", () => {
    let content = text.value;
    let sp_char = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    // For total characters
    var total_char = 0;
    for (let j of content) {
        // if (j !== " " && j !== ".") {
        if (j != " " && !sp_char.includes(j)) {
            total_char += 1;
        }
    }

    // For total words:
    const words = content.split(" ");
    let total_words = 0;
    for (let i of words) {
        // if (i !== "" && !sp_char.includes(i)) {
        if (i != "" && !sp_char.includes(i)) {
            total_words += 1;
        }
    }
    disChar.innerText = total_char;
    disChar2.innerText = total_char;
    disWord.innerText = total_words;
    disWord2.innerText = total_words;
    // disChar.innerText = text.value.length;
});


// Event to uppercase the text
toUpper.addEventListener("click", function () {
    text.value = text.value.toUpperCase();
});


// Event to lowercasecase the text
toLower.addEventListener("click", function () {
    text.value = text.value.toLowerCase();
});


// Event to capitalize the text
toCapitalize.addEventListener("click", function () {
    let content = text.value;
    content = content.split(" ").filter(word => word !== "");
    for (var i = 0, x = content.length; i < x; i++) {
        content[i] = content[i][0].toUpperCase() + content[i].slice(1);
    }
    let capText = content.join(" ");
    text.value = capText;
});







/*
// For total characters:
const txt = "Lorem ipsum dolor sit amet elit. "
console.log(`Entered Text: ` + txt);
console.log(`Overall Length: ` + txt.length);
var char = 0;
for (let j of txt) {
    // if (j !== " " && j !== ".") {
    if (j != " " && j != ".") {
        char += 1;
    }
}
console.log(`Total characters: ` + char);
 
 
 
// For total words:
const words = txt.split(" ");
let count = 0;
for (let i of words) {
    // if (i !== "") {
    if (i != "") {
        count += 1;
    }
}
console.log("Number of total words: ", count);

// For Capitaize text:
let string = 'hello world ';
string = string.split(" ").filter(word => word !== "");
console.log("String-to-List: ", string);
for (var i = 0, x=string.length ; i<x ; i++)
    {
        string[i] = string[i][0].toUpperCase() + string[i].slice(1);
    } 
let capText = string.join(" ");
console.log(capText);
*/