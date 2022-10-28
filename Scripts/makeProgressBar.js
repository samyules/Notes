function makeProgressBar(numerator, denominator, size = 50, filledChar = "█", unFilledChar = "◽", label="") {
    let percentage = numerator / denominator;
    let maxBlocks = size;
    let numFilled = Math.floor(percentage*maxBlocks)
    return `${label}: [${filledChar.repeat(numFilled)}${unFilledChar.repeat(maxBlocks-numFilled)}] ${Math.floor(percentage*100)}% ( ${numerator}/${denominator} )`
}

module.exports = makeProgressBar;

/*
Found at https://kevinquinn.fun/blog/get-started-with-obsidian-periodic-notes-and-templater/
*/
