

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

function selectionSort(arr){
    for(let i = 0; i<arr.length; ++i){
        let min = Infinity;
        let minIndex = null;
        //get min
        for(let j = i; j<arr.length; ++j){
            if(arr[j]< min){
                minIndex = j;  
                min = arr[j];
            }
        }
        //swap
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}


function insertionSort(arr){
    for(let i = 1; i < arr.length; ++i){
        let key = i;
        let j = i;
        while(j >= 0 && arr[key] < arr[j-1]){
            --j;
            let temp = arr[key];
            arr[key] = arr[j];
            arr[j] = temp;
            --key;
            
        }
       
    }
        return arr;
}

console.log('insertion sort',insertionSort([-1,9,2,8,6,10,0,5]));