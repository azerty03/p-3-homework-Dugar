// Записываем Jsonы в скрипт
Promise.all([
    fetch('ingredientsCost.json').then(r => r.json()),
    fetch('blyudo.json').then(r => r.json())
]).then(([ingredientsCost, blyudo]) => {

    // 1. Расчет себестоимости блюд
    blyudo.forEach(dish => {
        dish.costprice = dish.ingredients.reduce((total, ingredient) => {
            return total + (ingredientsCost[ingredient] || 0);
        }, 0);
        
        dish.saleprice = Math.round(dish.costprice * 1.5);
    });

    // 2. Формирование меню для вывода
    let fullMenu = "МЕНЮ РЕСТОРАНА\n\n";

    blyudo.forEach(dish => {
        fullMenu += `${dish.name}\nСостав: ${dish.ingredients.join(', ')}\nЦена: ${dish.saleprice} руб.\n\n`;
    });

    console.log(fullMenu);
    alert(fullMenu);

});