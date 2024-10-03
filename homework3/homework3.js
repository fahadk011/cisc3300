//6. looping throught the cats array:

const cats = [
    { name: 'Charlie', adoptionStatus: 'available' },
    { name: 'Lilly', adoptionStatus: 'not-available' },
    { name: 'Coco', adoptionStatus: 'available' },
    { name: 'Oreo', adoptionStatus: 'not-available' },
    { name: 'Luna', adoptionStatus: 'available' },
    { name: 'Milo', adoptionStatus: 'available' },
    { name: 'Lola', adoptionStatus: 'not-available' },
    { name: 'Leo', adoptionStatus: 'available' },
    { name: 'Willow', adoptionStatus: 'not-available' },
    { name: 'Bella', adoptionStatus: 'not-available' },
    { name: 'Max', adoptionStatus: 'available' },
    { name: 'Cleo', adoptionStatus: 'available' },
    { name: 'Lucy', adoptionStatus: 'not-available' },
    { name: 'Daisy', adoptionStatus: 'available' }
  ];
  
  const resultArray = [];
  
  cats.forEach(cat => {
    if (cat.adoptionStatus === 'available') {
      resultArray.push(cat.name); 
    }
  });
  
  const sentence = `Newly adopted cats: ${resultArray.join(', ')}.`;
  
  console.log(sentence);
  

//7. random number

const randomNumber = Math.floor(Math.random() * 10) + 1;

const result = randomNumber > 5 ? 'greater than five!' : 'less than five!';

console.log(`Random number: ${randomNumber}, Result: ${result}`);

///////////////////////////////////////////////////////////////////////////////////////////////////////

//8. Loop through

const cat = {
    name: "Pinecone",
    age: 13,
    type: "Munchkin",
    cuteness: 9001
  };
  
  for (let key in cat) {
    if (cat.hasOwnProperty(key)) {
      console.log(`${key}: ${cat[key]}`);
    }
  }
  

//9. Two if statements

if (1 == '1') {
    console.log("1 is equal to '1' with type coercion.");
  }
  
  if (1 !== '1') {
    console.log("1 is NOT equal to '1' without type coercion.");
  }
  
//10. Map function

const cuteCats = cats.map(cat => `${cat.name} is cute!`);
console.log(cuteCats);
