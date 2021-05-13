function partition(arr, start, end){
    const pivotVal = arr[end];
    let pivotIndex = start;
    for(let i = start; i < end; i++){
        if(arr[i] < pivotVal){
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            pivotIndex++;
        }
    }

    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]
    return pivotIndex;
}

function quickSort(arr, start, end){
    if(start >= end){
        return;
    }
    let index = partition(arr, start, end);

    quickSort(arr, start, index-1);
    quickSort(arr, index+1, end);
}

function merge(left, right){
    let arr = []

    while(left.length && right.length){
        if(left[0] < right[0]){
            arr.push(left.shift())
        }else{
            arr.push(right.shift())
        }
    }

    return [...arr, ...left, ...right]
}

function mergeSort(array){
    const half = array.length / 2

    if(array.length < 2){
        return array;
    }

    const left = array.splice(0, half)
    return merge(mergeSort(left), mergeSort(array))
}

array = [4,8,7,2,11,1,3]
console.log(array)
mergeSort(array)
console.log(array)