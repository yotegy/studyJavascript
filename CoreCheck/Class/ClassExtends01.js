class User{
    constructor(name, inters) {
        this.name = name;
        this.inters = inters;
    }

    greeting(){
        console.log(" hello, I am "+this.name);
    }

    get intersCount(){
        return this.inters ? this.inters.length : 0;
    }
}

class TeamMember extends User{
    constructor(name, inters) {
        super(name,inters);
        this._tasks = [];
        this._welcomeText = 'Weclome to our team';
    }

    greeting() {
        console.log(" Hello,  "+this._welcomeText);
    }

    work() {
        console.log(" I am working on " + this._tasks.length + ' tasks ');
    }

    set tasks(tasks){
        let acceptedTasks = [];
        if (tasks.length > TeamMember.maxTaskCapacity()){
            acceptedTasks = tasks.slice(0, TeamMember.maxTaskCapacity());
            console.log('It\'s over max capacity. Team member can take only two tasks ');
        } else {
            acceptedTasks = tasks;
        }
        this._tasks = this._tasks.concat(acceptedTasks);
    }
    static maxTaskCapacity(){
        return 2;
    }
}

let member = new TeamMember('DanU',['Reading']);
member.greeting();
member.tasks = ['Eat breakfast','read a book','play toys'];
member.work();
console.log(member.intersCount);
console.log(member._tasks);
member.intersCount = 3;
console.log(member.intersCount);

User.prototype.eat = function(){
    console.log(' What will I eat for lunch?');
}

member.eat();

User.sleep = function(){
    console.log(' go to sleep ');
}

console.log(User.prototype.hasOwnProperty('eat'));
console.log(User.hasOwnProperty('eat'));
console.log(User.prototype.hasOwnProperty('sleep'));
console.log(User.hasOwnProperty('sleep'));


// literals
const advice = 'Stay hungry. Or die';

let advisor = {
    __proto__ : new TeamMember('Adam', ['Consulting']),
    advice,
    greeting() {
        super.greeting();
        console.log(this.advice);
    },
    [advice.split('.')[0]] : ' Always learn more'
};

console.log(" advisor is prototype of TeamMember ? : ",TeamMember.prototype.isPrototypeOf(advisor));
console.log(" advisor is instance of TeamMember ? : ",advisor instanceof TeamMember);
advisor.greeting();
console.log(advisor['Stay hungry']);