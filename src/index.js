module.exports = function longestConsecutiveLength(array) {
    array.sort((a, b) => a > b? 1 : -1)
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
    return array.length === 0 ? 0 : result;
};
