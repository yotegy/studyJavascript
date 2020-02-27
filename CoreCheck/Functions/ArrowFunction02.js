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

var name = 'Unknow';

var greeting = () => {
    console.log(' Hi '+this.name);
};

greeting.call({name:'Ssss'});
greeting.apply({name:'Tod'});
var newGreeting = greeting.bind({name:'Jame'});
newGreeting();