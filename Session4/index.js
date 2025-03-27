const mobile = [
  {
    productId: 1,
    brand: "iPhone",
    model: "iOS 11",
    image: "https://m.media-amazon.com/images/I/71oWrfCTiqL._SX466_.jpg",
    description:
      "Features 6.1″ display, Apple A13 Bionic chipset, 3110 mAh battery, 256 GB storage, 4 GB RAM, Scratch-resistant glass.",
    price: 80000,
  },
  {
    productId: 2,
    brand: "iPhone",
    model: "iOS 12",
    image: "https://m.media-amazon.com/images/I/713d2it9mhL._SX466_.jpg",
    description:
      "Features 6.1″ display, Apple A14 Bionic chipset, 2815 mAh battery, 256 GB storage, 4 GB RAM, Ceramic Shield glass.",
    price: 85000,
  },
];

const con = document.getElementById("container");

if (mobile.length > 0) {
  mobile.forEach((item) => {
    const card = document.createElement("div");
    card.style.padding = "15px";
    card.style.border = "1px solid #007BFF";
    card.style.borderRadius = "10px";
    card.style.margin = "10px";
    card.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = `${item.brand} ${item.model}`;
    img.style.width = "100%";
    img.style.borderRadius = "5px";

    const brand = document.createElement("h2");
    brand.textContent = item.brand;

    const model = document.createElement("h3");
    model.textContent = item.model;

    const description = document.createElement("p");
    description.textContent = item.description;

    const price = document.createElement("h4");
    price.textContent = `Price: ₹${item.price}`;

    const button = document.createElement("button");
    button.textContent = "Add to Cart";
    button.style.padding = "10px 15px";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.backgroundColor = "#007BFF";
    button.style.color = "#FFF";
    button.style.cursor = "pointer";

    button.addEventListener("click", () => {
      cart(item.productId);
    });

    card.appendChild(img);
    card.appendChild(brand);
    card.appendChild(model);
    card.appendChild(description);
    card.appendChild(price);
    card.appendChild(button);

    con.appendChild(card);
  });
} else {
  con.innerHTML = "<p>No products available.</p>";
}

let arr = [];
function cart(proId) {
  const product = mobile.find((item) => item.productId === proId);
  if (product) {
    console.log(product);
    arr.push(product);
    localStorage.setItem("cartdata", JSON.stringify(arr));
    alert(`${product.brand} ${product.model} added to cart!`);
  } else {
    alert("Product not found!");
  }
}
