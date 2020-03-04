var pizzaSize = ["Small", "Medium", "Large", "Mega"];
var baseSize = ["Thin", "Medium", "Thick"];
var toppping = ["Pepperoni", "Mushrooms", "Onions", "Sausage", "Bacon", "Extra Cheese", "Black Olives", "Green Peppers", "Pineapple", "Spinach"];
var amount = 0;
var adder = 0;
var valueTaker;
var baseValueTaker, base;
var toppingValueTaker, toppingTaker;
var selectedSize, selectedBase, selectedTopping;
var myNewPizza;
var deliveryCharge = 300;
var totalCost;


// 3
//Testing pizza selector using Constructor Functions
//This will be used for a category that a user can add/create their own custom pizza recipe/style
function myPizza(selectedSize, base, amount){
    this.selectedSize = selectedSize;
    this.base = base;
    this.amount = amount;
}
function newPizza(){
    myNewPizza = new myPizza(selectedTopping, selectedSize, amount, base);
}


// 1
//Pizza toppings handlers
function selectingTopping(){
    if(selectedSize=="Small"){
        toppingValueTaker = 0;
    }else if(selectedSize=="Medium"){
        toppingValueTaker = 50;
    }else if(selectedSize=="Large"){
        toppingValueTaker = 150;
    }else if(selectedSize=="Mega"){
        toppingValueTaker = 250;
    }else{
        alert("Pick a topping and pizza size");
    }
}




// 2
//Selecting toppings handlers
function pepperoni(){
    selectedTopping = toppping[0];
}

function mushrooms(){
    selectedTopping = toppping[1];
}

function onions(){
    selectedTopping = toppping[2];
}

function sausage(){
    selectedTopping = toppping[3];
}

function bacon(){
    selectedTopping = toppping[4];
}

function extraCheese(){
    selectedTopping = toppping[5];
}

function blackOlives(){
    selectedTopping = toppping[6];
}

function greenPepper(){
    selectedTopping = toppping[7];
}

function pineapple(){
    selectedTopping = toppping[8];
}

function spinach(){
    selectedTopping = toppping[9];
}


// 2
//Pizza size selection handlers
function pizzasmall(){
    valueTaker = document.getElementById('small').value;
    selectedSize = pizzaSize[0];
}

function pizzamedium(){
    valueTaker = document.getElementById('medium').value;
    selectedSize = pizzaSize[1];
}

function pizzalarge(){
    valueTaker = document.getElementById('large').value;
    selectedSize = pizzaSize[2];
}

function pizzamega(){
    valueTaker = document.getElementById('mega').value;
    selectedSize = pizzaSize[3];
}

// 2
//Base selection handlers
function thinbase(){
    selectedBase = document.getElementById('thinbase').value;
}

function mediumbase(){
    selectedBase = document.getElementById('mediumbase').value;
}

function thickbase(){
    selectedBase = document.getElementById('thickbase').value;
}
// 1
//Pizza amount handler for checkout
function pizzasize(){
    if(valueTaker==500){
        amount = adder + baseValueTaker + toppingValueTaker + 500;
        alert(`You have selected ${selectedSize} pizza size with ${base} base and ${selectedTopping} topping. Your amount is ${amount} .`);
        var location = prompt("Do you want your pizza delivered ? Enter address :");
        totalCost = deliveryCharge + amount;
        alert(`Your Pizza will be delivered at ${location} and the delivery charges are ${deliveryCharge} . The total cost is ${totalCost}`);
        amount = 0;
        selectedSize = null;
    }else if(valueTaker==700){
        amount = adder + baseValueTaker + toppingValueTaker + 700;
        alert(`You have selected ${selectedSize} pizza size with ${base} base and ${selectedTopping} topping. Your amount is ${amount} .`);
        var location = prompt("Do you want your pizza delivered ? Enter address :");
        totalCost = deliveryCharge + amount;
        alert(`Your Pizza will be delivered at ${location} and the delivery charges are ${deliveryCharge} . The total cost is ${totalCost}`);
        amount = 0;
        selectedSize = null;
    }else if(valueTaker==1000){
        amount = adder + baseValueTaker + toppingValueTaker + 1000;
        alert(`You have selected ${selectedSize} pizza size with ${base} base and ${selectedTopping} topping. Your amount is ${amount} .`);
        var location = prompt("Do you want your pizza delivered ? Enter address :");
        totalCost = deliveryCharge + amount;
        alert(`Your Pizza will be delivered at ${location} and the delivery charges are ${deliveryCharge} . The total cost is ${totalCost}`);
        amount = 0;
        selectedSize = null;
    }else if(valueTaker==1200){
        amount = adder + baseValueTaker + toppingValueTaker + 1200;
        alert(`You have selected ${selectedSize} pizza size with ${base} base and ${selectedTopping} topping. Your amount is ${amount} .`);
        var location = prompt("Do you want your pizza delivered ? Enter address :");
        totalCost = deliveryCharge + amount;
        alert(`Your Pizza will be delivered at ${location} and the delivery charges are ${deliveryCharge} . The total cost is ${totalCost}`);
        amount = 0;
        selectedSize = null;
    }
}

