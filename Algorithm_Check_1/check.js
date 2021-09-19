var phrases = document.getElementById("Sentence").textContent;
console.log(phrases);
console.log(phrases[0]);
phraseUpperCase = phrases.toUpperCase();
var NumberOfSpace = 0;
var Numberofletters = phrases.length;
var NumberofVowels = 0;
var Vowels = "AEIOU";
console.log(Numberofletters);

for (i = 0; i <= Numberofletters; i++) {
  if (phrases[i] == " ") {
    NumberOfSpace++;
  }
  for (N = 0; N <= 4; N++) {
    console.log(i);

    if (phraseUpperCase[i] == Vowels[N]) {
      NumberofVowels++;
    }
  }
}
NmberofWords = NumberOfSpace + 1;
NumberofAZ = Numberofletters - NumberOfSpace;
console.log("Number OF All Charachter Types ", Numberofletters);
console.log("Number OF Vowles", NumberofVowels);
console.log("Number OF Words", NmberofWords);
console.log("Number OF AZ Letters", NumberofAZ);
