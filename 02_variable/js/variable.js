

// 価格
var price = 100;

// 個数
var quantity = 5;

var theName = "ミュージック・マガジン2020年5月号";
var thePrice = 150;
var theQuantity = 3;
var theDiscount = 20;

var visualElement = document.querySelector(".visual");
var imgPath = "./img/MM-202005.jpg"


visualElement.src = imgPath;
visualElement.style.margin = '0 auto';
document.getElementById("name").innerHTML = theName;
document.getElementById("price").innerHTML = `￥${thePrice}`;
document.getElementById("quantity").innerHTML = theQuantity;
document.getElementById("discount").innerHTML = `${theDiscount}%`;



// コンソール表示
// clg

console.log(theName, thePrice, theQuantity, theDiscount);


// const ... 定数
/**
 * 一度決めたら変更できない定義の仕方
 */
const TAX_LATE = 0.1;
console.log(TAX_LATE);


