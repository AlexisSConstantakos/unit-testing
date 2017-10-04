(function () {
    
function changeMachine(money) { 
    let amount = money
    let remainder = 0
    let change = []
    // var billsArray = [ones, fives, tens, twenties]
    change.push(Math.floor(amount/20));
    remainder = amount % 20;
    
    change.push(Math.floor(remainder/10));
    remainder = remainder % 10;
    
    change.push(Math.floor(remainder/5));
    remainder = remainder % 5;
    
    change.push(Math.floor(remainder/1));
    remainder = remainder % 1;
    
    console.log(change);

    return (change)
}
    module.exports = changeMachine;
})()