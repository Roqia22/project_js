// let ProductsInCart = localStorage.getItem("ProductsInCart")
// let ProductsInLove = localStorage.getItem("ProductsInLove")
// let allProducts = document.querySelector(".products_in_cart")
// let Favourite = document.querySelector(".products_in_love")
// if(ProductsInCart){
//     let item = JSON.parse(ProductsInCart) ;
//     drawCartProducts(item);
// }
// if(ProductsInLove){
//     let love = JSON.parse(ProductsInLove) ;
//     drawLoveProducts(love);
// }
// function drawCartProducts(products,i){
//     let j=0;
//     let y = products.map((item) => {
//         return `
//            <div class="card col-lg-12 bg-dark text-light" style="max-height: 20em; flex-direction: row; margin-top: 10px;">
//                           <img src="${item.img}" class="card-img-top" alt="..." style="  clip-path: polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%); max-width: 25%; max-height:90% ; margin-top: 15px;">
//                         <div class="card-body">
//                             <h2 class="text-success">Name :${item.title}</h2>
//                             <p>Collection : ${item.collection}</p>
//                             <p>price : ${item.price} $</p>
//                            <button class="btn btn-success" onClick="removeFromCart()">Remove from cart</button>
//                         </div>
//                     </div>
          
//         `
//     })
//     allProducts.innerHTML = y;
// }
// function drawLoveProducts(products){
//     let y = products.map((item) => {
//         return `
//                <div class="col-md-3 col-12 product_item" style=" box-shadow: 0 0 30px rgba(0,0,0,0.5); overflow: hidden; border-radius: 15px; margin-top: 1em;">
//                         <div class="img1"><img src="${item.img}" alt="#" style="height: 10em; width: 100%; margin-top: 3px;;"></div>
//                              <h4 class="text-secondary">Name :${item.title}</h4>  
//                               <h4 class="text-dark">Collection : ${item.collection}</h4>  
//                     </div> 
        
//         `
//     })
//     Favourite.innerHTML = y;
// }
// //price
// let r=0;
// let result = localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")) : [];
// if(result) {
//    result.map(item => {//عدي ع كل عنصر من العناصر بتاعتي
//          r+= +(item.price);
//          Total_price.innerHTML="Total price : "+ Math.round(r);
//     }) 
   
// }
  
let ProductsInCart = localStorage.getItem("ProductsInCart");
let ProductsInLove = localStorage.getItem("ProductsInLove");
let allProducts = document.querySelector(".products_in_cart");
let Favourite = document.querySelector(".products_in_love");

if (ProductsInCart) {
    let item = JSON.parse(ProductsInCart);
    drawCartProducts(item);
}
if (ProductsInLove) {
    let love = JSON.parse(ProductsInLove);
    drawLoveProducts(love);
}

function drawCartProducts(products) {
    let j = 0;
    let y = products.map((item, index) => {
        return `
            <div class="card col-lg-4 text-light" style="background-color:rgba(0,0,0,0.5); box-shadow: 0 0 30px rgba(0,0,0,0.5); overflow: hidden; border-radius: 15px; max-height: 20em; flex-direction: row; margin-top: 10px;">
                <img src="${item.img}" class="card-img-top" alt="..." style=" max-width: 35%; max-height:90% ; margin-top: 5px;">
                <div class="card-body">
                    <p class="text-dark">Name: ${item.title}</p>
                    <p>Collection: ${item.collection}</p>
                    <p>Price: ${item.price} $</p>
                    <button class="btn btn-dark" onClick="removeFromCart(${index})">Remove from cart</button>
                </div>
            </div>
        `;
    });
    allProducts.innerHTML = y.join('');
}

function drawLoveProducts(products) {
    let y = products.map((item) => {
        return `
            <div class="col-md-3 col-12 product_item" style="box-shadow: 0 0 30px rgba(0,0,0,0.5); overflow: hidden; border-radius: 15px; margin-top: 1em;">
                <div class="img1"><img src="${item.img}" alt="#" style="height: 10em; width: 100%; margin-top: 3px;"></div>
                <h4 class="text-secondary">Name: ${item.title}</h4>  
                <h4 class="text-dark">Collection: ${item.collection}</h4>
            </div>
        `;
    });
    Favourite.innerHTML = y.join('');
}

// Function to remove a product from the cart
function removeFromCart(index) {
    // Retrieve the current cart from localStorage and parse it
    let cart = JSON.parse(localStorage.getItem("ProductsInCart")) || [];

    // Remove the product at the given index
    cart.splice(index, 1);

    // Save the updated cart back to localStorage
    localStorage.setItem("ProductsInCart", JSON.stringify(cart));

    // Re-render the cart products after removing the item
    drawCartProducts(cart);

    // Optionally, update total price
    updateTotalPrice();
}

// Function to update the total price
function updateTotalPrice() {
    let result = JSON.parse(localStorage.getItem("ProductsInCart")) || [];
    let r = 0;
    if (result) {
        result.forEach(item => {
            r += +item.price;
        });
        document.getElementById("Total_price").innerHTML = "Total price: " + Math.round(r) +" $";
    }
}

// Initial total price calculation
updateTotalPrice();
