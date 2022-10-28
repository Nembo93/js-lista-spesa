`use strict`;
// Dichiara un'array con la lista della spesa
const list = [`pane`, `aqua`, `uova`, `insalata`, `vino`];
console.log(list);

let shoppingList = document.createElement(`ul`);
document.body.appendChild(shoppingList);

let i = 0;
while (i < list.length){
    let item = document.createElement(`li`);
    // item = list[i];
    shoppingList = shoppingList.appendChild(document.createElement(`li`));
    shoppingList.appendChild(document.createTextNode(list[i]));
    console.log(item);
    i = i + 1;
}