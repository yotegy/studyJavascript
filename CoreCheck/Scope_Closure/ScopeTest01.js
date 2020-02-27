function User(name){
    console.log('I\' in "'+this.constructor.name + '" context.');
    this.name = name;
    this.speak = function(){
        console.log(this.name + ' is speaking from "' + this.constructor.name + '" context.');
        var drink = function(){
            console.log(' Drinking in "' + this.constructor.name + '"');
        }
        drink();
    }

    function ask(){
        console.log('Asking from "' + this.constructor.name +'" context');
        console.log('Who am I? "' + this.name + '"');
    }

    ask();
    ask.call(this);
    console.log(" apply this");
    ask.apply(this);
    console.log(" bind this");
    var test = ask.bind(this);
    test.call({name:"DDDD"});  // 변경되지 않는다. 실행 객체를 묶어 버리는 설정
}

var name = 'Unknown';
var user = new User('timjoo');
var user02 = new User( 'JiU');
console.log("#### speaking ##### ");
user.speak();
user.speak.apply({name:'HH'});
user.speak.apply(user02);