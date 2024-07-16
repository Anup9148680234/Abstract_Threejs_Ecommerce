const dict = [
    {
      "name": "Samsung Galaxy S22 Ultra",
      "price": "$899",
      "url": "/samsung_galaxy_s22_ultra",
      
    },
    {
      "name": "PS5 Controller",
      "price": "$499",
      "url": "/ps5"
    },{
      "name": "Sauvage Perfume",
      "price": "$99",
      "url": "/sauvage_perfume"
    },{
      "name": "Apple Watch Ultra 2",
      "price": "$799",
      "url": "/apple_watch_ultra_2"
    },{
      "name": "Apple iPhone 13 pro max",
      "price": "$899",
      "url": "/iphone_13_pro_max"
    },{
      "name": "Apple MacBook Pro M3 ",
      "price": "$1299",
      "url": "/macbook_pro_m3"
    },{
      "name": "Blue Vans Shoes",
      "price": "$69",
      "url": "/blue_vans_shoes"
    },{
      "name": "Dyson Supersonic Hair Dryer",
      "price": "$499",
      "url": "/dyson_supersonic_hair_dryer"
    },{
      "name": "Shiba Inu Action Figure",
      "price": "$48",
      "url": "/shiba_inu_action_figure"
    }
];

const showHomPage = false;

function getSlugFromUrl() {
    const pathArray = window.location.pathname.split('/');
    return '/' + pathArray[pathArray.length - 1];
}

function findProductBySlug(slug) {
    return dict.find(product => product.url === slug);
}

function renderProductDetails(product) {
    const productContainer = document.getElementById('product-details');
    if (product) {
        productContainer.innerHTML = `
            <h1>${product.name}</h1>
            <p>Price: ${product.price}</p>
        `;
    } else {
        productContainer.innerHTML = `<p>Product not found</p>`;
    }
}

(function() {
    const slug = getSlugFromUrl();
    const product = findProductBySlug(slug);
    if(slug == ''){
        showHomPage = true;
    }
    else{
        showHomPage = false;
    }
    renderProductDetails(product);
})();   