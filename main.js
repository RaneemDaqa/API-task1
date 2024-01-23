async function getProduct() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  //console.log(data);
  const products = data.products;

  const result = products.map(function (ele) {

    return `
        <h2>${ele.title}</h2>       
        <img src=${ele.images[0]}
        <h3>${ele.price}</h3>
        `;
  }
);

  document.querySelector(".products").innerHTML = result;
}

getProduct();
