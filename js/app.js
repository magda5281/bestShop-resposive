const form = document.querySelector('.calc__form');
const summary = document.querySelector('.calc__summary');

// Inputs
const products = form.querySelector('#products');
const orders = form.querySelector('#orders');
const select = form.querySelector('.select__input');
const dropdown = form.querySelector('.select__dropdown');
const packages = dropdown.querySelectorAll('li');
const accounting = form.querySelector('#accounting');
const terminal = form.querySelector('#terminal');

// Summary Items
const summaryItems = {
  products: summary.querySelector('li[data-id="products"]'),
  orders: summary.querySelector('li[data-id="orders"]'),
  package: summary.querySelector('li[data-id="package"]'),
  accounting: summary.querySelector('li[data-id="accounting"]'),
  terminal: summary.querySelector('li[data-id="terminal"]'),
};

// Price Mapping
const prices = {
  product: 5,
  order: 2,
  package: {
    basic: 0,
    professional: 50,
    premium: 70,
  },
  accounting: 35,
  terminal: 6,
};

// Order Summary
const totalOrderSummary = summary.querySelector('#total-price');
const totalOrderElem = totalOrderSummary.querySelector('.total__price');
let totalOrderPrice = 0;

// Function: Update Total Price
function updateTotal() {
  totalOrderPrice =
    (products.value * prices.product || 0) +
    (orders.value * prices.order || 0) +
    (summaryItems.package.dataset.price || 0) +
    (accounting.checked ? prices.accounting : 0) +
    (terminal.checked ? prices.terminal : 0);

  totalOrderElem.innerText = `$${totalOrderPrice}`;
  totalOrderSummary.style.display = totalOrderPrice ? 'flex' : 'none';
}

// Function: Update Summary Item
function updateSummaryItem(item, quantity, price) {
  if (quantity > 0) {
    item.style.display = 'flex';
    item.querySelector('.item__calc').innerText = `${quantity} * $${price}`;
    item.querySelector('.item__price').innerText = `$${quantity * price}`;
  } else {
    item.style.display = 'none';
  }
}

// Event: Product & Order Input Change
form.addEventListener('input', (event) => {
  if (event.target === products) {
    updateSummaryItem(summaryItems.products, products.value, prices.product);
  }
  if (event.target === orders) {
    updateSummaryItem(summaryItems.orders, orders.value, prices.order);
  }
  updateTotal();
});

// Event: Package Selection (Dropdown)
select.addEventListener('click', () => {
  dropdown.style.display =
    dropdown.style.display === 'block' ? 'none' : 'block';
});

// Event: Selecting a Package
dropdown.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    const selectedPackage = event.target.dataset.value;
    select.innerText = event.target.innerText;
    dropdown.style.display = 'none';

    summaryItems.package.style.display = 'flex';
    summaryItems.package.querySelector('.item__calc').innerText =
      event.target.innerText;
    summaryItems.package.querySelector(
      '.item__price'
    ).innerText = `$${prices.package[selectedPackage]}`;
    summaryItems.package.dataset.price = prices.package[selectedPackage];

    updateTotal();
  }
});

// Event: Checkbox Selection (Accounting & Terminal)
form.addEventListener('change', (event) => {
  if (event.target === accounting) {
    summaryItems.accounting.style.display = accounting.checked
      ? 'flex'
      : 'none';
    summaryItems.accounting.querySelector(
      '.item__price'
    ).innerText = `$${prices.accounting}`;
  }
  if (event.target === terminal) {
    summaryItems.terminal.style.display = terminal.checked ? 'flex' : 'none';
    summaryItems.terminal.querySelector(
      '.item__price'
    ).innerText = `$${prices.terminal}`;
  }
  updateTotal();
});
