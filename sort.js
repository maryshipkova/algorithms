

function bubbleSort(arr){
    for(let i = 0; i<arr.length; ++i){
        for(let j = 0; j<arr.length; ++j){
            if(arr[j]>arr[i]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }

        }
    }
        return arr;
}

console.log(bubbleSort([-1,4,2,8,6,0,1]));