module.exports = function longestConsecutiveLength(array) {
    function sortNumbers(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
    }
    array.sort(sortNumbers);
    if (array.length === 0) {
        return 0;
    }
    let result = 1;
    for(let i = 0, len = array.length, summ = 1; i < len; i++){
        if (array[i - 1] + 1 === array[i]){
            summ++;
            result = Math.max(summ, result);
        } else
            if(array[i - 1] !== array[i]){
            summ = 1;
            }
    }

    return result;


};
