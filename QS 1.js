// 1. In the following shopping cart add, remove, and edit items => 
//   const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey.] 
// . add 'Meat' in the beginning of your shopping cart if it has not been already added 
// . add Sugar at the end of you shopping cart if it has not been already added 
// . remove 'Honey' if you are allergic to honey 
// . modify Tea to 'Green Tea' 

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];


if (shoppingCart.includes('Meat') == false) {
    shoppingCart.unshift('Meat');
}


if (shoppingCart.includes('Sugar') == false) {
    shoppingCart.push('Sugar');
}


const allergicToHoney = true; 
if (allergicToHoney) {
    const indexOfHoney = shoppingCart.indexOf('Honey');
    shoppingCart.splice(indexOfHoney, 1);

}


const indexOfTea = shoppingCart.indexOf('Tea');
shoppingCart[indexOfTea] = 'Green Tea';



console.log(shoppingCart); // Output: [ 'Meat', 'Milk', 'Coffee', 'Green Tea', 'Sugar' ]
