const express=require('express')
const mongoclient=require('mongodb').MongoClient;
const app=express()
const url='mongodb://localhost:27017'

var str=""
str=str+"<table border=1>"

mongoclient.connect(url,function(err,dob){
    if (err) throw err;
    db11=dob.db('student')
    db11.collection('stu').findOne({ name : "xyz" } , function(err,result){
        if (err) throw err;
        console.log(result);
        str=str+result.name;
    })
    /*db11.collection('stu').updateOne({ name : "lmn" },{ $inc : { marks : 10 } },function(err,result){
        if (err) throw err;
        console.log(result);
    })*/
    db11.collection('stu').findOne({ name : "lmn" },{ },function(err,result){
        if (err) throw err;
        console.log(result);
    })
    /*db11.collection('stu').find({ $and : [ { name : "xyz" },{ marks :{ $gt : 80 }}] },{}).toArray().then((ans)=>{
        if (err) throw err;
        console.log(ans);
    })*/
    db11.collection('stu').find({ },{ }).toArray().then((ans)=>{
        console.log(ans);
        for (var i=0;i<ans.length;i++){
            str=str+'<tr>';
            str=str+`<td> ${ ans[i].name } </td>`
            str=str+`<td> ${ ans[i].Roll_no } </td>`
            str=str+`<td> ${ ans[i].marks} </td>`
            str=str+'</tr>'
        }
        str=str+'</table>';
    })
    db11.collection('stu').find().count(function(err,result){
        if (err) throw err;
        console.log(result);
    })
})


app.get('/',function(req,res){
    console.log(`string is ${ str }`)
    res.send(str);
})

app.listen(5000,function(){
    console.log(`server is running at port ${ 5000 }`)
})