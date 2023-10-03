//Create element for shopping cart
let productInCart = [];
const parentElement = document.querySelector('#buyItems');
const cartSumPrice = document.querySelector('#sum-prices');
const products = document.querySelector('.product-under');

const updateShoppingCartHTML = function(){
    if(productsInCart.length > 0){
        let result = productsInCart.map(product => {
            return '
            
            
            '

        });
    }
    else{
        document.querySelector('.checkout').classList.add('hidden');
        parentElement.innerHTML = '<h4 class="empty">Your shopping cart is empty</h4>';
        cartSumPrice.innerHTML = "";
    }
}

function updateProductsInCart(product){
    for(let i=0; i < updateProductsInCart.length; i++){
        if(productsInCart[i].id == product.id){
            productsInCart[i].count += 1;
            productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
            return;
        }
    }
    productsInCart.push(product);
}


products.forEach(product => {
    product.addEventListener('click', (e) => {
        if (e.target.classList.contains('addToCart')) {
            const productID = e.target.dataset.productID;
            const productName = product.querySelector('.productName').innerHTML;
            const productPrice = product.querySelector('priceValue').innerHTML;
            const productImage = product.querySelector('img').src;
            let productToCart = {
                name: productName,
                image: productImage,
                id: productID,
                count: 1,
                price: +productPrice,
                basePrice: +productPrice
            }
            updateProductsInCart(productToCart);
            updateShoppingCartHTML();
        }

    });

});

//Create button to buy item
const button = document.querySelector(".buy-item");
const item = document.querySelector(".item");
const addItem = document.querySelector(".buyItem")

//console.log(button);
//console.log(item);

//Set the button text to 'Buy Item"
button.innerText = 'Buy Item'

//When user click on the button, function is triggered to add item.
button.addEventListener("click", function(e) {
    item.classList.add("buyItem");

alert('Purchasing..')
});

<script>../script.js</script>