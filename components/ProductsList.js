export default function Products(){
  let products = "";
  let dict = [
    {
      "name": "Samsung Galaxy S22 Ultra",
      "price": "$899"
    },
    {
      "name": "PS5 Controller",
      "price": "$499"
    },{
      "name": "Sauvage Perfume",
      "price": "$99"
    },{
      "name": "Apple Watch Ultra 2",
      "price": "$799"
    },{
      "name": "Apple iPhone 13 pro max",
      "price": "$899"
    },{
      "name": "Apple MacBook Pro M3 ",
      "price": "$1299"
    },{
      "name": "Blue Vans Shoes",
      "price": "$69"
    },{
      "name": "Dyson Supersonic Hair Dryer",
      "price": "$499"
    },{
      "name": "Shiba Inu Action Figure",
      "price": "$48"
    },{
      "name": "Shiba Inu Action Figure",
      "price": "$48"
    },{
      "name": "Shiba Inu Action Figure",
      "price": "$48"
    },{
      "name": "Shiba Inu Action Figure",
      "price": "$48"
    }
  ]
  for(let i=0; i<12 ; i++){
    products += `<a href="#" class="group" draggable="false">
                  <div class="flex w-full overflow-hidden rounded-lg bg-gray-200 justify-center">
                    <canvas class="prod${i+1}"></canvas>
                  </div>
                  <h3 class="mt-4 text-sm text-gray-700">${dict[i].name}</h3>
                  <p class="mt-1 text-lg font-medium text-gray-900">${dict[i].price}</p>
                </a>`
  }

    document.querySelector('#product').innerHTML = `
    <div class="bg-white  h-full overflow-auto ">
    <div class="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8">
      <h2 class=" text-2xl font-semibold p-10 ">Products</h2>
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8" id="prodGird">
        ` + 
          products
        + `
      </div>
    </div>
  </div>
    `

}


