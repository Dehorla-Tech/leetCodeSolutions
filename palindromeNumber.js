/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    let str = x.toString()
    let j= str.length - 1;
    let y = str.length / 2; 
    for(let i = 0; i < y; i++){ 
        if(str[i] !== str[j - i]){ 
            return false; 
        } 
    } 
    return true; 

};