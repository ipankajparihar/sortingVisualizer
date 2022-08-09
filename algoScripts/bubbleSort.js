// implimenting bubble sort





function bubbleSort(){
    
    var t=0;
    for(let i=0;i<size;i++){
        for(let j=0;j<size-i;j++){
            if(arr[j]>arr[j+1]){
                //updating color of j and j+1 height
                update(div[j],"red",arr[j]);
                update(div[j+1],'red',arr[j+1]);
                
                var temp =arr[j+1];
                arr[j+1]=arr[j];
                arr[j] =temp;

                //updating height of two swapped divs
                update(div[j],'red',arr[j]);
                update(div[j+1],'red',arr[j+1]);
                
            }
            // again changing to blue
            update(div[j],'#3AAFA9',arr[j]);
            t=j;
        }
        //skyblue color for sorted height
         update(div[t],'#87CEEB',arr[t]);
    }
    delay=0;



}