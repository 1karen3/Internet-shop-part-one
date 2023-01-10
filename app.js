const categories = [
    { name: 'Clothing', id: 'clothing' },
    { name: 'Electronics', id: 'electronics' },
    { name: 'Food', id: 'food' },
    { name: 'Toys', id: 'toys' },
  ];
  
  const products = {
    clothing: [
      { name: 'T-Shirt', id: 'tshirt' },
      { name: 'Jeans', id: 'jeans' },
    ],
    electronics: [
      { name: 'Laptop', id: 'laptop' },
      { name: 'Smartphone', id: 'smartphone' },
    ],
    food: [
      { name: 'Bread', id: 'bread' },
      { name: 'Cheese', id: 'cheese' },
    ],
    toys: [
      { name: 'Doll', id: 'doll' },
      { name: 'Car', id: 'car' },
    ],
  };
  
  const categoryList = document.querySelector('.category-list');
  categoryList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      const categoryId = e.target.dataset.id;
      const productList = document.querySelector('.product-list');
  
      productList.innerHTML = '';
      products[categoryId].forEach((product) => {
        const li = document.createElement('li');
        li.dataset.id = product.id;
        li.textContent = product.name;
        productList.appendChild(li);
      });
    }
  });
  
  const productList = document.querySelector('.product-list');
  productList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      const productInfo = document.querySelector('.product-info');
      productInfo.innerHTML = '';
      productInfo.textContent = `Product Name: ${e.target.textContent}`;
  
      const buyButton = document.createElement('button');
      buyButton.textContent = 'Buy';
      productInfo.appendChild(buyButton);
    }
  });
  
  const productInfo = document.querySelector('.product-info');
  productInfo.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      alert('Product purchased!');
  
      const productList = document.querySelector('.product-list');
      productList.innerHTML = '';
      const productInfo = document.querySelector('.product-info');
      productInfo.innerHTML = '';
    }
  });