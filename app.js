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
    const buyerName = document.createElement('input');
    buyerName.setAttribute('placeholder', 'Name of the buyer');
    productInfo.appendChild(buyerName);

    const cityList = document.createElement('select');
    const cityOption1 = document.createElement('option');
    cityOption1.textContent = 'Kiev';
    const cityOption2 = document.createElement('option');
    cityOption2.textContent = 'Odessa';
    const cityOption3 = document.createElement('option');
    cityOption3.textContent = 'Bombas';
    cityList.appendChild(cityOption1);
    cityList.appendChild(cityOption2);
    cityList.appendChild(cityOption3);
    productInfo.appendChild(cityList);

    const deliveryMethodLabel = document.createElement('label');
    deliveryMethodLabel.textContent = 'Delivery Method: ';
    const deliveryMethodMail = document.createElement('input');
    deliveryMethodMail.setAttribute('type', 'radio');
    deliveryMethodMail.setAttribute('name', 'delivery-method');
    deliveryMethodMail.setAttribute('value', 'mail');
    const deliveryMethodMailLabel = document.createElement('label');
    deliveryMethodMailLabel.textContent = 'Mail';
    const deliveryMethodCourier = document.createElement('input');
    deliveryMethodCourier.setAttribute('type', 'radio');
    deliveryMethodCourier.setAttribute('name', 'delivery-method');
    deliveryMethodCourier.setAttribute('value', 'courier');
    const deliveryMethodCourierLabel = document.createElement('label');
    deliveryMethodCourierLabel.textContent = 'Courier';
    productInfo.appendChild(deliveryMethodLabel);
    productInfo.appendChild(deliveryMethodMail);
    productInfo.appendChild(deliveryMethodMailLabel);
    productInfo.appendChild(deliveryMethodCourier);
    productInfo.appendChild(deliveryMethodCourierLabel);
    const paymentMethodLabel = document.createElement('label');
    paymentMethodLabel.textContent = 'Payment Method: ';
    const paymentMethodPostpaid = document.createElement('input');
    paymentMethodPostpaid.setAttribute('type', 'radio');
    paymentMethodPostpaid.setAttribute('name', 'payment-method');
    paymentMethodPostpaid.setAttribute('value', 'postpaid');
    const paymentMethodPostpaidLabel = document.createElement('label');
    paymentMethodPostpaidLabel.textContent = 'Postpaid';
    const paymentMethodCard = document.createElement('input');
    paymentMethodCard.setAttribute('type', 'radio');
    paymentMethodCard.setAttribute('name', 'payment-method');
    paymentMethodCard.setAttribute('value', 'card');
    const paymentMethodCardLabel = document.createElement('label');
    paymentMethodCardLabel.textContent = 'Card';
    productInfo.appendChild(paymentMethodLabel);
    productInfo.appendChild(paymentMethodPostpaid);
    productInfo.appendChild(paymentMethodPostpaidLabel);
    productInfo.appendChild(paymentMethodCard);
    productInfo.appendChild(paymentMethodCardLabel);

    const quantityLabel = document.createElement('label');
    quantityLabel.textContent = 'Quantity of products purchased: ';
    const quantity = document.createElement('input');
    quantity.setAttribute('type', 'number');
    productInfo.appendChild(quantityLabel);
    productInfo.appendChild(quantity);

    const commentLabel = document.createElement('label');
    commentLabel.textContent = 'Comment on the order: ';
    const comment = document.createElement('input');
    comment.setAttribute('type', 'text');
    productInfo.appendChild(commentLabel);
    productInfo.appendChild(comment);

    const confirmButton = document.createElement('button');
    confirmButton.textContent = 'Confirm';
    productInfo.appendChild(confirmButton);
  }
})
productInfo.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Confirm') {
    const buyerName = document.querySelector('[placeholder="Name of the buyer"]');
    if (!buyerName.value) {
      alert('The buyer name is mandatory');
      return;
    }

    const city = document.querySelector('select');
    if (!city.value) {
      alert('The city is mandatory');
      return;
    }

    const deliveryMethod = document.querySelector('[name="delivery-method"]:checked');
    if (!deliveryMethod) {
      alert('The delivery method is mandatory');
      return;
    }
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const buyerName = document.querySelector('[name="buyer-name"]');
    if (!buyerName.value) {
      alert('The buyer name is mandatory');
      return;
    }
  

    const city = document.querySelector('[name="city"]');
    if (!city.value) {
      alert('The city is mandatory');
      return;
    }

    const deliveryMethod = document.querySelector('[name="delivery-method"]:checked');
    if (!deliveryMethod) {
      alert('The delivery method is mandatory');
      return;
    }

    const paymentMethod = document.querySelector('[name="payment-method"]:checked');
    if (!paymentMethod) {
      alert('The payment method is mandatory');
      return;
    }

    const quantity = document.querySelector('[name="quantity"]');
    if (!quantity.value) {
      alert('The quantity is mandatory');
      return;
    }
  });
});



const paymentMethod = document.querySelector('[name="payment-method"]:checked');
    if (!paymentMethod) {
      alert('The payment method is mandatory');
      return;
    }

    const quantity = document.querySelector('[name="quantity"]');
    if (!quantity.value) {
      alert('The quantity is mandatory');
      return;
    }

    alert(`Thanks for buying. Your order will be delivered to ${buyerName.value} in ${city.value} using ${deliveryMethod.value} and payment method ${paymentMethod.value}. Quantity purchased: ${quantity.value}`);
  }
});