// 1
//Base size handlers for pricing
function pizzaBaseSize(){
    if(selectedBase=="thin"){
        base = baseSize[0];
        baseValueTaker = 0;
    }else if(selectedBase=="medium"){
        base = baseSize[1];
        baseValueTaker = 100;
    }else if(selectedBase=="thick"){
        base = baseSize[2];
        baseValueTaker = 200;
    }
}

var pizzaSize = ["Small", "Medium", "Large", "Mega"];
var baseSize = ["Thin", "Medium", "Thick"];
var toppping = ["Pepperoni", "Mushrooms", "Onions", "Sausage", "Bacon", "Extra Cheese", "Black Olives", "Green Peppers", "Pineapple", "Spinach"];
var amount = 0;
var adder = 0;
var valueTaker;
var baseValueTaker, base;
var toppingValueTaker, toppingTaker;
var selectedSize, selectedBase, selectedTopping;
var myNewPizza;
var totalCost;
var crispyy, stuffedd, glutenFreee, crust, crustValue;
var pizza_amount = 0, totalPizzaCost = 0;

// 3
//Testing pizza selector using Constructor Functions
//This will be used for a category that a user can add/create their own custom pizza recipe/style
function myPizza(selectedSize, base, amount){
    this.selectedSize = selectedSize;
    this.base = base;
    this.amount = amount;
}
function newPizza(){
    myNewPizza = new myPizza(selectedTopping, selectedSize, amount, base);
}


// 1
//Pizza toppings handlers
function selectingTopping(){
    if(selectedSize=="Small"){
        toppingValueTaker = 0;
    }else if(selectedSize=="Medium"){
        toppingValueTaker = 50;
    }else if(selectedSize=="Large"){
        toppingValueTaker = 150;
    }else if(selectedSize=="Mega"){
        toppingValueTaker = 250;
    }else{
        alert("Pick a topping and pizza size");
    }
}

// 1
//Crust handler
// function crispy(){
//     crispyy = document.getElementById('crispy').value;
//     crustValue = "Crispy";
// }

// function glutenFree(){
//     stuffedd = document.getElementById('stuffed').value;
//     crustValue = "Gluten-Free";
// }

// function stuffed(){
//     glutenFreee = document.getElementById('glutenFree').value;
//     crustValue = "Stuffed";
// }

// // 1
// //crust value handlers
// function crustVal(){
    
// }




// 2
//Selecting toppings handlers
function pepperoni(){
    selectedTopping = toppping[0];
}

function mushrooms(){
    selectedTopping = toppping[1];
}

function onions(){
    selectedTopping = toppping[2];
}

function sausage(){
    selectedTopping = toppping[3];
}

function bacon(){
    selectedTopping = toppping[4];
}

function extraCheese(){
    selectedTopping = toppping[5];
}

function blackOlives(){
    selectedTopping = toppping[6];
}

function greenPeppers(){
    selectedTopping = toppping[7];
}

function pineapple(){
    selectedTopping = toppping[8];
}

function spinach(){
    selectedTopping = toppping[9];
}


// 2
//Pizza size selection handlers
function pizzasmall(){
    valueTaker = document.getElementById('small').value;
    selectedSize = pizzaSize[0];
}

function pizzamedium(){
    valueTaker = document.getElementById('medium').value;
    selectedSize = pizzaSize[1];
}

function pizzalarge(){
    valueTaker = document.getElementById('large').value;
    selectedSize = pizzaSize[2];
}

function pizzamega(){
    valueTaker = document.getElementById('mega').value;
    selectedSize = pizzaSize[3];
}

