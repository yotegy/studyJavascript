function User(name, inter){
    this.name = name;
    this.inter = inter;
}

User.prototype.greeting = function(){
    console.log(" Hello "+this.name);
}

// Function 은 생성자 객체로 function 객체를 만드는 것이다.
console.log(" User.constructor === Function " ,User.constructor === Function);
console.log(" User.prototype.constructor === User " ,User.prototype.constructor === User);
console.log(" User.prototype.constructor instanceof Function " ,User.prototype.constructor instanceof Function);
console.log(" User.constructor === User " ,User.constructor === User);
var user = new User();
console.log(" user.__proto__ === User.prototype",user.__proto__ === User.prototype);

console.log("");
console.log(" ## TeamMember Test ## ");

function TeamMember(name, inter, tasks){
    User.call(this,name, inter);
    this.tasks = tasks;
}
TeamMember.prototype = Object.create(User.prototype);
TeamMember.prototype.greeting = function(){
    console.log(" Halo Team memeber "+this.name);
}
TeamMember.prototype.work = function(){
    console.log(" You have to work "+this.tasks.length+' tasks');
}

console.log("User.prototype === TeamMember.prototype" ,User.prototype === TeamMember.prototype);
console.log("User.prototype.constructor === TeamMember.prototype.constructor",
                User.prototype.constructor === TeamMember.prototype.constructor);
console.log("User === TeamMember.prototype.constructor",
    User === TeamMember.prototype.constructor);

var member = new TeamMember('Sunny',['Traveling'],['Buy item','Sell item']);
member.greeting();
member.work();

console.log("member instanceof TeamMember ",member instanceof TeamMember);
console.log("member instanceof User ",member instanceof User);
console.log("member instanceof Object ",member instanceof Object);

User.prototype.eat = function() {
    console.log(" What will I have for lunch?");
}

member.eat();


Object.prototype.move = function(){
    console.log(" Every Object can move ", this);
}

member.move();
var alien = {};
alien.move();
User.move();

console.log("member.__proto__ === TeamMember.prototype", member.__proto__ === TeamMember.prototype);
console.log("TeamMember.prototype.__proto__ === User.prototype", TeamMember.prototype.__proto__ === User.prototype);
console.log("User.prototype.__proto__ === Object.prototype", User.prototype.__proto__ === Object.prototype);

console.log("TeamMember.prototype.isPrototypeOf(member)",TeamMember.prototype.isPrototypeOf(member));
console.log("member.hasOwnProperty('name')",member.hasOwnProperty('name'));
console.log("member.hasOwnProperty('move')",member.hasOwnProperty('move'));
