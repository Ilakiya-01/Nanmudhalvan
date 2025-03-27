const mobile = JSON.parse(localStorage.getItem("cartdata"));
console.log(mobile);
const con = document.getElementById("container");
for (let i = 0; i < mobile.length; i++) {
  con.innerHTML += `<div><img src =${mobile[i].image}>
    <h2>${mobile[i].brand}</h2>
    <h3>${mobile[i].model}</h3>
    <p>${mobile[i].description}</p>
    <h4>${mobile[i].price}</h4>
    <button onclick="cart(${mobile[i].productId})"> Add to cart </button>
    </div>`;
}
