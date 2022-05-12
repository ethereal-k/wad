console.log('javscript is running');




function createtable(nr_row,nr_col,start_val,tabl1){
    var str='<table>';
    var arr=[];
    for (var i=0;i<nr_row;i++){
        str=str+'<tr>';
        var val=start_val*(i+1);
        arr.push(val)
        str=str+`<td> ${ val } </td>`;
        for (var j=1;j<nr_col;j++){
            val=val+(i+1);
            arr.push(val)
            str=str+`<td> ${ val } </td>`;
        }
        str=str+'</tr>';
    }
    str=str+'</table>';
    tabl1.innerHTML=str;
    return arr;
}

function submit(){
    var input=document.getElementById('input').value;
    console.log(input)
    var nr_row=3
    var nr_col=3;
    var start_val=3;
    var str='<table>'
    var arr1=[];
    var arr2=[]
    var tabl1=document.getElementById('table1');
    var arr3=[];
    arr1=createtable(nr_row,nr_col,start_val,tabl1);
    start_val=2;
    var tabl2=document.getElementById('table2');
    arr2=createtable(nr_row,nr_col,start_val,tabl2);
    var j=0;
    str=str+'<tr>';
    for (var i=0;i<arr1.length;i++){
        if (arr1[i]==arr2[i]){
            arr3.push(arr1[i]);
            if  (i!=0 & i%3==0){
                str=str+'</tr>';
                str=str+'<tr>';
                str=str+`<td style='background-color:green'> ${ arr3[i] } </td>`
            }
            else{
                str=str+`<td style='background-color:green> ${ arr3[i] } </td>`
            }
            continue;
        }
        arr3.push(arr1[i]*arr2[i]);
        if  (i!=0 & i%3==0){
            str=str+'</tr>';
            str=str+'<tr>';
            str=str+`<td style='background-color:red'> ${ arr3[i] } </td>`
        }
        else{
            str=str+`<td style='background-color:red'> ${ arr3[i] } </td>`
        }
    }
    str=str+'</tr>';
    str=str+'</table>';
    var tabl3=document.getElementById('table3');
    tabl3.innerHTML=str;
}