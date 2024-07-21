/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let sort_Arr= strs.sort();
    const small_str= sort_Arr[0];
    
    let common_str='';
    if(strs.length==0){
        common_str;
    }
    else if(strs.length==1){
        common_str=strs[0]
    }
    else{
    for (let x=0;x<small_str.length;x++ ){
        let each_Char=small_str[x]
        for(let j=1;j<sort_Arr.length;j++){
            if (each_Char !== sort_Arr[j][x]){
                return common_str
            }   
        }
    common_str+=each_Char;
    }
}
  return common_str  
};