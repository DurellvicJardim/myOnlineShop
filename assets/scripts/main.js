fetch('./server.php')
.then((res) => res.json())
.then(res => {
    let result = '';
    for(let data of res){
        if(+data.product_featured === 1){
            result += 
            "<div class='d-flex justify-content-center'>"+
                "<div class='card mb-5' style='width: 18rem'>"+
                    "<a href='"+data.product_page+"' class='card-img-top rounded'>"+"<img src='./assets/images/"+data.product_image+".jpg'></img></a>"+
                    "<div class='card-body'>"+
                        "<h5 class='card-title'>"+data.name+"</h5>"+
                        "<p class='card-text fw-bold'>"+"R"+data.price+".00"+"</p>"+
                        "<a href='shop.html'>"+
                            "<button class='btn btn-danger'>"+
                                "View in shop "+
                                "<i class='bi bi-shop'></i>"+
                            "</button>"+
                        "</a>"+
                    "</div>"+
                "</div>"+
            "</div>";
            if(document.querySelector('.featuredproductcard') != null){
                document.querySelector(".featuredproductcard").innerHTML = result;
            }

        }else if(+data.product_new === 1){
            "<div class='d-flex justify-content-center'>"+
                "<div class='card mb-5' style='width: 18rem'>"+
                    "<a href='"+data.product_page+"' class='card-img-top rounded'>"+"<img src='./assets/images/"+data.product_image+".jpg'></img></a>"+
                    "<div class='card-body'>"+
                        "<h5 class='card-title'>"+data.name+"</h5>"+
                        "<p class='card-text fw-bold'>"+"R"+data.price+".00"+"</p>"+
                        "<a href='shop.html'>"+
                            "<button class='btn btn-danger'>"+
                                "View in shop "+
                                "<i class='bi bi-shop'></i>"+
                            "</button>"+
                        "</a>"+
                    "</div>"+
                "</div>"+
            "</div>";
            if(document.querySelector('.newproductcard') != null){
                document.querySelector(".newproductcard").innerHTML = result;
            }

        }
    }
})