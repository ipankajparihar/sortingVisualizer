//implementing insertion sort


function insertionSort(){
    
    
    for(var i=1;i<size;i++){
        var temp = arr[i];
        update(div[i],"black",arr[i]);
        var j=i-1;
        while(j>=0){
            if(arr[j]>temp){
                //update color
               update(div[j],"red",arr[j]);
                update(div[j+1],"red",arr[j+1]);
                arr[j+1] = arr[j];
                //update height
               update(div[j],"red",arr[j]);
               update(div[j+1],"red",arr[j+1]);
               update(div[j],"#3AAFA9",arr[j]);
            
            } else{
                break;
            }
            j=j-1;

        }
        update(div[i],"black",arr[i]);
        arr[j+1] = temp;
        for(var k=0;k<i;k++){
            update(div[k],"#87CEEB",arr[k]);
        }
        update(div[i],"#87CEEB",arr[i]);
        

    }
    
    delay=0;


}
