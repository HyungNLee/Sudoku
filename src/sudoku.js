export function Sudoku (rowOne, rowTwo, rowThree, rowFour, rowFive, rowSix, rowSeven, rowEight, rowNine) {
    this.rowOne = rowOne;
    this.rowTwo = rowTwo;
    this.rowThree = rowThree;
    this.rowFour = rowFour;
    this.rowFive = rowFive;
    this.rowSix = rowSix;
    this.rowSeven = rowSeven;
    this.rowEight = rowEight;
    this.rowNine = rowNine;

    this.colOne = [rowOne[0], rowTwo[0], rowThree[0], rowFour[0], rowFive[0], rowSix[0], rowSeven[0], rowEight[0], rowNine[0]];
    this.colTwo = [rowOne[1], rowTwo[1], rowThree[1], rowFour[1], rowFive[1], rowSix[1], rowSeven[1], rowEight[1], rowNine[1]];
    this.colThree = [rowOne[2], rowTwo[2], rowThree[2], rowFour[2], rowFive[2], rowSix[2], rowSeven[2], rowEight[2], rowNine[2]];
    this.colFour = [rowOne[3], rowTwo[3], rowThree[3], rowFour[3], rowFive[3], rowSix[3], rowSeven[3], rowEight[3], rowNine[3]];
    this.colFive = [rowOne[4], rowTwo[4], rowThree[4], rowFour[4], rowFive[4], rowSix[4], rowSeven[4], rowEight[4], rowNine[4]];
    this.colSix = [rowOne[5], rowTwo[5], rowThree[5], rowFour[5], rowFive[5], rowSix[5], rowSeven[5], rowEight[5], rowNine[5]];
    this.colSeven = [rowOne[6], rowTwo[6], rowThree[6], rowFour[6], rowFive[6], rowSix[6], rowSeven[6], rowEight[6], rowNine[6]];
    this.colEight = [rowOne[7], rowTwo[7], rowThree[7], rowFour[7], rowFive[7], rowSix[7], rowSeven[7], rowEight[7], rowNine[7]];
    this.colNine = [rowOne[8], rowTwo[8], rowThree[8], rowFour[8], rowFive[8], rowSix[8], rowSeven[8], rowEight[8], rowNine[8]];

    this.boxOne = [rowOne[0], rowOne[1], rowOne[2], rowTwo[0], rowTwo[1], rowTwo[2], rowThree[0], rowThree[1], rowThree[2]];
    this.boxTwo = [rowOne[3], rowOne[4], rowOne[5], rowTwo[3], rowTwo[4], rowTwo[5], rowThree[3], rowThree[4], rowThree[5]];
    this.boxThree = [rowOne[6], rowOne[7], rowOne[8], rowTwo[6], rowTwo[7], rowTwo[8], rowThree[6], rowThree[7], rowThree[8]];
    this.boxFour = [rowFour[0], rowFour[1], rowFour[2], rowFive[0], rowFive[1], rowFive[2], rowSix[0], rowSix[1], rowSix[2]];
    this.boxFive = [rowFour[3], rowFour[4], rowFour[5], rowFive[3], rowFive[4], rowFive[5], rowSix[3], rowSix[4], rowSix[5]];
    this.boxSix = [rowFour[3], rowFour[4], rowFour[5], rowFive[3], rowFive[4], rowFive[5], rowSix[3], rowSix[4], rowSix[5]];
    this.boxSeven = [rowSeven[0], rowSeven[1], rowSeven[2], rowEight[0], rowEight[1], rowEight[2], rowNine[0], rowNine[1], rowNine[2]];
    this.boxEight = [rowSeven[3], rowSeven[4], rowSeven[5], rowEight[3], rowEight[4], rowEight[5], rowNine[3], rowNine[4], rowNine[5]];
    this.boxNine = [rowSeven[6], rowSeven[7], rowSeven[8], rowEight[6], rowEight[7], rowEight[8], rowNine[6], rowNine[7], rowNine[8]];
}

// Sudoku.prototype.checkSolution = function() {
//     let boolSum = 0; 
//     const reducer = (accumulator, currentValue) => accumulator + currentValue;

//     for (let prop in this) {
//         let sum = prop.reduce(reducer);
//         boolSum += (sum === 45);
//     }
    
//     if (boolSum === 18) {
//         return true;
//     } else {
//         return false;
//     }
// };

// let convertArrayToObject = function(arr) {
//     let newObject = {};
//     for (let i = 0; i < arr.length; i++) {
//         newObject[arr[i]] = "";
//     }
//     return newObject; 
// }

// let convertObjectToArray = function(obj) {
//     let newArray = [];
//     for (let prop in obj) {
//         newArray.push(prop);
//     }
//     return newArray; 
// }

// let checkRowForDuplicates = function(row) {
//     let rowWithoutDuplicates = row.sort().convertArrayToObject().convertObjectToArray();
//     return row.length === rowWithoutDuplicates.length; 
// }

Sudoku.prototype.checkSolution = function() {
    let properArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let boolArray = [];
    for (let prop in this) {
        prop.sort();
        let bool = true;
        for (let i = 0; i < 9; i++) {
            if (prop[i] !== properArray[i]) {
                bool = false; 
            }
        }
        boolArray.push(bool);
    }
    for (let i = 0; i < boolArray.length; i++) {
        if (!boolArray[i]) {
            return false; 
        }
    }
    return true; 
};