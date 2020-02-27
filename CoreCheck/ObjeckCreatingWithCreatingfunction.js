function createUser(name, inter){
    var user = {};
    user.name = name;
    user.inter = inter;
    user.greeting = function() {
        console.log(' Hi ' + this.name +" , bye ");
    };
    return user;
}

var user = createUser("Jiu", ['Swimming','runing']);
user.greeting();

var user02 = createUser('Danu','Playing Piano');
user02.greeting();