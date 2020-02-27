let urgentTask = ['Buy three tickets'];
let normalTask = ['Book a hotel','Rent a car'];
let allTasks = [...urgentTask,...normalTask];

console.log(allTasks);

((first,second) => {
    console.log(' Working on '+first+' with '+second);
})(...allTasks);
