class User {
    constructor(name, inter){
        this.name = name;
        this.inter = inter;
    }

    greeting() {
        console.log(' greeting '+this.name);
    }
}

let user01 = new User('DanU', 'piano');
user01.greeting();


let Member = class {
    constructor(name, inter){
        this.name = name;
        this.inter = inter;
    }

    greeting() {
        console.log(' greeting '+this.name);
    }
}

let member = new Member('Jiu','walk');

member.greeting();