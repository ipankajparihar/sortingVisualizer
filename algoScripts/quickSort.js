//implementing quick sort


function swap( i, j){
    
    //updaating the color
    update(div[i],"red",arr[i]);
    update(div[j],"red",arr[j]);

    //swaping elements
    var temp = arr[i];
    arr[i]=arr[j];    
    arr[j]=temp;

    //updating height
    update(div[i],"red",arr[i]);
    update(div[j],"red",arr[j]);

  


}


function partition(l,h){
    //taking first element as pivot
    var pivot = arr[l];
    //making first element as yellow 
    update(div[h],"yellow",arr[h]);
    var k = l+1;

    for(var t =l;t<=h;t++){
       
            if(pivot >arr[t] ){
                
                //updating pivot
                update(div[t],"yellow",arr[t]);
                swap(t,k);
                update(div[k],"#3AAFA9",arr[k]);
                update(div[t],"#3AAFA9",arr[t]);
                k++;
               
            }
    }
    swap(k-1,l);
    
    //coloring sorted arr
    for(var x=l;x<=k;x++){
        update(div[x],"#87CEEB",arr[x]);

       }


    return k-1;

}

function quicksort(l,h){
          if(l<h){
               var pi = partition(l,h);
       
               quicksort(l,pi-1);
               quicksort(pi+1,h);
       }
}


function quickSort(){
  
    quicksort(0,size-1);
    delay=0;
}