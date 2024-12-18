const numberArray = [1, 2, 3, 4, 5]

function binarySearch(arr, element) {
    let low = 0
    let high = arr.length - 1
    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        if (arr[mid] === element) {
            return mid
        }
        if (arr[mid] < element) {
            low = mid + 1
        }
        if (arr[mid] > element) {
            high = mid - 1
        }
    }
    return -1
}

function recursiveBS(arr, element, low, high) {
    if (low > high) {
        return -1
    }
    const mid = Math.floor((low + high) / 2)
    if (arr[mid] === element) {
        return mid
    }
    if (arr[mid] < element) {
        return recursiveBS(arr, element, mid + 1, high)
    }
    if (arr[mid] > element) {
        return recursiveBS(arr, element, low, mid - 1)
    }
}
console.log(binarySearch(numberArray, 2))
console.log(recursiveBS(numberArray, 4, 0, numberArray.length - 1))