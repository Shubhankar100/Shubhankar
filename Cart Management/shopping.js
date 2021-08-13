//  let Originalvalues: (string | number)[] = ['Apple', 2, 'Orange', 3, 'Banana', 4]; 
var values = [];
localStorage.setItem('values', '');
var finalCartSum = 0;
console.log('hdfjsd');
function addToCart(val) {
    finalCartSum = finalCartSum + 1;
    values.push(val);
    localStorage.values = JSON.stringify(values);
    var doc = document.getElementById("cartValue");
    // if(doc)
    if (doc) {
        doc.innerHTML = finalCartSum.toString();
    }
    return finalCartSum;
}
function checkOut() {
    return values;
}
//   Originalvalues.forEach(addToCart);
//   console.log(finalCartSum)
//   let txt = addToCart(finalCartSum, 'Apple', 1);
//   document.getElementById()
// function myFunction(value, index, array) {
//   txt += value + "<br>"; 
// }
