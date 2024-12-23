let userInfo = document.querySelector ("#user_info")
let userD = document.querySelector ("#user")
let links = document.querySelector ("#links")

if (localStorage.getItem("username")){
    links.remove()
    userInfo.style.display ="flex"
    userD.innerHTML = localStorage.getItem("username")
}
let logOutBtn = document.querySelector("#logout")
logOutBtn.addEventListener("click", function (){
    localStorage.clear();
    setTimeout(() => {
        window.location = "Log_In.html";
    } , 1000)
})

// ///////////////////////////////////////////////////
let allProducts = document.querySelector(".products")
let products = [
    {
        id:1,
        title: "hydration-station",
        collection:"peach_please",
        price: 20,
        img : "images/soap-and-glory-2022-hydration-station-christmas-gift-set_20$.jpg"
    },
    {
        id:2,
        title: "body-butter",
        collection:"peach_please",
        price: 9.99,
        img : "images/soap-and-glory-peach-please-body-butter.jpg"
    },
    {
        id:3,
        title: "body-lotion",
        collection:"peach_please",
        price: 5.99,
        img : "images/soap-and-glory-peach-please-body-lotion.jpg"
    },
    {
        id:4,
        title: "fizz-ball",
        collection:"smoothie_star",
        price: 10,
        img :"images/soap-and-glory-smoothie-star-fizz-ball-main.jpg" 
    },
    {
        id:5,
        title: "body-scrab",
        collection:"sugar_cruch",
        price: 10.55,
        img :"images/soap-and-glory-sugar-crush-body-scrub-main.jpg"
    }
    ,
    {
        id:6,
        title: "Body-Scrub",
        collection:"Real_Zing",
        price: 12.66,
        img : "images/The-Real-Zing-Body-Scrub.jpg" 
    },
    {
        id:7,
        title: "Body-Serum",
        collection:"Real_Zing",
        price: 19.99,
        img : "images/The-Real-Zing-Body-Serum.jpg"
    },
    {
        id:8,
        title: "body-wash",
        collection:"original_pink",
        price: 10.99,
        img : "images/soap-and-glory-original-pink-clean-on-me-body-wash-main.jpg" 
    },
    {
        id:9,
        title: "ball-bath-bomb",
        collection:"original_pink",
        price: 19.99,
        img :"images/soap-and-glory-original-pink-fizz-a-ball-bath-bomb-main.jpg"
    }
]


function drawProducts(products) {
   
    allProducts.innerHTML = "";

    products.forEach(item => {
        let productDiv = document.createElement("div");
        productDiv.classList.add("product_item");
        productDiv.classList.add("col-md-3");
        productDiv.classList.add("col-12");
        productDiv.style = "box-shadow: 0 0 30px rgba(0,0,0,0.5); overflow: hidden; border-radius: 15px; margin-top: 1em;";

        productDiv.innerHTML = `
               <img class="product_item_img" src= "${item.img}" alt="">
                    <div class="product_item_desc">
                      <p style="font-weight: 700px; font-family: Georgia, 'Times New Roman', Times, serif;">Name : ${item.title}</p>
                       <p style="font-weight: 700px; font-family: Georgia, 'Times New Roman', Times, serif;">Collection : ${item.collection}</p>
                       <p style="font-weight: 700px; font-family: Georgia, 'Times New Roman', Times, serif;">price : ${item.price} $</p>
                    </div>
                    <div class="product_item_action">
                     <button class="add_to_cart" onClick="addToCart(${item.id})">Add To Cart</button>
                  <i class="fa-solid fa-heart fav" onClick="addToLove(${item.id})"></i>
                    </div>
        `;

        allProducts.appendChild(productDiv);
    });
}

// Initial render of all products
drawProducts(products);


let cartProductDiv = document.querySelector(".carts_products div")
let badge = document.querySelector(".badge")

let result=0;
let addedItem = localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")) : [];
if(addedItem) {
    addedItem.map(item => {//عدي ع كل عنصر من العناصر بتاعتي
        cartProductDiv.innerHTML += `<p>${item.title}</p>`;
         result+= +(item.price);
    }) 
    badge.style.display = "block";
    badge.innerHTML = addedItem.length;
  
}


  if(localStorage.getItem=("username")){
        function addToCart(id){
            let choosenItem = products.find((item) => item.id === id );
            
            cartProductDiv.innerHTML += `<p>${choosenItem.title}</p>`;
            

            addedItem = [...addedItem , choosenItem]
            localStorage.setItem("ProductsInCart" , JSON.stringify(addedItem) )
            let cartProductsLength = document.querySelectorAll(".carts_products div p")
            badge.style.display ="block";
            badge.innerHTML = cartProductsLength.length;
        }
    }else {
        window.location ="Log_In.html"
    }


   let heart=document.querySelectorAll(".fav");
    let addedItemLove = [];
     function addToLove(id){
            heart[id-1].style.color="red";
            let choosen = products.find((item) => item.id === id );
            addedItemLove = [...addedItemLove , choosen]
            localStorage.setItem("ProductsInLove" , JSON.stringify(addedItemLove) )

      }
  

    
//////////////////////////////////////////////////////////////////////////
let shoppingCartIcon = document.querySelector(".shopping_cart")
let cartsProducts = document.querySelector(".carts_products")
shoppingCartIcon.addEventListener("click", opencart)

function opencart(){
     if(cartProductDiv.innerHTML !=""){
         if(cartsProducts.style.display=="block"){
            cartsProducts.style.display="none"
         }else {
            cartsProducts.style.display="block";
         }
     } 
}

function search_by_title() {
    let search_bar = document.querySelector(".search_by_title").value.toUpperCase();
    
    // Filter the products based on the search input
    let filteredProducts = products.filter(item => item.title.toUpperCase().includes(search_bar));

    // Re-render the products based on the filtered list
    drawProducts(filteredProducts);
}
function search_by_collection() {
    let search_bar = document.querySelector(".search_by_collection").value.toUpperCase();
    
    // Filter the products based on the search input
    let filteredProducts = products.filter(item => item.collection.toUpperCase().includes(search_bar));

    // Re-render the products based on the filtered list
    drawProducts(filteredProducts);
}