function User(name,inter) {
    this.name = name;
    this.inter = inter;
    this.greeting = function(){
        console.log('Hi, I\'m ' + this.name +'.');
    }
}

var user = new User('timjoo','game');
user.greeting();

User.prototype.greeting = function(){
    console.log(" Hello "+this.name);
}

user.greeting();

var user02 = Object.create(User.prototype, {
    name : {value : 'Hy'},
    inter : {value : 'trip'}
});

user02.greeting();