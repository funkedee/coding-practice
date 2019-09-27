function minMax(arr){
    let sortArr = arr.sort();
    let min = 0;
    let max = 0;
    for (i = 0; i<sortArr.length - 1; i++){
        min += sortArr[i];
    };
    for (i=1; i<sortArr.length; i++){
        max += sortArr[i];
    };
    console.log(min, max)
}

let nums = [2,6,5,4,8,1]
minMax(nums);