fetch('./server.php')
.then((res) => res.json())
.then(res => {
    let result = '';
    for(let data of res){
        result += 
        "<div class='d-flex justify-content-center'>"+
            "<div class='card mb-5' style='width: 18rem'>"+
                "<a href='"+data.product_page+"' class='card-img-top rounded'>"+"<img src='./assets/images/"+data.product_image+".jpg'></img></a>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'>"+data.name+"</h5>"+
                    "<p class='card-text fw-bold'>"+"R"+data.price+".00"+"</p>"+
                    "<span hidden>"+data.product_code+"</span>"+
                    "<a href='#!' class='add-cart'>"+
                        "<button class='btn btn-danger'>"+
                            "Add to Cart "+
                            "<i class='bi bi-cart-plus'></i>"+
                        "</button>"+
                    "</a>"+
                "</div>"+
            "</div>"+
        "</div>";
    }
    if(document.querySelector(".productcard") != null){
        document.querySelector(".productcard").innerHTML = result;
    }

    let carts = document.querySelectorAll('.add-cart');

    let products = []
    for(let data of res ){
       products.push(
           {
            id: +data.id,
            product_code: "'"+data.product_code+"'",
            name: "'"+data.name+"'",
            price: +data.price,
            product_image: "'"+data.product_image+"'",
            product_featured: +data.product_featured,
            product_new: +data.product_new,
            product_page: "'"+data.product_page+"'",
            inCart : 0
           }
       );
    }

    for(let i=0; i < carts.length; i++){
        carts[i].addEventListener('click', () => {
            cartNumbers(products[i]);
            totalCost(products[i]);
        })
    }
    
    function onLoadCartNumbers(){
        let productNumbers = localStorage.getItem('cartNumbers');

        if(productNumbers){
            document.querySelector('.cart span').textContent = productNumbers;
        }
    }

    function cartNumbers(product){
        let productNumbers = localStorage.getItem('cartNumbers');
        productNumbers = parseInt(productNumbers);
        if(productNumbers){
            localStorage.setItem('cartNumbers', productNumbers + 1);
            document.querySelector('.cart span').textContent = productNumbers + 1;
        } else {
            localStorage.setItem('cartNumbers', 1);
            document.querySelector('.cart span').textContent = 1;
        }
        setItems(product);
    }

    function setItems(product){
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);
        if(cartItems !== null){
            if(cartItems[product.product_code] == undefined){
                cartItems = {
                    ...cartItems,
                    [product.product_code] : product
                }
            }
            cartItems[product.product_code].inCart += 1; 
        } else {
            product.inCart = 1;
            cartItems = {
                [product.product_code]: product
            }
        }
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    }

    function totalCost(product){

        let cartCost = localStorage.getItem('totalCost');

        if(cartCost != null){
            cartCost = parseInt(cartCost);
            localStorage.setItem("totalCost", cartCost + product.price);
        } else {
            localStorage.setItem('totalCost', product.price);
        }
    }

    function displayCart(){
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);

        let productContainer = document.querySelector(".products");
        let cartCost = localStorage.getItem('totalCost');
        if(cartItems && productContainer){
            productContainer.innerHTML = '';
            Object.values(cartItems).map(item => {
                productContainer.innerHTML += `
                    <tr>
                        <td><button class="btn"><i class="bi bi-trash-fill"></i></button> `+item.name+`</th>
                        <td>R`+item.price+`.00</td>
                        <td>`+item.inCart+`</td>
                        <td>R`+item.inCart * item.price+`.00</td>
                    </tr>
                `;
            });   
            productContainer.innerHTML += `
                <tr>
                    <td class="fw-bold basketTotalTitle">Total Amount:</td>
                    <td></td>
                    <td></td>
                    <td class="fw-bold basketTotal">R`+cartCost+`.00</td>
                </tr>
            `
        }
        deleteButtons();
    }

    function deleteButtons() {
        let deleteButtons = document.querySelectorAll('.btn');
        let productName;
        let productNumbers = localStorage.getItem('cartNumbers');
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);
        let cartCost = localStorage.getItem('totalCost');
        
    
    
        for(let i=0; i < deleteButtons.length; i++) {
            deleteButtons[i].addEventListener('click', () => {
                productName = deleteButtons[i].parentElement.textContent.trim().toLowerCase().replace(/ /g, '');
                localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart );
    
                localStorage.setItem('totalCost', cartCost - ( cartItems[productName].price * cartItems[productName].inCart));
    
                delete cartItems[productName];
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
    
                displayCart();
                onLoadCartNumbers();
            });
        }
    }

    onLoadCartNumbers();

    displayCart();
})



