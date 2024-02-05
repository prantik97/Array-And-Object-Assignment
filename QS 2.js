// 2. The following is an array of 10 students ages:
// => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// « Sort the array and find the min and max age.
// + Find the median age(one middle item or two middle items divided by two)
// + Find the average age(all ites divided by number of items)
// + Find the range of the ages(max minus min)
// * Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

let sortedAges = ages.sort(function(a, b){return a - b});

let min = sortedAges[0], max = sortedAges[0]; 
for(let i =1;i<sortedAges.length;i++){
    
    if(sortedAges[i] > max){
        max = sortedAges[i];
    }
    if(sortedAges[i] < min){
        min = sortedAges[i];
    }
}
console.log("The maximum element of the array is: " + max); // The maximum element of the array is: 26
console.log("The minimum element of the array is: " + min); // The minimum element of the array is: 19
//console.log(sortedAges);
if(sortedAges.length % 2 == 0){
    let middleElem1 = sortedAges.length/2 ;
    let middleElem2 = middleElem1-1;
    let median = Math.floor((sortedAges[middleElem1] + sortedAges[middleElem2])/2);
    console.log("The median age is for even array:" , median); // The median age is for even array: 24
}
if(sortedAges.length % 2 !== 0){
    let middleElem1 = Math.ceil(sortedAges.length/2) ;
    let median = sortedAges[middleElem1]
    console.log("The median age is for odd array:" , median);
}

let sum = 0;
for(let i=0;i<sortedAges.length;i++){
    sum += sortedAges[i];
}
let average = sum / (sortedAges.length) ; 
console.log("The average age is:" , average); // The average age is: 22.8

let range = max - min;
console.log("The range is:" , range); // The range is: 7

const minAverageDiff = Math.abs(min - average);
const maxAverageDiff = Math.abs(max - average);

console.log("Min - Average:", minAverageDiff); //Min - Average: 3.8000000000000007
console.log("Max - Average:", maxAverageDiff); //Max - Average: 3.1999999999999993