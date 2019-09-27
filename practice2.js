function candles(arr){
    let sortArr = arr.sort(sortNumber);
    let blownCandles=0;
    for (let i=0; i<sortArr.length; i++){
        if(sortArr[i] === sortArr[sortArr.length-1]){
            blownCandles ++
        }
    }
    console.log(blownCandles);
}

function sortNumber(a,b){
    return a-b
}

let candleArr = [1,3,2,3,5,5,2,5,5];
candles(candleArr);