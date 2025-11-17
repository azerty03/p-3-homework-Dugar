for (let i = 2; i <= 10; i += 2) {
    alert(i); 
};

//выводится четные числа до 10 //

let i = 1;
while (true) {
    alert(`Итерация ${i}`);
    if (i === 5) {
        alert("итерация прервалась");
        break;
    }
    i++;
};
//прервется когда выведит 5//


const blyudo = [
{
    name: "Шулэн",
    ingredients: ["лапша", "мясо", "репчатый лук", "лавровый лист", "вода", "соль", "перец"],
    costprice: 80,
    saleprice: 150,
},

{
    name: "Шарбин",
    ingredients: ["тесто", "фарш", "соль", "лук", "перец"],
    costprice: 120,
    saleprice: 200,
}
];
const ingredientsCost = {
    "лапша": 10,
    "мясо": 100,
    "репчатый лук": 5,
    "лавровый лист": 5,
    "вода": 5,
    "соль": 5,
    "перец": 5,
    "тесто": 5,
    "фарш": 40,
    "лук": 5,
    "перец": 15
  };

for (let i = 0; i < blyudo.length; i++) {
    let dish = blyudo[i];
    let cost = 0;

    for (let j=0; j < dish.ingredients.length; j++) {
        let ingredient = dish.ingredients[j];
        cost += ingredientsCost[ingredient] || 0;
    }

    dish.costprice = cost;
    dish.saleprice = cost * 1.5;
}

console.log(blyudo);