// 2
//Base selection handlers
function thinbase(){
    selectedBase = document.getElementById('thinbase').value;
}

function mediumbase(){
    selectedBase = document.getElementById('mediumbase').value;
}

function thickbase(){
    selectedBase = document.getElementById('thickbase').value;
}




// 1
//Pizza amount handler for checkout
function pizzasize(){
    if(valueTaker==500){
        var pizzaAmount = prompt("How many pizzas do you want ?");
        var location = prompt("Do you want your pizza delivered ? Enter address :");
        var deliveryCharge = 300;
        pizza_amount = 500;
        amount = adder + baseValueTaker + toppingValueTaker + pizza_amount;
        totalPizzaCost = amount * pizzaAmount;
        totalCost = totalPizzaCost + deliveryCharge;        
        alert(`You have selected ${selectedSize} pizza size with ${base} base and ${selectedTopping} topping. Your amount is ${totalPizzaCost} . The total pizzas ordered is ${pizzaAmount} .`);
        alert(`Your Pizza will be delivered at ${location} and the delivery charges are ${deliveryCharge} . The total cost is ${totalCost} .`);
        amount = 0;
        selectedSize = null;
        selectedSize = null;
    }else if(valueTaker==700){
        var pizzaAmount = prompt("How many pizzas do you want ?");
        var location = prompt("Do you want your pizza delivered ? Enter address :");
        var deliveryCharge = 300;
        pizza_amount = 700;
        amount = adder + baseValueTaker + toppingValueTaker + pizza_amount;
        totalPizzaCost = amount * pizzaAmount;
        totalCost = totalPizzaCost + deliveryCharge;        
        alert(`You have selected ${selectedSize} pizza size with ${base} base and ${selectedTopping} topping. Your amount is ${totalPizzaCost} . The total pizzas ordered is ${pizzaAmount} .`);
        alert(`Your Pizza will be delivered at ${location} and the delivery charges are ${deliveryCharge} . The total cost is ${totalCost} .`);
        amount = 0;
        selectedSize = null;
    }else if(valueTaker==1000){
        var pizzaAmount = prompt("How many pizzas do you want ?");
        var location = prompt("Do you want your pizza delivered ? Enter address :");
        var deliveryCharge = 300;
        pizza_amount = 1000;
        amount = adder + baseValueTaker + toppingValueTaker + pizza_amount;
        totalPizzaCost = amount * pizzaAmount;
        totalCost = totalPizzaCost + deliveryCharge;        
        alert(`You have selected ${selectedSize} pizza size with ${base} base and ${selectedTopping} topping. Your amount is ${totalPizzaCost} . The total pizzas ordered is ${pizzaAmount} .`);
        alert(`Your Pizza will be delivered at ${location} and the delivery charges are ${deliveryCharge} . The total cost is ${totalCost} .`);
        amount = 0;
        selectedSize = null;
    }else if(valueTaker==1200){
        var pizzaAmount = prompt("How many pizzas do you want ?");
        var location = prompt("Do you want your pizza delivered ? Enter address :");
        var deliveryCharge = 300;
        pizza_amount = 1200;
        amount = adder + baseValueTaker + toppingValueTaker + pizza_amount;
        totalPizzaCost = amount * pizzaAmount;
        totalCost = totalPizzaCost + deliveryCharge;        
        alert(`You have selected ${selectedSize} pizza size with ${base} base and ${selectedTopping} topping. Your amount is ${totalPizzaCost} . The total pizzas ordered is ${pizzaAmount} .`);
        alert(`Your Pizza will be delivered at ${location} and the delivery charges are ${deliveryCharge} . The total cost is ${totalCost} .`);
        amount = 0;
        selectedSize = null;
    }
}

// 1
//Base size handlers for pricing
function pizzaBaseSize(){
    if(selectedBase=="thin"){
        base = baseSize[0];
        baseValueTaker = 0;
    }else if(selectedBase=="medium"){
        base = baseSize[1];
        baseValueTaker = 100;
    }else if(selectedBase=="thick"){
        base = baseSize[2];
        baseValueTaker = 200;
    }
//     if(crustValue=="crispy"){
//         crust=50;
//     }else if(crustValue=="stuffed"){
//         crust=70;
//     }else if(crustV=="glutenfree"){
//         crust=100;
//     }
}

