function mergeSort(a) {
    //check for valid input values
    if (a === undefined || a.length === 0) {
        return console.log('Please Enter a Valid Array!');
    }
    if (a.length < 2) {
        return a;
    }

    const halfArray = Math.ceil(a.length / 2); //split array in half
    const leftArray = mergeSort(a.slice(0, halfArray)); //recursively call LEFT half of array
    const rightArray = mergeSort(a.slice(halfArray)); //recursively call RIGHT half of array
    return mergeFunc(leftArray, rightArray);
}

function mergeFunc(leftA, rightA) {
    let finishedArray = [];

    //push smallest value into new array
    while (leftA.length > 0 && rightA.length > 0) {
        const smallest = leftA[0] < rightA[0] ? leftA.shift() : rightA.shift();
        finishedArray.push(smallest);
    }

    //concat leftover values in both arrays
    //(should be only one value from either the left or right array) 
    return finishedArray.concat(leftA, rightA);
}

//tests
console.log(mergeSort([1,4,2,6,7,4,3,67,9,5]));
console.log(mergeSort([-5, -5.3, .2, 100, 23, 21, 6, 8, 9.6, 5.657]));
console.log(mergeSort(['a','b','e','c', 'bob', 'johnny']))