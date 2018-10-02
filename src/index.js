module.exports = function longestConsecutiveLength(array) {
    function sortNumbers(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
    }
    array.sort(sortNumbers);
    let result = 0;
    for(let i = 0, len = array.length, summ = 1; i < len; i++){
        if (array[i - 1] + 1 === array[i]){
            summ++;
            if (summ >= result) {
                result = summ;
            }
        } else {
            summ = 1;
        }
    }
    return result;
};
