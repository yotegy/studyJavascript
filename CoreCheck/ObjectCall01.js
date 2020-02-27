var obj = {};
obj['100'] = 'one hundred';

console.log(obj[100]);
console.log(obj['100']);

var foo = { prop: 'f'}, bar = {prop:'b'};
obj[foo] = 'Foo';
console.log(obj[bar]);
console.log(foo);