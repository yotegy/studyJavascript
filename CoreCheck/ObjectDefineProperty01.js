function User(name, depart){
    var _depart = depart;
    var _name = name;

    Object.defineProperty(this,'name',{
        value : _name,
        writable : true,
        enumerable : true,
        configurable : false
    });

    Object.defineProperty(this,'depart',{
        get: function(){
            console.log("### depart get called ###");
            return _depart;
        },
        set: function(value){
            console.log("### input new vaule "+value+" to depart ###");
            _depart = value;
        },
        enumerable:true,
        configurable:true

    });

    Object.defineProperty(this,'greeting',{
        value : function(){
            console.log(' Greeting '+_name);
        },
        enumerable:false,
        configurable:false
    });

}

var user = new User('Danu','home');
console.log(" User's Deaprt : " +user.depart);
console.log(" Show Props ");
for(var prop in user){
    console.log(" prop : "+prop);
}
user.depart = "HR";
user.greeting();

// Error code. Can't modify name. because configurable is false.
// Object.defineProperty(user,'name',{
//     enumerable: false
// });
delete user.name;
delete user.depart;

console.log(" Show Props ");
for(var prop in user){
    console.log(" prop : "+prop);
}