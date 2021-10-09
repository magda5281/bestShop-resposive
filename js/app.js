const form =  document.querySelector(".calc__form");
console.log(form);
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


const orderSummary = summary.querySelector('li[data-id="orders"]');
const orderQuantity = orderSummary.querySelector(".item__calc");
const orderPriceTotal = orderSummary.querySelector(".item__price");
const orderPrice = 2;

const packageSummary = summary.querySelector('li[data-id="package"]');
const packageType = packageSummary.querySelector(".item__calc");
const packagePriceTotal = packageSummary.querySelector(".item__price");
const basicPrice = 0;
const professionalPrice = 50;
const premiumPrice = 70;

const accountingSummary = summary.querySelector('li[data-id="accounting"]');
const accountingPrice = accountingSummary.querySelector(".item__price");
const accountingPriceValue = 35;

const terminalSummary = summary.querySelector('li[data-id="terminal"]');
const terminalPrice = terminalSummary.querySelector(".item__price");
const terminalPriceValue = 6;

// const totalOrderSummary = summary.querySelector("#total-price");
// const totalPriceElem = totalOrderSummary.querySelector(".total__price");
// let totalOrderPrice;

 products.addEventListener("change", function (event) {

     let productOrder = products.value * productPrice;
    productSummary.style.display = "flex";
    productQuantity.innerText = products.value + " * " + "$" + productPrice;
    productPriceTotal.innerText ="$" + productOrder;


 });


orders.addEventListener("change", function(event) {
    orderSummary.style.display = "flex";
    orderQuantity.innerText = orders.value + " * " + "$" + orderPrice;
    let orderValue = orders.value * orderPrice
    orderPriceTotal.innerText = "$" + orderValue;
} );

select.addEventListener("click", function (event) {
   // console.log("select") ;
   dropdown.style.display = "block";
});

packages.forEach(function (element) {
    element.addEventListener("click", function (event) {
         select.innerText = this.innerText ;
         dropdown.style.display = "none";
         packageSummary.style.display = "flex";
         packageType.innerText = this.innerText;
         if (this.innerText === "Basic") {
             packagePriceTotal.innerText = "$"+ basicPrice;
         }
         if (this.innerText === "Professional") {
             packagePriceTotal.innerText = "$" + professionalPrice;
         }
         if (this.innerText === "Premium") {
             packagePriceTotal.innerText = "$" + premiumPrice;
         }
         // else {
         //     dropdown.style.display = "none";
         // }

    });
});

accounting.addEventListener("change", function (event) {
    accountingSummary.style.display = "flex";
    accountingPrice.innerText = "$" + accountingPriceValue;

    if (accounting.checked === false) {
        accountingSummary.style.display = "none";
    }

});

terminal.addEventListener("change", function (event) {
    terminalSummary.style.display = "flex";
    terminalPrice.innerText = "$" + terminalPriceValue;

    if (terminal.checked === false) {
        terminalSummary.style.display = "none";
    }

});

