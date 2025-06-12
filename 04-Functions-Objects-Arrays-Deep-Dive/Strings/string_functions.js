var str = "Harsh";

for (let i = 0; i < str.length; i++) {
    // console.log(str[i].toUpperCase());
    // console.log(str[i].toLowerCase());
}

str = "       askdjh  ";
console.log(str);
str = str.trim();
console.log(str);

// startIdx, endIdx-1
console.log(str.substring(1, 3));
console.log(str.startsWith("as"));
console.log(str.endsWith("h"));
console.log(str.indexOf("sk"));