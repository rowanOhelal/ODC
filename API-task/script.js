const container = document.querySelector('.container');

let getData = async ()=>{
    let error;
    let result = await fetch('https://dummyjson.com/products')
    .then((res)=>res.json())
    .catch((er)=>{error = er})

    let products = [...result?.products];

    products.map((product)=>{
        if(product.thumbnail){
            container.innerHTML += `
            <div class="card">
                <img src='${product.thumbnail}' alt="${product.title}"/>
                <h3>${product.title}</h3>
                <p>${product.price} EGP</p>
                <a href='./singleProduct.html?${product.id}' target='_blank'>Show More</a>
            </div>
            `;
        }
    });
}
getData();