const person = {
    name: "Aryan",
    age: 30,
    address: {
      street: "trwara ",
      city: "lucknow",
      state: "up",
      zip: "12345"
    }
  };
  
  function extractNameAndStreet({ name, address: { street } }) {
    return { name, street };
  }
  
  const { name, street } = extractNameAndStreet(person);
  
  console.log(name); 
  console.log(street); 
  

  