const form =  document.querySelector(".calc__form");
const products = form.querySelector ("#products");
const orders = form.querySelector("#orders");
const select = form.querySelector(".select__input");
const dropdown = form.querySelector(".select__dropdown");
const packages = dropdown.querySelectorAll("li");
const accounting = form.querySelector("#accounting");
const terminal = form.querySelector("#terminal");

const summary = document.querySelector(".calc__summary");

const productSummary = summary.querySelector('li[data-id="products"]');
const productQuantity = productSummary.querySelector(".item__calc");
const productPriceTotal = productSummary.querySelector(".item__price");
const productPrice = 5;
let productSum = 0;

const orderSummary = summary.querySelector('li[data-id="orders"]');
const orderQuantity = orderSummary.querySelector(".item__calc");
const orderPriceTotal = orderSummary.querySelector(".item__price");
const orderPrice = 2;
let orderSum = 0;

const packageSummary = summary.querySelector('li[data-id="package"]');
const packageType = packageSummary.querySelector(".item__calc");
const packagePriceTotal = packageSummary.querySelector(".item__price");
const basicPrice = 0;
const professionalPrice = 50;
const premiumPrice = 70;
let packagesValue = 0;

const accountingSummary = summary.querySelector('li[data-id="accounting"]');
const accountingPrice = accountingSummary.querySelector(".item__price");
let accountingPriceValue = 0;

const terminalSummary = summary.querySelector('li[data-id="terminal"]');
const terminalPrice = terminalSummary.querySelector(".item__price");
let terminalPriceValue = 0;

const totalOrderSummary = summary.querySelector("#total-price");
const totalOrderElem = totalOrderSummary.querySelector(".total__price");
let totalOrderPrice = 0;

function showTotal(){
    totalOrderSummary.style.display = "flex";
    totalOrderPrice = productSum + orderSum + packagesValue + accountingPriceValue + terminalPriceValue;
    totalOrderElem.innerText = "$" + totalOrderPrice;
}

 products.addEventListener("change", function (event) {
     productSum = products.value * productPrice;
    productSummary.style.display = "flex";
    productQuantity.innerText = products.value + " * " + "$" + productPrice;
    productPriceTotal.innerText ="$" + productSum;

    showTotal();

 });

orders.addEventListener("change", function(event) {
    orderSummary.style.display = "flex";
    orderQuantity.innerText = orders.value + " * " + "$" + orderPrice;
    orderSum = orders.value * orderPrice
    orderPriceTotal.innerText = "$" + orderSum;

   showTotal();

} );

select.addEventListener("click", function (event) {
   dropdown.style.display = "block";
});

packages.forEach(function (element) {
    element.addEventListener("click", function (event) {
         select.innerText = this.innerText ;
         dropdown.style.display = "none";
         packageSummary.style.display = "flex";
         packageType.innerText = this.innerText;
         if (this.innerText === "Basic") {
             packagesValue = basicPrice;
             packagePriceTotal.innerText = "$"+ basicPrice;
         }
         if (this.innerText === "Professional") {
             packagesValue = professionalPrice;
             packagePriceTotal.innerText = "$" + professionalPrice;
         }
         if (this.innerText === "Premium") {
             packagesValue = premiumPrice;
             packagePriceTotal.innerText = "$" + premiumPrice;
         }

         showTotal();
    });
});

accounting.addEventListener("change", function (event) {

    if (accounting.checked === true) {
        accountingSummary.style.display = "flex";
        accountingPriceValue = 35;
        accountingPrice.innerText = "$" + accountingPriceValue;
    }

    if (accounting.checked === false) {
        accountingSummary.style.display = "none";
       accountingPriceValue = 0;
    }
    showTotal();
});

terminal.addEventListener("change", function (event) {

    if (terminal.checked === true) {
        terminalSummary.style.display = "flex";
        terminalPriceValue = 6;
        terminalPrice.innerText = "$" + terminalPriceValue;
    }

    if (terminal.checked === false) {
        terminalSummary.style.display = "none";
        terminalPriceValue = 0;
        totalOrderSummary.style.display = "none";
    }
    showTotal();

});

