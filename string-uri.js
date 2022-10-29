// 1. Se da urmatorul string:
let badKids = "Lista copiilor pesepsiti este urmatoarea: Manuela, Daniel, Vicentiu";
// 1.1 Verifica daca numele "Daniel" se afla pe lista.
console.log(badKids.includes("Daniel"));
// 1.2 Daca numele "Daniel" se afla pe lista, modifica lista, astfel incat in locul lui "Daniel" sa contina "Cornel".
badKids = badKids.replace("Daniel","Cornel");
console.log(badKids);

// 2. Se da urmatorul string:
const testGrades = "9.80/6.85/9.10/7.80/8.20";
// Sa se calculeze media aritmetica a notelor.
// HINT: Transforma string-ul intr-un array si apoi itereaza prin array.
let testGrades2 = testGrades.split("/");
console.log(testGrades2);

let sum = 0;
let sumGrades = (sum) => {
    for( let i = 0; i < testGrades2.length; i++) {
        testGrades2[i] = Number(testGrades2[i]);
        sum = sum + testGrades2[i]; 
    } 
    return sum;
}

let average = sumGrades(sum) / testGrades2.length;
console.log(average);

// 3. Se da urmatorul obiect:
const props = {
    name: 'Minge fotbal Nike T90',
    price: 220,
    currency: "RON",
    brand: "Nike"
  }
  // 3.1. Extrage din obiect valorile urmatoarelor proprietati: name, price, currency.
const {name, price, currency} = props;
console.log(name, price, currency);

  // 3.2. Folosind proprietatile extrase anterior, afiseaza un mesaj de forma: "Produsul TODO are pretul TODO".
const message = `Produsul ${name} are pretul ${price} ${currency}.`
console.log(message);
    // version 2
console.log('Produsul', name ,'are pretul', price, currency);
  
  // 4. Se da inca un obiect:
const additionalProps = {
    isAvailable: true
  }
  // Creeaza un obiect nou, care sa contina proprietatile obiectelor props si additionalProps.
let complexProps = Object.assign({}, props, additionalProps);
console.log(complexProps);
    // version 2 spread operator(...)
const mergedProps = {...props, ...additionalProps};
console.log(mergedProps);



