function isBillSplitCorrect(items,annasAmount,briansAmount) {
    // let totalItems = items.reduce((value,currentValue) => value+currentValue);
    let totalItems = 0;

    for(let i = 0; i < items.length; i++) {
        totalItems += items[i];
    }

    briansAmount;
    let annasPortion = totalItems / 2;

    return (annasPortion == annasAmount);
}

console.log(isBillSplitCorrect([20, 15, 10],22.5,30));