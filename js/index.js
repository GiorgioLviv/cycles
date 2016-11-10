//var cats = {
//  Murchik: 'red',
//  Ryzhik: 'black',
//  Pushok: 'green'
//}

//for (var cat in cats) {
//    document.write(cat + ':' [cats] + '<br>')
//}

// зразок циклічного рішення знаходження порядкового номера
var orderNumber = Number(prompt("Введіть порядковий номер числа",'число'));
function fibonacci(orderNumber) {
  var a = 1,
    b = 1;
  for (var i = 3; i <= orderNumber; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}
document.write(fibonacci(orderNumber));

