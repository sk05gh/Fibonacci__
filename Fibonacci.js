function fibonacci(n) {
    if (n === 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        const fibArray = [0, 1];
        for (let i = 2; i < n; i++) {
            fibArray.push(fibArray[i-1] + fibArray[i-2]);
        }
        return fibArray;
    }
}

const n = 10; 
const fibNumbers = fibonacci(n);
document.getElementById("fibonacci").innerHTML = fibNumbers.join(", ");