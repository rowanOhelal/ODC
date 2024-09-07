const container = document.querySelector('.container');

let queries = new URLSearchParams(location.search);
let pid = queries.get('id');

let getData = async ()=>{
    let result = await fetch('https://dummyjson.com/products/' + pid);
    let product = await result.json();

    container.innerHTML += `
        <h1>${product.title}</h1>
        <div class="card">
            <img src='${product.thumbnail}' alt="${product.title}"/>
            <div class="card-content">
                <p class="price">Price: <span>${product.price}</span> EGP</p>
                <p class="description"><span>Description: </span>${product.description}</p>
                <div class="stock-rating">
                    <p class="stock">Stock: <span>${product.stock}</span></p>
                    <p class="rating">Rating: <span>${product.rating}</span></p>
                </div>
                <button>Add to cart</button>
            </div>
        </div>
    `;
}

getData();