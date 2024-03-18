const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
  ]);
  
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
  
  let array = ['a', 'b', 'c', 'd', 'e'];
  let array2 = ['j', 'i', 'h', 'g', 'h'];
  
  const slice = function() {
    // slice method does not mutate the array
    console.log(array.slice(2));
    console.log(array.slice(2, 4));
    console.log(array.slice(-2));
    console.log(array.slice(-1));
    console.log(array.slice(1, -2));
    console.log(array.slice())
  };
  
  const splice = function() {
    // slpice method is simillar to slice method but it mutates the 
    // the second parameter is for mentioning how many elements we want to delete
    console.log(array.splice(2));
    console.log(array);
  };
  
  const reverse = function() {
    // mutates the original array
    console.log(array2.reverse());
    console.log(array2);
  };
  
  let letters;
  const concat = function() {
    // it does not mutate
    letters = array.concat(array2);
    console.log(letters);
  };
  
  const join = function() {
    console.log(letters.join("-"));
  };
  
  const indexing = function() {
    const array3 = [23, 11, 64];
    console.log(array3[0]);
    console.log("at method...")
    console.log(array3.at(0));
    console.log(`last element of the array: ${array3.at(-1)}`);
  };
  
  const looping = function() {
    // forEach on Sets and Maps
    // continue and break does not work here
    console.log("forEach on arrays...")
    movements.forEach(
      (movement, index, array) => {
        const message = movement > 0 ? `you deposited ${movement}` : `you withdraw ${Math.abs(movement)}`;
        console.log(movements, `movement ${index + 1}: ${message}`);
      }
    );
  
    console.log("forEach on Maps...");
    currencies.forEach(
      function(value, key, map) {
        console.log(`${key}: ${value}`);
      }
    );
  
    console.log("forEach on Sets...");
    const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
    currenciesUnique.forEach(
      (value, key, _, set) => console.log(`${value}`)
    );
  
  };
  
  looping();
  //indexing();
  //concat();
  //join();
  //reverse();
  //splice();
  // slice();
  