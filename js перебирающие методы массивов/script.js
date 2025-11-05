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
    "лук": 5
};

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

// 1. Расчет себестоимости с помощью reduce
blyudo.forEach(dish => {
    dish.costprice = dish.ingredients.reduce((totalCost, ingredient) => {
        return totalCost + (ingredientsCost[ingredient] || 0);
    }, 0);
    
    dish.saleprice = Math.round(dish.costprice * 1.5);
});

// 2. Массив с названием и стоимостью с помощью map
const simplifiedMenu = blyudo.map(dish => {
    return {
        name: dish.name,
        price: dish.saleprice
    };
});
console.log("Упрощенное меню:", simplifiedMenu);

// 3. Проверка на наличие вегетарианских блюд с помощью some
const nonVegetarianIngredients = ["мясо", "фарш"];
const hasVegetarianDish = blyudo.some(dish => {
    return !dish.ingredients.some(ingredient => 
        nonVegetarianIngredients.includes(ingredient)
    );
});
console.log("Есть ли вегетарианские блюда:", hasVegetarianDish);

// 4. Проверка полностью вегетарианского меню с помощью every
const isFullyVegetarian = blyudo.every(dish => {
    return !dish.ingredients.some(ingredient => 
        nonVegetarianIngredients.includes(ingredient)
    );
});
console.log("Полностью вегетарианское меню:", isFullyVegetarian);

// 5. Массив вегетарианских блюд с помощью filter
const vegetarianDishes = blyudo.filter(dish => {
    return !dish.ingredients.some(ingredient => 
        nonVegetarianIngredients.includes(ingredient)
    );
});
console.log("Вегетарианские блюда:", vegetarianDishes);

// Формирование полного меню для вывода
let fullMenu = "МЕНЮ РЕСТОРАНА\n";

blyudo.forEach(dish => {
    let menuItem = `
${dish.name.toUpperCase()}
Состав: ${dish.ingredients.join(', ')}
Себестоимость: ${dish.costprice} руб.
Цена: ${dish.saleprice} руб.
-------------------
`;
    fullMenu += menuItem;
});

console.log(fullMenu);
alert(fullMenu);
