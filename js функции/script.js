function getMin(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
const result = getMin(5, 10);
console.log(result);  

const blyudo = [
    {
      name: "Шулэн",
      ingredients: ["лапша", "мясо", "репчатый лук", "лавровый лист", "вода", "соль", "перец"],
      costPrice: 80,    // себестоимость
      salePrice: 150    // цена продажи
    },
    {
      name: "Шарбин",
      ingredients: ["тесто", "фарш", "соль", "лук", "перец"],
      costPrice: 120,
      salePrice: 200
    }
  ];
  

  function calculateProfit(dish) {
    return dish.salePrice - dish.costPrice;
  }
  
  blyudo.forEach(dish => {
    dish.profit = calculateProfit(dish);
  });
  
  console.log("Меню с расчетом прибыли:");
  blyudo.forEach(dish => {
    console.log(`
      Блюдо: ${dish.name}
      Ингредиенты: ${dish.ingredients.join(', ')}
      Себестоимость: ${dish.costPrice} руб.
      Цена продажи: ${dish.salePrice} руб.
      Прибыль: ${dish.profit} руб.
    `);
  });
  