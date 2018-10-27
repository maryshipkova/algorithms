let arr = [150, -1000, 11,3, 100];

function popElements(arr){
    while(arr[arr.length - 1] <= 0)arr.pop();
}
const summ = (accumulator, currentValue) => accumulator + currentValue;

function maxSum(arr){
    let resultArr = [],
    prevArr = [];
    let index = 0;
    let sum = 0;
    let minus = 0;
    for(let i = 0; i < arr.length; ++i){
        if(arr[i] >= 0){
            sum+= arr[i];
            resultArr.push(arr[i]);
        }else {
            if(!resultArr.length)continue;
            if(Math.abs(arr[i] + minus) > sum){
                sum = 0;
                minus = 0;
                index = i;
                popElements(resultArr);
                if(!prevArr.length || prevArr.reduce(summ) < resultArr.reduce(summ)){
                    prevArr.push(...resultArr);
                    resultArr = [];
                }
                
            }else{
                minus +=arr[i];
                resultArr.push(arr[i]);
            }
        }
    }
    popElements(resultArr);

    if(!prevArr.length || prevArr.reduce(summ) > resultArr.reduce(summ)){
        resultArr = prevArr;
    }
    return resultArr;

}

console.log(maxSum(arr));