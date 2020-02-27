function workout(){
    gotoGym();
    var gotoGym  = function(){
        console.log(' Workout in Gym A');
    }
    return;

    // gotoGym이 hoisting되어 맨 위로 올라간다.
    function gotoGym(){
        console.log(' Workout skip ');
    }
}

workout();