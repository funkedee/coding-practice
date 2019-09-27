function grade(arr) {
    let newGrades = [];
    for (let i=0; i<arr.length; i++){
        if(arr[i]<38){
            newGrades.push(arr[i]);
        }
        else if (arr[i] % 5 >= 3){
            newGrades.push ((arr[i]%5) + arr[i]-1);
        }
        else{
            newGrades.push(arr[i]);
        };
    };
    for(let i=0; i< newGrades.length; i++){
        console.log(newGrades[i]);
    };
};

const grades = [73,67,38,33];

grade(grades);