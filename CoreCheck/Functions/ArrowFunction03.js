var shoppingCart = {
    items : [ 'Apple','Orange','Fineapple']
    ,inventory : { Apple: 1, Orange : 0, Fineapple : 0 }
    ,checkout() {
        this.items.forEach( item => {
            if (!this.inventory[item]) {
                console.log(' Item '+ item + ' has sold out. ');
            }
        })
    }
}

shoppingCart.checkout();

const WorkoutPlna = () => {};

// let workout = new WorkoutPlna();
console.log(WorkoutPlna.prototype);