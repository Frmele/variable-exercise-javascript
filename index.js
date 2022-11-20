console.log(37);
console.log("Francesca");
console.log("23/07/1985");

let bread=2;
let peanut_butter=3;
console.log(bread+peanut_butter)

let box_pokemon_cards = 2348;
let gain = 0.10;
let total_euro_value = box_pokemon_cards*gain;
console.log(total_euro_value)

let  bike_cost = 200;
let discount = 0.10;
let discounted_price = bike_cost*discount;
let total_discounted = bike_cost-discounted_price;
console.log(total_discounted)

let  includingVat = 0.21;
let tot_2021_invoice = 67280;
let taxes = tot_2021_invoice*includingVat;
console.log(taxes)

let more_budget = 50000;
let playground = 1800;
let parking_space = 2150;
let half_budget = more_budget/2;
let playground_calculation = half_budget%playground;
console.log(playground_calculation)
console.log((half_budget-(half_budget%playground)) / playground);

// 1: Bread and peanut butter
const breadPrice = 2;
const peanutButterPrice = 3;
console.log(breadPrice + peanutButterPrice);

// 2: Pokemon cards
const numberOfCards = 2348;
const pricePerCard = 0.1;
console.log(numberOfCards * pricePerCard);

// 3: Bike with discount
const bikePrice = 200
const discountPercentage = 10
console.log(bikePrice * ((100 - discountPercentage)/100));

// 4: Freelancer VAT
const totalInvoicedAmount = 67280;
const vatPercentage = 21;
const totalInvoicedAmountWithoutVat = totalInvoicedAmount / ((100 + vatPercentage) / 100);
const vatAmount = totalInvoicedAmount - totalInvoicedAmountWithoutVat;
console.log(vatAmount);
// We can round this
console.log(Math.round(vatAmount));

// 5: New playgrounds
const budget = 50000;
const playgroundPrice = 1800;
const fullBudgetForPlaygrounds = budget / 2;
const remainderBudget = fullBudgetForPlaygrounds % playgroundPrice;
const allocatedBudgetForPlaygrounds = fullBudgetForPlaygrounds - remainderBudget;
const numberOfPlaygrounds = allocatedBudgetForPlaygrounds/playgroundPrice;
console.log(numberOfPlaygrounds);