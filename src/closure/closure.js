
function greeting() {
    let userName = 'Miguel';

    function displayUserName() {
        return `Hi ${userName}`;
    }
    return displayUserName;
}

const g = greeting();
console.log(g);
console.log(g());