// JAWABAN NOMOR 1
let anagram = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"];
let arr1 = `[${anagram[0]}, ${anagram[1]}, ${anagram[2]}]`;
let arr2 = `[${anagram[3]}, ${anagram[6]}]`;
let arr3 = `[${anagram[4]}]`;
let arr4 = `[${anagram[5]}]`;
let array = [];
let gabung = "[" + array.concat(arr1, arr2, arr3, arr4) + "]";
console.log(gabung.toString());
console.log("====================");
// ====================

// JAWABAN NOMOR 2
for (let i = 1; i <= 100; i++) {
  console.log((i % 3 ? "" : "abc") + (i % 5 ? "" : "def") || i);
}
// ====================
