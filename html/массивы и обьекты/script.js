let shulen = {
    name: "Шулэн",
    ingredients: ["лапша", "мясо", "репчатый лук", "лавровый лист", "вода", "соль", "перец"],
    price: 150,
};

let sharbin = {
    name: "Шарбин",
    ingredients: ["тесто", "фарш", "соль", "лук", "перец"],
    price: 200,
};

let lovefoods = [shulen, sharbin];
alert(lovefoods.length);
console.log(lovefoods);

lovefoods.shift();
alert (lovefoods[0]);
console.log(alert);   //удалил//

let lovefoods2 = [`sharbin`];
alert(lovefoods2[0]);
lovefoods2.unshift( {
    name: "Шулэн",
    ingredients: ["лапша", "мясо", "репчатый лук", "лавровый лист", "вода", "соль", "перец"],
    price: 150});

alert(lovefoods2[0]);
console.log(lovefoods2);

let timefoods = {
    menu: [
        {
            name: "Шулэн",
            time: "1 час",
            price: 150,
        },
        {
            name: "Шарбин",
            time: "2 часа",
            price: 200},
    ]
}
console.log(timefoods);

let money = {
    money2:[
       {
        name: "Шулэн",
        price: 150,
       },
       {
        name: "Шарбин",
        price: 200,
       },
    ]
}
console.log(money);
console.log(150+200);

let deletefull = [`Шулэн`, `Шарбин`];
deletefull.pop();
alert(deletefull[1]);
console.log(deletefull);

