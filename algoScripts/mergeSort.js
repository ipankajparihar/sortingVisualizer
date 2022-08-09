// implementing merge sort



function mergeHelper(l,m,h){
       var n1 = m-l+1;
       var n2  = h-m;

       var arr1 =[];
       var arr2 =[];
       
      
       
       for(var i=0;i<n1;i++){
        arr1[i] = arr[l+i];
       }
       for(var i=0;i<n2;i++){
        arr2[i] = arr[m+1+i];
       }
       
       var i=0;
       var j=0;
       var k=l;

       while(i<n1 && j<n2){
        if(arr1[i]<=arr2[j]){
            arr[k] = arr1[i];
            update(div[k],"red",arr[k]);
            i++;
            k++;
        }else{
            arr[k] = arr2[j];
            update(div[k],"red",arr[k]);
            j++;
            k++;
        }
       }

       while(i<n1){
        arr[k]=arr1[i];
        update(div[k],"red",arr[k]);
        i++;
        k++;

       }
       while(j<n2){
        arr[k] = arr2[j];
        update(div[k],"red",arr[k]);
        j++;
        k++;
       }

      for(var x=0;x<k;x++){
        update(div[x],"#87CEEB",arr[x]);

       }


}


 function merge(l,h){
            if(l<h){
                var m = Math.floor(l+(h-l)/2);
                update(div[m],"yellow",arr[m]);
                merge(l,m);
                merge(m+1,h);
                mergeHelper(l,m,h);
            }
            update(div[0],"#87CEEB",arr[0]);
    }



function mergeSort(){

    merge(0,size-1);
    delay=0;
    


}