const data = [20, 26, 32, 34, 26, 28, 22, 30, 17, 24, 30, 28, 18, 22, 24, 26, 34, 28, 22, 20, 34, 24, 28, 20, 32, 17,
    22, 24, 26, 30, 30, 22, 26, 35, 28, 24, 30, 32, 28, 18, 20, 30, 17, 24, 32, 28, 22, 26, 24, 30, 34, 26,
    24, 28, 22, 30, 35, 32, 20, 17, 28, 22, 36, 30, 20, 26, 28, 23, 24, 32, 20, 26, 30, 24, 32, 17, 22, 28,
    35, 26, 28, 35, 32, 22, 26, 24, 26, 24, 30, 24, 18, 24, 26, 28, 35, 30, 26, 22, 26, 28
];
const jstat = this.jStat(data);
var ctx = document.getElementById('chart').getContext('2d');
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: data.map((value, index) => index),
        datasets: [{
            label: 'hystogram',
            data: data
        }]
    }
});

const average = (data) => data.reduce((a, b) => a + b) / data.length;


const dispersion = (data) => {
    return data.reduce((accumulator, currValue) => accumulator + Math.pow(currValue - average(data), 2), 0) / (data.length - 1);
}


const standardError = (data) => Math.sqrt(dispersion(data) / data.length);

const getSorted = (data) => Object.assign([], data).sort();
const median = (data) => getSorted(data)[(data.length/2-1)];

console.log("average: ", average(data));
console.log("dispersion: ", dispersion(data));
console.log("standardError: ", standardError(data));
console.log("mod: ", jstat.mode(data));
console.log("median: ", median(data)); 
console.log("quartiles: ", jstat.quartiles(data)); 
console.log("Box plot: ", jstat.quartiles(data)); 
console.log("kurtosis: ", jstat.kurtosis(data)); 
console.log("Skewness: ", jstat.skewness(data)); 
console.log("max: ", Math.max(...data));
console.log("min: ", Math.min(...data));