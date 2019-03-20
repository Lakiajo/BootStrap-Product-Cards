console.log('Lakia Jones')

const products = [ 
{
    title: 'product1',
    description: 'Anything goes here.',
    imageUrl: 'https://www.longfield-gardens.com/_ccLib/image/plants/DETA-536.jpg',
    size: '4" x 4"',
    weight: '8oz.',
    price1: '3.00',
    price2: '8.00',
    price3: '15.00',
    validUnitil: '04/01/2019',
},

{
    title: 'product2',
    description: 'Anything goes here.',
    imageUrl: 'https://i.kinja-img.com/gawker-media/image/upload/s--OXeTp3Am--/c_scale,f_auto,fl_progressive,q_80,w_800/zec3un8rzcmblrdlyswb.jpg',
    size: '4" x 4"',
    weight: '8oz.',
    price1: '3.00',
    price2: '8.00',
    price3: '15.00',
    validUnitil: '04/01/2019',
},

  {  title: 'product3',
    description: 'Anything goes here.',
    imageUrl: 'https://cdn.shopify.com/s/files/1/1419/7120/products/Peony_Rubra_Plena.SHUT_1024x.jpg?v=1551737752',
    size: '4" x 4"',
    weight: '8oz.',
    price1: '3.00',
    price2: '8.00',
    price3: '15.00',
    validUnitil: '04/01/2019',
},
{
    title: 'product4',
    description: 'Anything goes here.',
    imageUrl: 'https://images.unsplash.com/photo-1468444326310-637139573e31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
    size: '4" x 4"',
    weight: '8oz.',
    price1: '3.00',
    price2: '8.00',
    price3: '15.00',
    validUnitil: '04/01/2019',
},
{
    title: 'product5',
    description: 'Anything goes here.',
    imageUrl: 'https://cdn.pixabay.com/photo/2013/08/22/19/18/rose-174817__340.jpg',
    size: '4" x 4"',
    weight: '8oz.',
    price1: '3.00',
    price2: '8.00',
    price3: '15.00',
    validUnitil: '04/01/2019',
},
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

  const productType = () => {
      let domString = '';
     
      domString += `<div class="row">`;
     products.forEach((product) => {
        domString += `<div class="col-4">`;
        domString += `<div class= "card" style="width: 18rem;">`;
        domString += `<h2>${product.title}</h2>`; 
        domString += `<image id="img" class="card-img-top" src=${product.imageUrl}></img>`; 
        domString += `<div class="card-body">`;
        domString += `<h5 class="card-title">Card title</h5>`;
        domString += `<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>`;
        domString += `<a href="#" class="btn btn-primary">Go somewhere</a>`;
        domString += `</div>`;
        domString += `</div>`;
        domString += `</div>`;

      })
  domString += `</div>`;
  
      printToDom('productContainer', domString);
  };
  
console.log('products', products);

const init = () =>{
    productType();
};
init();
 