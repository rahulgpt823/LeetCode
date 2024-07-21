/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
lengthCounter=0;
    let arr1 = x.toString().split('');
    if (arr1[0]!=arr1[arr1.length-1]){
        return false;
    }

    let arr2 = [...arr1].reverse();
    
    for (let x =0; x<arr1.length;x++){
        if(arr1[x]==arr2[x]){
                lengthCounter+=1;
        };
    }

    if(lengthCounter==arr1.length){
        return true;
    }

    return false;
};