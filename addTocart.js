const product = [
  {
    id: 0,
    image: "manclothes (1).png",
    title: "Black T-shirt",
    price: 30,
  },
  {
    id: 1,
    image: "manclothes (3).png",
    title: "White T-shirt",
    price: 20,
  },
  {
    id: 2,
    image: "manclothes (5).png",
    title: "Crimson T-shirt",
    price: 40,
  },
  {
    id: 3,
    image: "manclothes (7).png",
    title: "Dark-Green T-shirt",
    price: 35,
  },
  {
    id: 4,
    image: "manclothes (10).png",
    title: "Light-Blue T-shirt",
    price: 25,
  },
  {
    id: 5,
    image: "manclothes (11).png",
    title: "Green T-shirt",
    price: 15,
  },
];
const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
let i = 0;
document.getElementById("root").innerHTML = categories
  .map((item) => {
    var { image, title, price } = item;
    return (
      `<div class="box">
        <div class="img-box">
          <img class='images' src="${image}" alt="">
        </div>
        <div class='buttom'>
          <p>${title}</p>
          <h2>$ ${price}.00</h2>` +
      "<button onclick='addtocart(" +
      i++ +
      ")'>Add to cart</button>" +
      `</div>
          </div>`
    );
  })
  .join("");
var cart = [];
function addtocart(a) {
  cart.push({ ...categories[a] });
  displaycart();
}
function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}
function displaycart(a) {
  let j = 0,
    totla = 0;
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "$" + ".00";
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((item) => {
        var { image, title, price } = item;
        totla = totla + price;
        document.getElementById("total").innerHTML = "$" + totla + ".00";
        return (
          `<div class='cart-item'>
        <div class='row-img'>
        <img class='rowimg' src='${image}' />
        </div>
        <p style='font-size:12px;'>${title}</p>
        <h2 style='font-size:15px;'>$ ${price}.00</h2>` +
          "<i class='fa-solid fa-trash' onclick='delElement(" +
          j++ +
          ")'></i></div>"
        );
      })
      .join("");
  }
}
