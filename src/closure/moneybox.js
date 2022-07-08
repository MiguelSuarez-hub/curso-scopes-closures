// function moneyBox(coins) {
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`You have ${saveCoins}$ in your moneybox`)
// }

// moneyBox(5);

function moneyBox() {
    let saveCoins = 0;

    function countCoins(coins) {
        saveCoins += coins;
        console.log(`You have ${saveCoins}$ in your moneybox`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(23);