console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
// addItem function
function addItem (item) {
  basket.push(item);
  return true;
}
//function addItem test
let testItem = 'item';
console.log('Test - should say, "true" Says: ' + addItem(testItem));
// listItems Function
function listItems (array){
  for( i = 0; i < array.length; i++){
    console.log(array[i]);
  }
  return;
}
// listItems test
console.log('Test - should say, "item" Says: ');
console.log(listItems(basket));

// empty function
function empty (array){
  array = [];
  return array;
}
console.log('Test - should say, " " Says: ' + empty(basket));

console.log('Test 2 - should say "item" Says: ' + basket);
