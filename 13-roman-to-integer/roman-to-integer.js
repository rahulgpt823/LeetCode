/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum =0 ;
    let eachChar=s.split('');

    for(let x=0;x<eachChar.length;x++){

        if(eachChar[x]=='I'){


         if (eachChar[x+1]=='V'){
            sum+=4;
            x+=1;;
         }

         else if (eachChar[x+1]=='X'){
            sum+=9;
            x+=1;;
         }

         else{
            sum+=1;
         }
            
         }

        else if(eachChar[x]=='X'){
            
            if (eachChar[x-1]=='I'){
                continue;
             }

            else if (eachChar[x+1]=='L'){
               sum+=40;
               x+=1;;
            }
            else if (eachChar[x+1]=='C'){
               sum+=90;
               x+=1;;
            }
            else{
               sum+=10;
            }
               
        }

        else if(eachChar[x]=='C'){

            if (eachChar[x-1]=='X'){
                continue;
             }

            else if (eachChar[x+1]=='D'){
               sum+=400;
               x+=1;;
            }
            else if (eachChar[x+1]=='M'){
               sum+=900;
               x+=1;;
            }

            else{
               sum+=100;
            }
               
        }
            
        else if(eachChar[x]=='V'){
            
            if (eachChar[x-1]=='I'){
                continue;
                }
            else{
                   sum+=5;
                }
                   
        }

        else if(eachChar[x]=='L'){
            if (eachChar[x-1]=='X'){
                continue;
            }
            else{
                 sum+=50;
            }
                   
        }
        
        else if(eachChar[x]=='D'){
                    if (eachChar[x-1]=='C'){
                        continue;
                    }
                    else{
                       sum+=500;
                    }
                       
                    }
        if(eachChar[x]=='M'){
                    if (eachChar[x-1]=='C'){
                        continue;
                    }
                    else{
                       sum+=1000;
                    }
                       
                    }


    }
    return sum;
}