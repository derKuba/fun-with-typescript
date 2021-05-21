// Wir nehmen eine einfach Summe:
const sum = 232.23;

// Wandeln diese in die deutsche Schreibweise inklusive Währung.
let sumDisplay = sum.toLocaleString("de-DE", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

console.log(
  `Ist "${sumDisplay}" === "232,23 €" ??? ${sumDisplay === "232,23 €"} \n`
);

console.log("Zeige dich Zeichen in UTF-16 an: \n");
sumDisplay.split("").forEach(
  (character) => console.log(`${character} => ${character.charCodeAt(0)}`) // print Ascii Code
);

console.log("\n whitespace ' ' ist nicht gleich ' ' ");
console.log(`${" ".charCodeAt(0)} ist nicht gleich ${" ".charCodeAt(0)}`);
console.log("Whitespace ist nicht gleich NO-BREAK SPACE");

console.log("\n\n\n\n UTF-16 code TABLE");
const alphabet = [];
for (let index = 49; index < 127; index++) {
  alphabet.push([index, String.fromCharCode(index)]);
}
console.table(alphabet);
