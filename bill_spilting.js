function isBillSplitCorrect(items,annasAmount,briansAmount) {
    let totalItems = items.reduce((value,cerrentValue) => value+cerrentValue);

    briansAmount;
    let annasPortion = totalItems / 2;

    return (annasPortion == annasAmount);
}

console.log(isBillSplitCorrect([20, 15, 10],22.5,30));