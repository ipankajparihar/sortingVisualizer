//implementation of selectionSort

function selectionSort(){

    for(let i=0;i<size;i++){
         
        var temp = arr[i];
       
       
        var t=i;
        for(let j=i+1;j<size;j++){
            update(div[i],"#F76C6C",arr[i]);
            update(div[j],"#F76C6C",arr[j]);
            
            

            if(temp>arr[j]){
                
            
              temp =arr[j];

              update(div[t],"#3AAFA9",arr[t]);
              t=j;
              update(div[j],"green",arr[j]);
              
              
              
              
            }else{
                 update(div[j],"#3AAFA9",arr[j]);
            }
            
            
           
            
        }

        
        arr[t] =arr[i];
        update(div[t],"#3AAFA9",arr[t]);
        arr[i] =temp;
        update(div[i],"#87CEEB",temp);


    }
    
    delay=0;
}