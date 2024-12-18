const numberArray = [1, 2, 3, 4, 5]

function linearSearch(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i
        }
    }
    return -1
}

function twoPointerLinearSearch(arr, element) {
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        if (arr[left] === element) {
            return left
        }
        if (arr[right] === element) {
            return right
        }
        left++
        right--
    }
    return -1
}

const index = linearSearch(numberArray, 3)
if (index === -1) {
    console.log("Element not found")
} else {
    console.log("Element found at position: ", index)
}

const twoPointerIndex = twoPointerLinearSearch(numberArray, 4)
if (twoPointerIndex === -1) {
    console.log("Element not found")
} else {
    console.log("Element found at position: ", twoPointerIndex)
}